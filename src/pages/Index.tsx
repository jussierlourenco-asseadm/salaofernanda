import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Blog />
      <Booking />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;