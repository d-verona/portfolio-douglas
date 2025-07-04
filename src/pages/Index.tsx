import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EducationSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Index;