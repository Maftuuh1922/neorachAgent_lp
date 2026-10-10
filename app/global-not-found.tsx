import type { Metadata } from "next";
import { RootShell, buildMetadata } from "@/lib/rootShell";
import Navbar from "@/components/Navbar";
import { asset } from "@/lib/site";

export const metadata: Metadata = { ...buildMetadata("en"), title: "404 · Neovarch Agent", robots: { index: false } };

export default function GlobalNotFound() {
  return (
    <RootShell lang="en">
      <div className="page" id="top">
        <div className="frame" aria-hidden="true" />
        <Navbar lang="en" />
        <main>
          <section className="section">
            <div className="wrap">
              <p className="label">// 404</p>
              <h1 className="title title--lg">Page not found</h1>
              <p className="section__intro">
                Halaman tidak ditemukan. <a href={asset("/")}>Home</a> · <a href={asset("/id/")}>Beranda</a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </RootShell>
  );
}
