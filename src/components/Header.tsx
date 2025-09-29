import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Facebook } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">
              Chaii Dosa Cafe
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a 
              href="#menu" 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Menu
            </a>
            <a 
              href="#reviews" 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2">
              <a
                href="https://www.facebook.com/profile.php?id=61580341651258"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a
                href="https://www.tiktok.com/@chaiidosa?lang=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span 
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => window.open('tel:07311522700', '_self')}
              >
                07311 522700
              </span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
              <a 
                href="#menu" 
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Menu
              </a>
              <a 
                href="#reviews" 
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Reviews
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-2">
                <span className="text-sm text-muted-foreground">Follow us:</span>
                <a
                  href="https://www.facebook.com/profile.php?id=61580341651258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4 text-primary" />
                </a>
                <a
                  href="https://www.tiktok.com/@chaiidosa?lang=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
              
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span 
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => window.open('tel:07311522700', '_self')}
                >
                  07311 522700
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;