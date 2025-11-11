import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">About Aarambha</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              A youth-driven foundation dedicated to eliminating school dropouts and 
              empowering communities through education and sustainable development.
            </p>
            <a href="#about" className="inline-block text-primary hover:text-primary/80 transition-colors font-medium text-sm">
              Read More About Us →
            </a>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#events" className="text-background/80 hover:text-background transition-colors text-sm">
                  Events
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-background/80 hover:text-background transition-colors text-sm">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#donate" className="text-background/80 hover:text-background transition-colors text-sm">
                  Donate
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/80 text-sm">
                  Kathmandu, Nepal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+977-123456789" className="text-background/80 hover:text-background transition-colors text-sm">
                  +977-123456789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@aarambha.org" className="text-background/80 hover:text-background transition-colors text-sm">
                  info@aarambha.org
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <p className="text-background/80 text-sm mb-4">
              Stay connected with our latest updates and initiatives
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-background/80">
            <p>© {new Date().getFullYear()} Aarambha Foundation</p>
            <span className="hidden md:inline">|</span>
            <p>All Rights Reserved</p>
            <span className="hidden md:inline">|</span>
            <p className="flex items-center gap-1">
              Designed with <span className="text-red-500">❤️</span>
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Stripe */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
    </footer>
  );
};

export default Footer;
