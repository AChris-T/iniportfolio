import AppHeader from "@/components/AppHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
      <div className="flex flex-col flex-1 items-center p-3  50 font-sans bg-black">
      <AppHeader />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      </div>
  );
}
