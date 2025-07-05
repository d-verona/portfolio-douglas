import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Analista de Engenharia",
      subtitle: "Geotecnia e Transportes",
      responsibilities: [
        "Modelagem geológica e geotécnica com LeapFrog",
        "Realização de medições e elaboração de relatórios técnicos", 
        "Alinhamentos técnicos com terceiros e equipes multidisciplinares",
        "Análise e interpretação de dados geotécnicos e sondagens",
        "Locação e programação de sondagens",
        "Elaboração de processos de gestão e controle de dados",
        "Estruturação e organização de trabalho com sistematização de processos",
        "Implementação de ferramentas para otimização de processos"
      ],
      skills: ["LeapFrog", "Geotecnia", "Modelagem 3D", "Gestão de Processos"]
    },
    {
      title: "Geólogo",
      subtitle: "Sondagens e Estudos Ambientais",
      responsibilities: [
        "Acompanhamento e descrição de sondagens",
        "Execução de poços de monitoramento para águas subterrâneas",
        "Desenvolvimento de ferramentas e técnicas de campo",
        "Análise e interpretação de dados geológicos e ambientais",
        "Colaboração com equipes multidisciplinares",
        "Liderança de equipes de campo e supervisão de sondagens",
        "Controle de qualidade nas sondagens e coleta de amostras",
        "Realização de sondagens SPT, trado e rotativas",
        "Levantamentos geológicos e hidrológicos",
        "Mapeamento com drone e análise de dados"
      ],
      skills: ["Sondagens", "Hidrogeologia", "Licenciamento", "Liderança"]
    },
    {
      title: "Gestor Setor de Saúde do Trabalhador",
      subtitle: "Secretaria de Saúde - PR",
      responsibilities: [
        "Coordenação e supervisão de programas de saúde ocupacional",
        "Implementação de políticas de segurança e bem-estar no trabalho",
        "Liderança de equipes multidisciplinares",
        "Estabelecimento de parcerias com órgãos governamentais e sindicatos",
        "Análise de indicadores de saúde ocupacional",
        "Realização de inspeções em locais de trabalho",
        "Investigação de acidentes para medidas corretivas e preventivas"
      ],
      skills: ["Saúde Ocupacional", "Gestão", "Liderança", "Políticas Públicas"]
    },
    {
      title: "Gestor Setor de Epidemiologia",
      subtitle: "Secretaria de Saúde - PR",
      responsibilities: [
        "Coleta, análise e interpretação de dados epidemiológicos",
        "Monitoramento e investigação de doenças e surtos",
        "Desenvolvimento de estratégias de prevenção e controle de doenças",
        "Coordenação de redes de vigilância epidemiológica",
        "Educação em saúde",
        "Participação em comitês gestores de saúde"
      ],
      skills: ["Epidemiologia", "Vigilância", "Análise de Dados", "Saúde Pública"]
    },
    {
      title: "Coordenador de Marketing",
      subtitle: "Educação e Pós-Graduação",
      responsibilities: [
        "Desenvolvimento e implementação de estratégias de marketing",
        "Planejamento e execução de campanhas de marketing digital",
        "Gestão das mídias sociais e criação de conteúdo",
        "Coordenação de eventos e parcerias estratégicas",
        "Análise de métricas e resultados para otimização",
        "Atração e engajamento de público-alvo qualificado",
        "Fortalecimento da imagem e reputação institucional"
      ],
      skills: ["Marketing Digital", "Mídias Sociais", "Eventos", "Análise de Dados"]
    },
    {
      title: "Professor e Coordenador",
      subtitle: "Ensino Técnico e Superior",
      responsibilities: [
        "Professor de Pós-Graduação",
        "Professor de Curso Técnico em Enfermagem",
        "Desenvolvimento de conteúdo educacional",
        "Coordenação acadêmica e pedagógica",
        "Orientação e supervisão de estudantes"
      ],
      skills: ["Docência", "Coordenação", "Enfermagem", "Educação"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiência Profissional
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ampla experiência em projetos de engenharia geológica e geotecnia
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <CardHeader className="pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">
                      {experience.title}
                    </CardTitle>
                    <p className="text-lg text-secondary font-semibold">
                      {experience.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        className="bg-accent text-accent-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <div 
                      key={respIndex}
                      className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm text-foreground leading-relaxed">
                        {responsibility}
                      </span>
                    </div>
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

export default ExperienceSection;