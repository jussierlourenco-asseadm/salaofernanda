import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

const Booking = () => {
  const services = [
    { value: "corte", label: "Corte de cabelo personalizado", price: "R$ 220" },
    { value: "coloracao", label: "Retoque de coloração de raiz premium", price: "R$ 140" },
    { value: "combo", label: "Combo (Coloração + escova + tratamento)", price: "R$ 220" },
    { value: "mechas", label: "Mechas criativas", price: "Consultar" },
    { value: "tratamento", label: "Tratamentos revitalizantes", price: "Consultar" },
    { value: "manicure", label: "Manicure e pedicure", price: "Consultar" },
    { value: "maquiagem", label: "Maquiagem para eventos", price: "Consultar" },
    { value: "depilacao", label: "Depilação", price: "Consultar" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-accent/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Agende seu Horário
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reserve seu momento de transformação. Preencha o formulário abaixo e entraremos em contato para confirmar seu agendamento.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <Card className="service-card">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-center">
                Formulário de Agendamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Serviço Desejado</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label} - {service.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Data Preferida</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Horário Preferido</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um horário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                      <SelectItem value="17:00">17:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Observações</Label>
                <Textarea 
                  id="message" 
                  placeholder="Conte-nos mais sobre o que você tem em mente..."
                  rows={3}
                />
              </div>
              
              <Button 
                className="btn-hero w-full text-lg py-6"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5584999402163&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.', '_blank')}
              >
                Solicitar Agendamento
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="service-card">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>(84) 99940-2163</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Natal, RN</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="service-card">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  Horário de Funcionamento
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta</span>
                    <span className="text-primary font-medium">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="text-primary font-medium">9h às 17h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="text-muted-foreground">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="service-card bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold mb-2">
                  Agendamento Rápido
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Prefere falar diretamente? Ligue para nós!
                </p>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=5584999402163&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.', '_blank')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;