import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-foreground">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-primary">
            Douglas Verona
            <span className="block text-3xl md:text-4xl font-normal mt-4 text-secondary">
              Engenharia Geológica & Soluções Tecnológicas
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto animate-fade-in text-muted-foreground">
            Especialista em geotecnia, modelagem geológica e desenvolvimento de sistemas 
            para gestão de dados técnicos. Combinando conhecimento geológico com inovação tecnológica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in">
            <Button 
              size="lg" 
              className="shadow-elegant transition-all duration-300 hover:shadow-glow"
            >
              Ver Projetos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="transition-all duration-300"
            >
              Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;