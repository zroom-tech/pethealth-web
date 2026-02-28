import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AIShowcaseSection } from "@/components/sections/AIShowcaseSection";
import { GamificationSection } from "@/components/sections/GamificationSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { DownloadCTASection } from "@/components/sections/DownloadCTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <FeaturesSection />
        <div className="section-divider" />
        <AIShowcaseSection />
        <div className="section-divider" />
        <GamificationSection />
        <div className="section-divider" />
        <CommunitySection />
        <DownloadCTASection />
      </main>
      <Footer />
    </>
  );
}
