import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CompetenciasSection = () => {
  const competencias = [
    {
      categoria: "Softwares Especializados",
      items: [
        "LeapFrog Geo", "ArcGIS", "QGIS", "AutoCAD (Civil 3D)", 
        "Datamine", "FeFlow", "ModFlow", "GCDKit", "GEO5", 
        "HEC-RAS", "MicroStation", "Oasis Montaj", "Surfer", 
        "AquiferTest", "ClickUp"
      ]
    },
    {
      categoria: "Linguagens de Programação",
      items: [
        "Python", "HTML", "JavaScript", "SQL"
      ]
    },
    {
      categoria: "Gestão e Análise",
      items: [
        "Excel Avançado", "Power BI", "Dashboards", "Relatórios Técnicos",
        "MS Project", "Pacote Office", "Google Sheets", "LibreOffice"
      ]
    },
    {
      categoria: "Sistemas e Plataformas",
      items: [
        "WebMaps Interativos", "Sistemas de Gestão de Dados",
        "Progressive Web Apps", "Formulários Online", "Automação de Processos"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Competências Técnicas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Domínio avançado em tecnologias especializadas e ferramentas de gestão
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {competencias.map((competencia, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-primary">
                  {competencia.categoria}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {competencia.items.map((item, itemIndex) => (
                    <Badge 
                      key={itemIndex}
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-sm"
                    >
                      {item}
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

export default CompetenciasSection;