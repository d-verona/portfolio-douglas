import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const formations = [
    {
      area: "Engenharia Geológica",
      degree: "Graduação",
      institution: "Universidade Federal de Pelotas (UFPEL)",
      specializations: [
        "Pós-Graduação em Geotecnia",
        "Pós-Graduação em Gestão de Obras", 
        "Pós-Graduação em Auditoria, Perícia e Licenciamento Ambiental"
      ]
    },
    {
      area: "Enfermagem",
      degree: "Graduação", 
      institution: "FAG",
      specializations: [
        "Pós-Graduação em Administração Hospitalar",
        "Pós-Graduação em Auditoria em Serviços de Saúde"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sólida formação técnica com especializações em áreas estratégicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {formations.map((formation, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">
                      {formation.area}
                    </CardTitle>
                    <Badge variant="secondary" className="mb-2">
                      {formation.degree}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground font-medium">
                  {formation.institution}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-3">
                    Especializações:
                  </h4>
                  {formation.specializations.map((spec, specIndex) => (
                    <div 
                      key={specIndex}
                      className="flex items-center space-x-3 p-3 bg-muted rounded-lg"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {spec}
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

export default EducationSection;