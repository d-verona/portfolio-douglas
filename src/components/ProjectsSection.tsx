import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sistema de Gestão de Sondagens",
      description: "Criação de mapa online de sondagens para acompanhamento da equipe de campo, escritório e cliente. Sistema completo de gestão de dados (trado, SPT, mista e rotativa) com planilhas automatizadas para banco de dados.",
      technologies: ["Mapas Online", "Gestão de Dados", "Automatização", "SPT"]
    },
    {
      title: "Modelagem Geológica de Estrada de Ferro", 
      description: "Modelagem de camadas geológicas (estratigrafia), geotécnica e resistência do solo pelos níveis de NSPT. Estruturação completa de dados de projeto com digitalização e tratamento.",
      technologies: ["Modelagem 3D", "Estratigrafia", "Geotecnia", "NSPT"]
    },
    {
      title: "Sistema de RH para Empresa de BIM",
      description: "Mapeamento e estruturação completa dos processos de recrutamento e seleção no ClickUp. Formulários para coleta de dados, cadastro reserva, banco de talentos e dashboards de gerenciamento.",
      technologies: ["ClickUp", "Processos", "Dashboards", "RH"]
    },
    {
      title: "WebMaps Interativos",
      description: "Desenvolvimento de mapas online interativos em HTML e Python, aplicados a diversas áreas. Soluções customizadas para visualização de dados geoespaciais.",
      technologies: ["HTML", "Python", "WebGIS", "Geoespacial"]
    },
    {
      title: "Sistema de Gestão de Endemias",
      description: "Sistema para setor de endemias municipal com formulários para coleta de dados e webmap para mostrar casos e áreas de bloqueio. Ferramenta estratégica para gestão de saúde pública.",
      technologies: ["Saúde Pública", "WebMap", "Coleta de Dados", "Gestão"]
    },
    {
      title: "Ferramenta de Campo Offline",
      description: "Aplicação web para coleta de dados em campo que funciona offline, coleta coordenadas GPS e dados de sondagens. Sistema robusto para trabalho em áreas remotas.",
      technologies: ["Offline", "GPS", "Campo", "Progressive Web App"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos & Soluções
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções tecnológicas inovadoras aplicadas à engenharia e gestão
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary group-hover:text-primary-glow transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;