import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GettingStarted from "@/components/GettingStarted";
import License from "@/components/License";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="page" id="top">
      <div className="frame" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <GettingStarted />
        <License />
      </main>
      <Footer />
    </div>
  );
}
