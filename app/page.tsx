import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Setup from "@/components/Setup";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Collaboration from "@/components/Collaboration";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page" id="top">
      <main className="main">
        <Hero />
        <Concept />
        <Setup />
        <Features />
        <HowItWorks />
        <Collaboration />
        <Comparison />
      </main>
      <Footer />
    </div>
  );
}
