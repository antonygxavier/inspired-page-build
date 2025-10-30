import { Card, CardContent } from "@/components/ui/card";
import exerciseIcon from "@/assets/exercise-icon.png";
import dietIcon from "@/assets/diet-icon.png";
import { Activity, Apple, BarChart, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: exerciseIcon,
      title: "Exercícios Personalizados",
      description: "Acesse uma biblioteca completa de exercícios adaptados ao seu nível e objetivos.",
      items: ["Yoga", "Academia", "Muay Thai", "Natação", "Futebol"],
    },
    {
      icon: dietIcon,
      title: "Plano Nutricional",
      description: "Receba dicas diárias de alimentação e planos de dieta personalizados para seus objetivos.",
      items: ["Dicas do Dia", "Receitas Saudáveis", "Contagem de Calorias", "Planos Personalizados"],
    },
  ];

  const stats = [
    {
      icon: Activity,
      title: "Monitoramento em Tempo Real",
      description: "Acompanhe seu progresso com métricas detalhadas e gráficos intuitivos.",
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Treine quando e onde quiser, com planos adaptáveis à sua rotina.",
    },
    {
      icon: BarChart,
      title: "Resultados Comprovados",
      description: "Veja sua evolução com relatórios detalhados e conquistas desbloqueáveis.",
    },
    {
      icon: Apple,
      title: "Nutrição Inteligente",
      description: "IA que aprende seus gostos e cria planos alimentares sob medida.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tudo que você precisa para <span className="text-primary text-glow">evoluir</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ferramentas completas para transformar seu corpo e mente
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-24 h-24 glow-green group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {feature.items.map((item, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex p-4 bg-primary/10 rounded-full">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg">{stat.title}</h4>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
