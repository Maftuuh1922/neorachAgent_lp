import type { Lang } from "@/lib/rootShell";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import GettingStarted from "./GettingStarted";
import License from "./License";
import Footer from "./Footer";

export default function Landing({ lang }: { lang: Lang }) {
  return (
    <div className="page" id="top">
      <div className="frame" aria-hidden="true" />
      <Navbar lang={lang} />
      <main>
        <Hero lang={lang} />
        <Features lang={lang} />
        <GettingStarted lang={lang} />
        <License lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
