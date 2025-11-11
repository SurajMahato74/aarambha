import { useState } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      {/* Top Bar */}
      <div className="border-b border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-1 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+977-123456789" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">+977-123456789</span>
              </a>
              <a href="mailto:info@aarambha.org" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span className="hidden md:inline">info@aarambha.org</span>
              </a>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center h-full text-muted-foreground">
              Report a School Dropout
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Aarambha Foundation
              </h1>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <a href="#work" className="text-foreground hover:text-primary transition-colors font-medium">
                Our Work
              </a>
              <a href="#stories" className="text-foreground hover:text-primary transition-colors font-medium">
                Stories
              </a>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                  Get Involved
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background">
                  <DropdownMenuItem>
                    <a href="#donor" className="w-full">Become a Donor</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#volunteer" className="w-full">Volunteer</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="#events" className="text-foreground hover:text-primary transition-colors font-medium">
                Events
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Donate Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 space-y-4">
              <a href="#home" className="block py-2 text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="block py-2 text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#work" className="block py-2 text-foreground hover:text-primary transition-colors">
                Our Work
              </a>
              <a href="#stories" className="block py-2 text-foreground hover:text-primary transition-colors">
                Stories
              </a>
              <a href="#donor" className="block py-2 pl-4 text-foreground hover:text-primary transition-colors">
                Become a Donor
              </a>
              <a href="#volunteer" className="block py-2 pl-4 text-foreground hover:text-primary transition-colors">
                Volunteer
              </a>
              <a href="#events" className="block py-2 text-foreground hover:text-primary transition-colors">
                Events
              </a>
              <a href="#contact" className="block py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Donate Now
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
