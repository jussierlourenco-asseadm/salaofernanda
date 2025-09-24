import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Coloração Pessoal: Descubra Sua Paleta Ideal",
      excerpt: "Entenda como escolher a coloração perfeita que harmoniza com seu tom de pele e realça sua beleza natural.",
      category: "Coloração",  
      date: "20 Mar 2024",
      readTime: "5 min",
      image: "https://fernandacanuto.com.br/wp-content/uploads/2024/06/Nanda14-768x512.webp"
    },
    {
      id: 2,
      title: "Mechas Criativas: Tendências que Transformam",
      excerpt: "Conheça as técnicas mais modernas de mechas que estão fazendo sucesso e como elas podem renovar seu visual.",
      category: "Mechas",
      date: "18 Mar 2024", 
      readTime: "4 min",
      image: "https://fernandacanuto.com.br/wp-content/uploads/2024/06/photo1-768x512.webp"
    },
    {
      id: 3,
      title: "Tratamentos Revitalizantes: Cabelos Sempre Saudáveis",
      excerpt: "Descubra os tratamentos de hidratação, reconstrução e cauterização que mantém seus cabelos sempre lindos.",
      category: "Tratamentos",
      date: "15 Mar 2024",
      readTime: "6 min", 
      image: "https://fernandacanuto.com.br/wp-content/uploads/2024/04/tratamento-768x512.webp"
    },
    {
      id: 4,
      title: "Cortes Estilizados: Personalidade em Cada Fio",
      excerpt: "Saiba como um corte personalizado pode realçar suas melhores características e expressar sua personalidade.",
      category: "Cortes",
      date: "12 Mar 2024",
      readTime: "5 min",
      image: "https://fernandacanuto.com.br/wp-content/uploads/2024/04/corte2-768x512.webp"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog de Beleza
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das últimas tendências, dicas de cuidados e inspirações para seu cabelo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="service-card group cursor-pointer overflow-hidden h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0 flex flex-col h-full">
                <p className="text-muted-foreground mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto justify-start text-primary hover:text-primary-dark">
                  Ler mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-gold text-lg px-8">
            Ver Todos os Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;