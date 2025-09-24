import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Palette, Heart, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Cortes Exclusivos",
      description: "Técnicas modernas e personalizadas para cada tipo de cabelo"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Coloração Profissional",
      description: "Produtos premium e técnicas avançadas de coloração"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Atendimento Especial",
      description: "Cuidado personalizado em um ambiente acolhedor"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Experiência Comprovada",
      description: "Anos de experiência e clientes satisfeitas"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre Fernanda Canuto
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos um salão de beleza localizado em Natal, RN, especializado em serviços capilares de alta qualidade. Com a expertise da nossa Beauty Artist, Fernanda Canuto, garantimos um atendimento personalizado e resultados incríveis para os nossos clientes.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Trabalhamos com todos os tipos de cabelo, oferecendo desde cortes estilizados até colorações personalizadas e tratamentos revitalizantes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                <span className="text-foreground">Produtos de alta qualidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                <span className="text-foreground">Técnicas inovadoras</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                <span className="text-foreground">Atendimento personalizado</span>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="service-card text-center h-full">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;