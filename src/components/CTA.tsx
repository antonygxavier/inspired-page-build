import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <Card className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-primary/30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMCAwaDYwdjYwSDB6IiBzdHJva2U9IiMwMGZmMDAiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
          
          <div className="relative z-10 py-16 px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Pronto para começar sua <span className="text-primary text-glow">transformação</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Junte-se a milhares de usuários que já transformaram suas vidas com o Healthy Life.
                Comece grátis hoje mesmo!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="neon" size="lg" className="text-lg px-12">
                Baixar Agora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Ver Demonstração
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              ✓ Sem cartão de crédito necessário &nbsp;&nbsp;|&nbsp;&nbsp; ✓ 7 dias grátis &nbsp;&nbsp;|&nbsp;&nbsp; ✓ Cancele quando quiser
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
