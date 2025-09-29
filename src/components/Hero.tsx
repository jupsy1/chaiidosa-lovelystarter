import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-dosa.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Authentic South Indian dosa with coconut chutney and sambhar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Authentic
            <span className="block text-primary">South Indian</span>
            <span className="block">& Punjabi Cuisine</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience the bold flavors and fresh ingredients of traditional Indian cooking. 
            From crispy dosas to aromatic chai, every dish tells a story of authentic taste.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-3 hover:shadow-lg transition-all duration-300"
            >
              View Our Menu
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-3"
            >
              Order Takeaway
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>91-92 Ablewell St, Walsall WS1 2EU</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>Open Tue-Sun 11am-9pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;