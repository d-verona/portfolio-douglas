import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-geology.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Geological Engineering Background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Engenharia Geológica
            <span className="block text-3xl md:text-4xl font-normal mt-4 text-primary-glow">
              & Soluções Tecnológicas
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto animate-fade-in">
            Especialista em geotecnia, modelagem geológica e desenvolvimento de sistemas 
            para gestão de dados técnicos. Combinando conhecimento geológico com inovação tecnológica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-glow shadow-elegant transition-all duration-300 hover:shadow-glow"
            >
              Ver Projetos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Contato
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;