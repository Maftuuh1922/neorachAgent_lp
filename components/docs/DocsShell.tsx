import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { ALL_DOCS, DOC_SECTIONS, type FlatDoc } from "@/content/docs/nav";
import { APP_REPO_URL, ISSUES_URL, RELEASE_URL, RELEASE_VERSION, REPO_URL, asset } from "@/lib/site";
import type { Heading } from "./markdown";
import { searchIndex } from "./source";

// Vanilla runtime for the docs (the build strips framework JS): search over titles and
// headings, copy buttons on code blocks, active entry in "Di halaman ini", drawer close.
const docsRuntime = (index: unknown) => `(function(){var d=document,B=${JSON.stringify(process.env.NEXT_PUBLIC_BASE_PATH ?? "")};
var idx=${JSON.stringify(index).replace(/</g, "\\u003c")};
var q=d.getElementById("dx-q"),box=d.getElementById("dx-results");
function esc(s){return s.replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function run(){var v=(q.value||"").toLowerCase().trim();if(!v){box.hidden=true;box.innerHTML="";return}
var w=v.split(/\\s+/),hits=[];for(var i=0;i<idx.length&&hits.length<12;i++){var e=idx[i],hay=(e.t+" "+(e.h||"")+" "+e.s).toLowerCase();
if(w.every(function(x){return hay.indexOf(x)>-1}))hits.push(e)}
box.innerHTML=hits.length?hits.map(function(e){return '<a class="dx-hit" href="'+B+e.u+'"><span class="dx-hit__s">'+esc(e.s)+' / '+esc(e.t)+'</span>'+(e.h?'<span class="dx-hit__h">'+esc(e.h)+'</span>':'<span class="dx-hit__h">'+esc(e.t)+'</span>')+'</a>'}).join(""):'<p class="dx-hit dx-hit--none">Tidak ada hasil untuk "'+esc(v)+'"</p>';box.hidden=false}
if(q){q.addEventListener("input",run);q.addEventListener("focus",run);
q.addEventListener("keydown",function(e){if(e.key==="Escape"){q.value="";run();q.blur()}if(e.key==="Enter"){var a=box.querySelector("a");if(a)location.href=a.href}});
d.addEventListener("keydown",function(e){var t=e.target&&e.target.tagName;if((e.key==="/"&&t!=="INPUT"&&t!=="TEXTAREA")||((e.ctrlKey||e.metaKey)&&(e.key||"").toLowerCase()==="k")){e.preventDefault();q.focus()}});
d.addEventListener("click",function(e){if(!e.target.closest||!e.target.closest(".dx-search"))box.hidden=true})}
d.querySelectorAll("[data-copycode]").forEach(function(b){b.addEventListener("click",function(){var c=b.parentNode.querySelector("code");navigator.clipboard&&navigator.clipboard.writeText(c.textContent).then(function(){b.textContent="Tersalin";setTimeout(function(){b.textContent="Salin"},1500)})})});
var nv=d.querySelector(".nav"),pg=d.querySelector(".dx-page");function nh(){if(nv&&pg)pg.style.setProperty("--dx-nav-h",nv.offsetHeight+"px")}nh();addEventListener("resize",nh);
var m=d.getElementById("dx-menu");d.querySelectorAll(".dx-drawer a").forEach(function(a){a.addEventListener("click",function(){if(m)m.checked=false})});
var links=d.querySelectorAll(".dx-toc a[href^='#']");if(links.length&&"IntersectionObserver"in window){var map={};links.forEach(function(a){map[a.getAttribute("href").slice(1)]=a});
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.remove("on")});var a=map[e.target.id];if(a)a.classList.add("on")}})},{rootMargin:"-90px 0px -70% 0px"});
Object.keys(map).forEach(function(id){var h=d.getElementById(id);if(h)o.observe(h)})}})();`;

function SideNav({ current }: { current?: FlatDoc }) {
  return (
    <nav aria-label="Navigasi dokumentasi">
      <a className={`dx-side__home${current ? "" : " on"}`} href={asset("/docs/")}>
        Ikhtisar
      </a>
      {DOC_SECTIONS.map((s) => (
        <div key={s.slug} className="dx-side__group">
          <p className="dx-side__title">{s.title}</p>
          <ul>
            {s.pages.map((p) => {
              const href = `/docs/${s.slug}/${p.slug}/`;
              const on = current?.href === href;
              return (
                <li key={p.slug}>
                  <a href={asset(href)} className={on ? "on" : undefined} aria-current={on ? "page" : undefined}>
                    {p.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default function DocsShell({
  current,
  headings = [],
  children,
}: {
  current?: FlatDoc;
  headings?: Heading[];
  children: ReactNode;
}) {
  const i = current ? ALL_DOCS.findIndex((d) => d.href === current.href) : -1;
  const prev = i > 0 ? ALL_DOCS[i - 1] : undefined;
  const next = current ? ALL_DOCS[i + 1] : ALL_DOCS[0];
  const toc = headings.filter((h) => h.depth === 2 || h.depth === 3);

  return (
    <div className="page dx-page" id="top">
      <Navbar />
      <input type="checkbox" id="dx-menu" className="dx-menu-toggle" aria-hidden="true" tabIndex={-1} />
      <div className="dx-bar">
        <div className="wrap dx-bar__row">
          <label htmlFor="dx-menu" className="dx-menu-btn" aria-label="Buka menu dokumentasi">
            <span aria-hidden="true">☰</span> Menu
          </label>
          <p className="dx-crumbs">
            <a href={asset("/docs/")}>Docs</a>
            {current ? (
              <>
                <span aria-hidden="true">/</span>
                <span>{current.section.title}</span>
                <span aria-hidden="true">/</span>
                <span className="dx-crumbs__here">{current.title}</span>
              </>
            ) : null}
          </p>
          <div className="dx-search" role="search">
            <input
              id="dx-q"
              type="search"
              placeholder="Cari di dokumentasi"
              aria-label="Cari di dokumentasi"
              autoComplete="off"
              spellCheck={false}
            />
            <kbd className="dx-search__kbd" aria-hidden="true">/</kbd>
            <div id="dx-results" className="dx-results" hidden />
          </div>
        </div>
        <div className="dx-drawer">
          <SideNav current={current} />
        </div>
      </div>

      <div className="wrap dx-grid">
        <aside className="dx-side">
          <SideNav current={current} />
        </aside>

        <main className="dx-main" id="konten">
          {children}

          {current ? (
            <p className="dx-edit">
              <a href={`${REPO_URL}/edit/main/${current.file}`} target="_blank" rel="noopener noreferrer">
                Edit halaman ini di GitHub
              </a>
            </p>
          ) : null}

          <nav className="dx-pager" aria-label="Halaman sebelumnya dan berikutnya">
            {prev ? (
              <a className="dx-pager__link" href={asset(prev.href)}>
                <span className="dx-pager__dir">← Sebelumnya</span>
                <span className="dx-pager__title">{prev.title}</span>
              </a>
            ) : current ? (
              <a className="dx-pager__link" href={asset("/docs/")}>
                <span className="dx-pager__dir">← Sebelumnya</span>
                <span className="dx-pager__title">Ikhtisar</span>
              </a>
            ) : (
              <span />
            )}
            {next ? (
              <a className="dx-pager__link dx-pager__link--next" href={asset(next.href)}>
                <span className="dx-pager__dir">Berikutnya →</span>
                <span className="dx-pager__title">{next.title}</span>
              </a>
            ) : null}
          </nav>
        </main>

        <aside className="dx-toc" aria-label="Di halaman ini">
          {toc.length ? (
            <>
              <p className="dx-toc__title">Di halaman ini</p>
              <ul>
                {toc.map((h) => (
                  <li key={h.id} className={h.depth === 3 ? "dx-toc__sub" : undefined}>
                    <a href={`#${h.id}`}>{h.text}</a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </aside>
      </div>

      <footer className="dx-footer">
        <div className="wrap dx-footer__row">
          <p className="dx-footer__name">Neovarch Agent {RELEASE_VERSION} · Dokumentasi</p>
          <nav className="dx-footer__links" aria-label="Tautan footer dokumentasi">
            <a href={asset("/")}>Beranda</a>
            <a href={RELEASE_URL} target="_blank" rel="noopener noreferrer">Rilis</a>
            <a href={ISSUES_URL} target="_blank" rel="noopener noreferrer">Laporkan masalah</a>
            <a href={APP_REPO_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={asset("/docs/llms.txt")}>llms.txt</a>
          </nav>
        </div>
      </footer>
      {/* data-id="rt" keeps this script through scripts/clean.mjs, which strips all other scripts */}
      <script data-id="rt" dangerouslySetInnerHTML={{ __html: docsRuntime(searchIndex()) }} />
    </div>
  );
}
