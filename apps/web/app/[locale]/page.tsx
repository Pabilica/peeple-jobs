import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { IndustrySection } from "../components/IndustrySection";
import { LatestOpportunities } from "../components/LatestOpportunities";
import { WhyPeeple } from "../components/WhyPeeple";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IndustrySection />
        <LatestOpportunities />
        <WhyPeeple />
      </main>
      <Footer />
    </div>
  );
}
