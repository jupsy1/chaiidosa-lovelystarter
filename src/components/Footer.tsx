import { MapPin, Phone, Clock, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
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

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61580341651258"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors group"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@chaiidosa?lang=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors group"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            <p className="text-xs opacity-80">
              Stay updated with our latest dishes and special offers!
            </p>
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