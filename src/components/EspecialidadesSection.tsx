import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const EspecialidadesSection = () => {
  const especialidades = [{
    titulo: "Engenharia Geológica & Geotecnia",
    descricao: "Modelagem geológica, análise geotécnica e estudos ambientais",
    areas: ["Modelagem Geológica 3D com LeapFrog", "Sondagens (SPT, Trado, Rotativas)", "Análise de Resistência do Solo (NSPT)", "Estudos Geotécnicos para Infraestrutura", "Hidrogeologia e Águas Subterrâneas"]
  }, {
    titulo: "Tecnologia & Sistemas",
    descricao: "Desenvolvimento de soluções digitais para engenharia e gestão",
    areas: ["Sistemas de Gestão de Dados Técnicos", "WebMaps Interativos e GIS", "Aplicações Web Offline para Campo", "Dashboards e Relatórios Automatizados", "Progressive Web Apps"]
  }, {
    titulo: "Gestão & Coordenação",
    descricao: "Liderança de projetos e equipes multidisciplinares",
    areas: ["Gestão de Projetos Técnicos", "Coordenação de Equipes de Campo", "Processos de Qualidade e Controle", "Licenciamento Ambiental", "Planejamento Estratégico"]
  }, {
    titulo: "Saúde Pública & Epidemiologia",
    descricao: "Gestão em saúde ocupacional e vigilância epidemiológica",
    areas: ["Saúde do Trabalhador", "Vigilância Epidemiológica", "Análise de Dados Epidemiológicos", "Políticas de Saúde Pública", "Sistemas de Monitoramento de Saúde"]
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Áreas de Atuação</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise multidisciplinar combinando engenharia, tecnologia e gestão
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {especialidades.map((especialidade, index) => <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary group-hover:text-primary-glow transition-colors duration-300 mb-2">
                  {especialidade.titulo}
                </CardTitle>
                <p className="text-muted-foreground">
                  {especialidade.descricao}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {especialidade.areas.map((area, areaIndex) => <div key={areaIndex} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm text-foreground leading-relaxed">
                        {area}
                      </span>
                    </div>)}
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default EspecialidadesSection;