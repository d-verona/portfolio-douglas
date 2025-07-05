import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Vamos Conversar
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Interessado em soluções tecnológicas para engenharia? Entre em contato.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4 text-primary-foreground/90">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-glow rounded-full" />
                  <span><strong>Nome:</strong> Douglas Verona</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-glow rounded-full" />
                  <span><strong>Cidade:</strong> Curitiba - PR</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-glow rounded-full" />
                  <span><strong>Telefone:</strong> (41) 99980-4334</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-glow rounded-full" />
                  <span><strong>Email:</strong> douglas_verona@outlook.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Especialidades
              </h3>
              <ul className="space-y-3 text-primary-foreground/90">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-glow rounded-full" />
                  <span>Modelagem Geológica e Geotécnica</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-glow rounded-full" />
                  <span>Sistemas de Gestão de Dados</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-glow rounded-full" />
                  <span>Desenvolvimento de WebMaps</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-glow rounded-full" />
                  <span>Soluções para Campo e Escritório</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-glow rounded-full" />
                  <span>Gestão em Saúde Pública</span>
                </li>
              </ul>
            </div>
          </div>

          <Card className="bg-primary-foreground shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Solicitar Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Nome
                  </label>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Email
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Empresa
                </label>
                <Input placeholder="Nome da empresa" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Projeto
                </label>
                <Textarea 
                  placeholder="Descreva seu projeto ou necessidade..." 
                  rows={4}
                />
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary-glow shadow-elegant"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;