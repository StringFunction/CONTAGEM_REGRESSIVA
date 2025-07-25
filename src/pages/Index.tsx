import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { ContactSection } from "@/components/ui/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
    </div>
  );
};

export default Index;