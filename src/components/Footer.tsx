import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Chaii Dosa Cafe</h3>
            <p className="mb-4 opacity-90">
              Authentic vegetarian South Indian & Punjabi cuisine in the heart of Walsall.
            </p>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>91-92, Ablewell St, Walsall WS1 2EU</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>07311 522700</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Our Menu</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="tel:07311522700" className="hover:text-primary transition-colors">Order Takeaway</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="text-sm opacity-80 space-y-1">
              <div className="flex justify-between">
                <span>Monday</span>
                <span className="text-red-300">Closed</span>
              </div>
              <div className="flex justify-between">
                <span>Tue - Sun</span>
                <span>11am - 9pm</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <p className="text-xs opacity-80">
                Reserve your table in advance to avoid waiting!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm opacity-60">
          <p>&copy; 2024 Chaii Dosa Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;