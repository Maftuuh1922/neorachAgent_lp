// Post-build: ship plain HTML + CSS + one inline script. Drops the framework runtime,
// its payloads and its tell-tale paths and class names.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const OUT = "out";
const OLD = "_next";
const NEW = "s";

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    e.isDirectory() ? walk(p, acc) : acc.push(p);
  }
  return acc;
}

// 1. remove runtime JS and RSC payload files
for (const f of walk(OUT)) {
  if (f.endsWith(".js") && f.includes(`${path.sep}${OLD}${path.sep}`)) fs.rmSync(f);
  else if (f.endsWith(".txt") && !f.endsWith("robots.txt")) fs.rmSync(f);
}
// 2. rename the asset dir
const oldDir = path.join(OUT, OLD);
if (fs.existsSync(oldDir)) fs.renameSync(oldDir, path.join(OUT, NEW));
// drop now-empty dirs
(function prune(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) if (e.isDirectory()) prune(path.join(d, e.name));
  if (d !== OUT && fs.readdirSync(d).length === 0) fs.rmdirSync(d);
})(OUT);

// 3. flatten every bundled asset to s/<hash>.<ext>
const moves = [];
const sDir = path.join(OUT, NEW);
if (fs.existsSync(sDir)) {
  for (const f of walk(sDir)) {
    const ext = path.extname(f);
    const h = crypto.createHash("sha1").update(fs.readFileSync(f)).digest("hex").slice(0, 10);
    const rel = path.relative(OUT, f).split(path.sep).join("/");
    moves.push([`/${OLD}/` + rel.slice(NEW.length + 1), `/${NEW}/${h}${ext}`, f, path.join(sDir, h + ext)]);
  }
  for (const [, , from, to] of moves) fs.renameSync(from, to);
  (function prune(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) if (e.isDirectory()) prune(path.join(d, e.name));
    if (d !== sDir && fs.readdirSync(d).length === 0) fs.rmdirSync(d);
  })(sDir);
}

const scrub = (s) =>
  moves
    .reduce((acc, [a, b]) => acc.replaceAll(a, b).replaceAll(a.replace(`/${OLD}/`, "/" + NEW + "/"), b), s)
    .replaceAll(`/${OLD}/`, `/${NEW}/`)
    .replace(/\b([A-Za-z0-9]{6})_(variable|className)\b/g, (m, a, b) => (b === "variable" ? "f" : "k") + a)
    .replace(/\s?data-precedence="[^"]*"/g, "")
    .replace(/charSet=/g, "charset=")
    .replace(/__variable_[0-9a-f]+/g, (m) => "v" + m.slice(11, 17))
    .replace(/__className_[0-9a-f]+/g, (m) => "c" + m.slice(12, 18));

for (const f of walk(OUT)) {
  if (f.endsWith(".css")) {
    const base = new Map(moves.map(([a, b]) => [path.posix.basename(a), path.posix.basename(b)]));
    const css = fs.readFileSync(f, "utf8").replace(/url\((["']?)\.\.\/(?:media|chunks)\/([^)"']+)\1\)/g, (m, q, n) => `url(${base.get(n) ?? n})`);
    fs.writeFileSync(f, scrub(css));
  }
  if (!f.endsWith(".html")) continue;
  let h = fs.readFileSync(f, "utf8");
  h = h
    .replace(/<script\b(?![^>]*id="rt")[^>]*>[\s\S]*?<\/script>/g, "") // all scripts except our runtime
    .replace(/<link[^>]+rel="(?:preload|modulepreload)"[^>]+as="script"[^>]*\/?>/g, "")
    .replace(/<link[^>]+as="script"[^>]+rel="(?:preload|modulepreload)"[^>]*\/?>/g, "")
    .replace(/<meta name="next-size-adjust"[^>]*\/?>/g, "")
    .replace(/<!--\/?\$\??-->/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\s?data-scroll-behavior="smooth"/g, "")
    .replace(/<div hidden=""?>[\s\S]*?<\/div>/g, "")
    .replace(/<next-route-announcer[\s\S]*?<\/next-route-announcer>/g, "");
  fs.writeFileSync(f, scrub(h));
}
console.log("clean: done");
