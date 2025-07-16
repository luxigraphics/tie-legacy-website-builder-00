
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img 
                src="/lovable-uploads/277f1b46-80f1-4bc3-85ff-7189eedb6bea.png" 
                alt="Consultancy Logo" 
                className="h-16 md:h-24 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link to="/" className={`text-sm xl:text-base hover:text-primary transition-colors font-medium ${isActive('/') ? 'text-primary' : 'text-foreground'}`}>
              Home
            </Link>
            <Link to="/about-us" className={`text-sm xl:text-base hover:text-primary transition-colors font-medium ${isActive('/about-us') ? 'text-primary' : 'text-foreground'}`}>
              About Us
            </Link>
            <Link to="/services" className={`text-sm xl:text-base hover:text-primary transition-colors font-medium ${isActive('/services') ? 'text-primary' : 'text-foreground'}`}>
              Services
            </Link>
            <Link to="/blogs" className={`text-sm xl:text-base hover:text-primary transition-colors font-medium ${isActive('/blogs') ? 'text-primary' : 'text-foreground'}`}>
              Blogs
            </Link>
            <Link to="/contact-us" className={`text-sm xl:text-base hover:text-primary transition-colors font-medium ${isActive('/contact-us') ? 'text-primary' : 'text-foreground'}`}>
              Contact Us
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-4">
            <Link to="/book-consultant">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs md:text-sm px-3 md:px-4 py-2">
                Book Consultant
              </Button>
            </Link>
            <a href="tel:7037455191">
              <Button variant="outline" className="font-semibold text-xs md:text-sm px-3 md:px-4 py-2">
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 mt-4">
              <Link to="/" className={`hover:text-primary transition-colors font-medium py-2 ${isActive('/') ? 'text-primary' : 'text-foreground'}`}>
                Home
              </Link>
              <Link to="/about-us" className={`hover:text-primary transition-colors font-medium py-2 ${isActive('/about-us') ? 'text-primary' : 'text-foreground'}`}>
                About Us
              </Link>
              <Link to="/services" className={`hover:text-primary transition-colors font-medium py-2 ${isActive('/services') ? 'text-primary' : 'text-foreground'}`}>
                Services
              </Link>
              <Link to="/blogs" className={`hover:text-primary transition-colors font-medium py-2 ${isActive('/blogs') ? 'text-primary' : 'text-foreground'}`}>
                Blogs
              </Link>
              <Link to="/contact-us" className={`hover:text-primary transition-colors font-medium py-2 ${isActive('/contact-us') ? 'text-primary' : 'text-foreground'}`}>
                Contact Us
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/book-consultant">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    Book Consultant
                  </Button>
                </Link>
                <a href="tel:7037455191">
                  <Button variant="outline" className="w-full font-semibold">
                    <Phone className="w-4 h-4 mr-2" />
                    Call: 7037455191
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
