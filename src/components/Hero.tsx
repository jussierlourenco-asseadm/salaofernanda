import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fernanda Canuto Beauty Salon" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Fernanda Canuto
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light">
          Beauty Artist
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-body opacity-90">
          Localizada em Natal, RN, sou especialista em realçar a beleza dos cabelos. 
          De cortes a colorações, confie em minha experiência para um visual deslumbrante e único.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="btn-hero text-lg px-10 py-6"
            onClick={() => window.open('https://api.whatsapp.com/send?phone=5584999402163&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.', '_blank')}
          >
            Agendar Horário
          </Button>
          <Button variant="outline" className="glass text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6">
            Ver Trabalhos
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;