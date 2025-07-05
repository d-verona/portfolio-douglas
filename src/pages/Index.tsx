import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import EspecialidadesSection from "@/components/EspecialidadesSection";
import ProjectsSection from "@/components/ProjectsSection";
import CompetenciasSection from "@/components/CompetenciasSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EducationSection />
      <EspecialidadesSection />
      <ProjectsSection />
      <CompetenciasSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Index;