import { Navigation } from "@/components/BloodConnect/Navigation";
import { BloodBankFinder } from "@/components/BloodConnect/BloodBankFinder";
import { Footer } from "@/components/BloodConnect/Footer";

const BloodBanks = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <BloodBankFinder />
      </main>
      <Footer />
    </div>
  );
};

export default BloodBanks;