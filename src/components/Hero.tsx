import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.png";
import logo from "@/assets/healthy-life-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <img src={logo} alt="Healthy Life Logo" className="w-20 h-20 glow-green rounded-full" />
              <h1 className="text-6xl md:text-7xl font-bold">
                <span className="text-foreground">HEALTHY</span>
                <br />
                <span className="text-primary text-glow">LIFE</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Transforme sua vida com treinos personalizados e planos nutricionais inteligentes. 
              Seu coach fitness no bolso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="neon" size="lg" className="text-lg px-8">
                Começar Agora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Saiba Mais
              </Button>
            </div>
            
            <div className="flex gap-8 justify-center lg:justify-start text-sm">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-muted-foreground">Usuários Ativos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-muted-foreground">Treinos Realizados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.9★</div>
                <div className="text-muted-foreground">Avaliação</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img 
                src={heroPhone} 
                alt="Healthy Life App" 
                className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
