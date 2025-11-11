import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProjectHighlights from "@/components/ProjectHighlights";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import MissionVision from "@/components/MissionVision";
import VolunteerSection from "@/components/VolunteerSection";
import LatestEvents from "@/components/LatestEvents";
import TransparencySection from "@/components/TransparencySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[120px]">
        <HeroCarousel />
        <ProjectHighlights />
        <WhoWeAre />
        <WhatWeDo />
        <MissionVision />
        <VolunteerSection />
        <LatestEvents />
        <TransparencySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
