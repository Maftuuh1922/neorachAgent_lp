import Hero from "@/components/Hero";
import WhatItIs from "@/components/WhatItIs";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SharedOffice from "@/components/SharedOffice";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page" id="top">
      <main className="main">
        <Hero />
        <WhatItIs />
        <Features />
        <HowItWorks />
        <SharedOffice />
        <Comparison />
      </main>
      <Footer />
    </div>
  );
}
