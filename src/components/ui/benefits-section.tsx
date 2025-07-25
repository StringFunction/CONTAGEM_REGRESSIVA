import { Card } from "@/components/ui/card";

const benefits = [
  {
    stat: "90%",
    label: "Redução no Tempo",
    description: "Acelere seus processos eliminando tarefas manuais repetitivas"
  },
  {
    stat: "24/7",
    label: "Operação Contínua", 
    description: "Bots trabalham sem interrupção, aumentando sua produtividade"
  },
  {
    stat: "99%",
    label: "Precisão",
    description: "Elimine erros humanos com automação inteligente e confiável"
  },
  {
    stat: "ROI",
    label: "300%+",
    description: "Retorno do investimento comprovado em projetos de automação"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que Escolher o PyBot?
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Resultados comprovados que transformam negócios
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 text-center bg-background/10 backdrop-blur-md border-foreground/20 hover:bg-background/20 transition-all duration-300"
            >
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {benefit.stat}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.label}
              </h3>
              <p className="text-foreground/70">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="bg-background/10 backdrop-blur-md rounded-2xl p-12 border border-foreground/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Tecnologia de Ponta em Python
              </h3>
              <div className="space-y-4 text-foreground/80">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-4"></span>
                  Selenium & Playwright para automação web
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-4"></span>
                  APIs REST e GraphQL para integrações
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-4"></span>
                  Pandas & NumPy para processamento de dados
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-4"></span>
                  Docker para deploy e escalabilidade
                </p>
              </div>
            </div>
            
            <div className="bg-background/20 rounded-xl p-8 font-mono text-sm">
              <div className="text-accent mb-2"># Exemplo de automação PyBot</div>
              <div className="text-primary">import</div> <span className="text-foreground">pybot</span>
              <br />
              <br />
              <div className="text-secondary">bot</div> <span className="text-foreground">= pybot.create()</span>
              <br />
              <div className="text-secondary">bot</div><span className="text-foreground">.navigate(</span><span className="text-accent">"https://example.com"</span><span className="text-foreground">)</span>
              <br />
              <div className="text-secondary">bot</div><span className="text-foreground">.fill_form(data)</span>
              <br />
              <div className="text-secondary">bot</div><span className="text-foreground">.submit_and_wait()</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};