import AboutSection from "@/components/About";
import ContentSections from "@/components/ContentSections";
import FinancialCalculators from "@/components/FinancialCalculators";
import Footer from "@/components/Footer";
import GoalBasedPlanning from "@/components/GoalBasePlaning";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ProductsServices from "@/components/Services";
import SupportSection from "@/components/SupportSection";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-screen overflow-x-hidden">
        <main>
          <HeroSection />
          <ProductsServices />
          <AboutSection />
          <FinancialCalculators />
          <GoalBasedPlanning />
          <ContentSections />
          <SupportSection />
          <ImpactSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
