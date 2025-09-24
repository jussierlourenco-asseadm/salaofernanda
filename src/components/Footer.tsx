import { Instagram, Facebook, Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Fernanda Canuto
            </h3>
            <p className="text-background/80 mb-6 max-w-md">
              Beauty Artist localizada em Natal, RN. Especialista em realçar a beleza dos cabelos com atendimento personalizado e resultados incríveis.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-background/80">
              <li className="hover:text-primary transition-colors cursor-pointer">Cortes Estilizados</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Coloração Pessoal</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Mechas Criativas</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Tratamentos Revitalizantes</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Manicure e Pedicure</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Maquiagem para Eventos</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Depilação</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>(84) 99940-2163</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@fernandacanuto.com.br</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Natal, RN</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-background/60">
              <span>© 2024 Fernanda Canuto Beauty Artist. Feito com</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>em Natal, RN</span>
            </div>
            <div className="flex gap-6 text-sm text-background/60">
              <span className="hover:text-primary transition-colors cursor-pointer">Política de Privacidade</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Termos de Uso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;