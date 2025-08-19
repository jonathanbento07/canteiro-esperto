import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calculator, Users, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calculator,
      title: "Orçamentos Precisos",
      description: "Crie orçamentos detalhados com materiais e mão de obra"
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Mantenha o histórico completo de todos os seus clientes"
    },
    {
      icon: Shield,
      title: "Dados Seguros",
      description: "Seus dados ficam protegidos em nuvem com backup automático"
    }
  ];

  const benefits = [
    "Orçamentos profissionais em minutos",
    "Histórico completo de projetos",
    "Controle financeiro integrado",
    "Acesso em qualquer dispositivo"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">Canteiro Esperto</span>
          </div>
          <Button onClick={() => navigate("/auth")} variant="outline">
            Entrar
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sistema de Orçamentos para Construção Civil
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Simplifique sua gestão de orçamentos, clientes e projetos. 
            Feito especialmente para mestres de obra e profissionais da construção.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/auth")} 
              size="lg"
              className="text-lg px-8 py-6"
            >
              Começar Gratuitamente
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6"
            >
              Ver Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Tudo que você precisa para gerenciar seus projetos
          </h2>
          <p className="text-xl text-muted-foreground">
            Ferramentas profissionais para aumentar sua produtividade
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Por que escolher o Canteiro Esperto?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Desenvolvido pensando nas necessidades reais dos profissionais da construção civil.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pl-12">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Comece hoje mesmo!</CardTitle>
                  <CardDescription className="text-base">
                    Cadastre-se gratuitamente e organize seus orçamentos de forma profissional
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => navigate("/auth")} 
                    className="w-full" 
                    size="lg"
                  >
                    Criar Conta Grátis
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Canteiro Esperto</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Canteiro Esperto. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
