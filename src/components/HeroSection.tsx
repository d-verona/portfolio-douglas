import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-secondary/8" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-secondary/5 rounded-full blur-xl animate-pulse delay-700" />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-foreground">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary hover-scale">
              Douglas Verona
            </h1>
            <p className="text-xl md:text-2xl font-light text-secondary mb-6">Engenharia Geológica & Inovação</p>
          </div>
          
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in text-muted-foreground">Especialista em geotecnia, gestão de obras, ambiental, modelagem e soluções em gestão e inovação.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in">
            <Button size="lg" className="shadow-elegant transition-all duration-300 hover:shadow-glow hover-scale">
              Ver Projetos
            </Button>
            <Button variant="outline" size="lg" className="transition-all duration-300 hover-scale">
              Contato
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;