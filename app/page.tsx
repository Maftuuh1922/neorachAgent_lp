import Ticker from "@/components/Ticker";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppSection from "@/components/AppSection";
import OsCards from "@/components/OsCards";
import Features from "@/components/Features";
import Portal from "@/components/Portal";
import FooterCta from "@/components/FooterCta";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <div className="page" id="top">
      <div className="frame" aria-hidden="true" />
      <Ticker />
      <Navbar />
      <main>
        <Hero />
        <AppSection />
        <OsCards />
        <Features />
        <Portal />
        <FooterCta />
      </main>
      <Footer />
      <Reveal />
    </div>
  );
}
