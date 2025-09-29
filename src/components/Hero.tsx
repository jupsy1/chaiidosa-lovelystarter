import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-dosa-bright.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleOrderTakeaway = () => {
    // Call the restaurant directly
    window.open('tel:07311522700', '_self');
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Improved Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Authentic South Indian dosa with coconut chutney and sambhar"
          className="w-full h-full object-cover brightness-110 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
            <span className="text-foreground drop-shadow-2xl">Authentic</span>
            <span className="block text-primary drop-shadow-2xl font-black">South Indian</span>
            <span className="block text-foreground drop-shadow-2xl">& Punjabi Cuisine</span>
          </h1>
          
          <p className="text-xl mb-8 leading-relaxed text-foreground/90 font-medium drop-shadow-lg bg-background/20 backdrop-blur-sm rounded-lg p-4">
            Experience the bold flavors and fresh ingredients of traditional Indian cooking. 
            From crispy dosas to aromatic chai, every dish tells a story of authentic taste.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              onClick={scrollToMenu}
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent text-white font-bold px-8 py-4 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg border-2 border-white/20 cursor-pointer"
            >
              View Our Menu
            </Button>
            <Button 
              onClick={handleOrderTakeaway}
              variant="outline" 
              size="lg"
              className="border-2 border-foreground bg-background/80 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background hover:scale-105 font-bold px-8 py-4 text-lg shadow-lg transition-all duration-300 cursor-pointer"
            >
              Call to Order: 07311 522700
            </Button>
          </div>

          {/* Quick Info with Better Visibility */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <div className="flex items-center space-x-2 bg-background/70 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">91-92 Ablewell St, Walsall WS1 2EU</span>
            </div>
            <div className="flex items-center space-x-2 bg-background/70 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Open Tue-Sun 11am-9pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;