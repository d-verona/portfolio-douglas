import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-geology-blue.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 text-primary">
              Douglas Verona
            </h1>
            <p className="text-lg md:text-xl font-light text-secondary">Engenharia Geológica & Inovação</p>
          </div>
          
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in text-muted-foreground">
            Especialista em geotecnia, gestão de obras, ambiental, modelagem e soluções em gestão e inovação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 animate-fade-in">
            <Button 
              size="default" 
              className="shadow-elegant transition-all duration-300 hover:shadow-glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
            <Button 
              variant="outline" 
              size="default" 
              className="transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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