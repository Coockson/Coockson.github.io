import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-tech-dark/90 backdrop-blur-md' : 'bg-tech-dark/90'
    } border-b border-tech-border`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-mono text-tech-cyan font-bold" data-testid="brand-logo">
            khaancc.dev
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-tech-cyan transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <a
              href="/blog"
              className="hover:text-tech-cyan transition-colors"
              data-testid="nav-blog"
            >
              Blog
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-tech-cyan transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <i className="fas fa-bars text-tech-cyan"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-tech-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-tech-cyan transition-colors"
                data-testid="nav-mobile-about"
              >
                About
              </button>
              <a
                href="/blog"
                className="text-left hover:text-tech-cyan transition-colors"
                data-testid="nav-mobile-blog"
              >
                Blog
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-tech-cyan transition-colors"
                data-testid="nav-mobile-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
