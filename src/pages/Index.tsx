import { Navigation } from "@/components/BloodConnect/Navigation";
import { Hero } from "@/components/BloodConnect/Hero";
import { Statistics } from "@/components/BloodConnect/Statistics";
import { HowItWorks } from "@/components/BloodConnect/HowItWorks";
import { BloodCompatibility } from "@/components/BloodConnect/BloodCompatibility";
import { Footer } from "@/components/BloodConnect/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Statistics />
        <HowItWorks />
        <BloodCompatibility />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
