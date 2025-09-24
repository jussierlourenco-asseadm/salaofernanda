import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import hairColor1 from "@/assets/hair-color-1.jpg";
import haircut1 from "@/assets/haircut-1.jpg";
import hairStyle1 from "@/assets/hair-style-1.jpg";

const Gallery = () => {
  const works = [
    {
      id: 1,
      image: "https://fernandacanuto.com.br/wp-content/uploads/2024/06/Nanda14-768x512.webp",
      title: "Coloração Pessoal",
      category: "Coloração",
      description: "Cores personalizadas que realçam sua personalidade única"
    },
    {
      id: 2,
      image: "https://fernandacanuto.com.br/wp-content/uploads/2024/06/photo1-768x512.webp",
      title: "Mechas Criativas",
      category: "Mechas",
      description: "Mechas loiras e técnicas inovadoras para um visual moderno"
    },
    {
      id: 3,
      image: "https://fernandacanuto.com.br/wp-content/uploads/2024/04/corte2-768x512.webp",
      title: "Corte Estilizado",
      category: "Corte",
      description: "Cortes personalizados que destacam sua beleza natural"
    },
    {
      id: 4,
      image: "https://fernandacanuto.com.br/wp-content/uploads/2024/04/tratamento-768x512.webp",
      title: "Tratamentos Revitalizantes",
      category: "Tratamento",
      description: "Hidratação, reconstrução e cauterização para cabelos saudáveis"
    },
    {
      id: 5,
      image: "https://fernandacanuto.com.br/wp-content/uploads/2024/04/IMG_6419-768x512.webp",
      title: "Ambiente do Salão",
      category: "Estrutura",
      description: "Espaço acolhedor e sofisticado para sua experiência de beleza"
    },
    {
      id: 6,
      image: "https://fernandacanuto.com.br/wp-content/uploads/2024/04/IMG_6430-768x512.webp",
      title: "Detalhes do Atendimento",
      category: "Serviço",
      description: "Cuidado personalizado em cada detalhe do seu atendimento"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira algumas das nossas transformações mais recentes. Cada trabalho é único e personalizado para realçar a beleza natural de cada cliente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <Card key={work.id} className="service-card group cursor-pointer overflow-hidden">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    {work.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="px-0">
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {work.title}
                </h3>
                <p className="text-muted-foreground">
                  {work.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Quer ver mais do nosso trabalho? Siga-nos no Instagram!
          </p>
          <button className="btn-gold">
            @fernandacanutobeauty
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;