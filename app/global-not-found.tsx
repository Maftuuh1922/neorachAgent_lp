import type { Metadata } from "next";
import { RootShell, buildMetadata } from "@/lib/rootShell";
import Navbar from "@/components/Navbar";
import { asset } from "@/lib/site";

export const metadata: Metadata = { ...buildMetadata("id"), title: "404 · Neovarch Agent", robots: { index: false } };

export default function GlobalNotFound() {
  return (
    <RootShell lang="id">
      <div className="page" id="top">
        <div className="frame" aria-hidden="true" />
        <Navbar />
        <main>
          <section className="section">
            <div className="wrap">
              <p className="label">// 404</p>
              <h1 className="title title--lg">Halaman tidak ditemukan</h1>
              <p className="section__intro">
                Page not found. <a href={asset("/")}>Beranda</a> · <a href={asset("/en/")}>Home</a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </RootShell>
  );
}
