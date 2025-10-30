import { Button } from "@/components/ui/button";
import logo from "@/assets/healthy-life-logo.png";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Healthy Life" className="w-12 h-12 glow-green rounded-full" />
            <span className="text-2xl font-bold">
              HEALTHY <span className="text-primary text-glow">LIFE</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Recursos
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
              Preços
            </a>
            <Button variant="neon" size="sm">
              Entrar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50">
            <a href="#features" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
              Recursos
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
              Sobre
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
              Preços
            </a>
            <Button variant="neon" size="sm" className="w-full">
              Entrar
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
