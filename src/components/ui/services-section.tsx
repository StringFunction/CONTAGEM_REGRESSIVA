import { Card } from "@/components/ui/card";
import { Bot, Zap, Shield, TrendingUp, Clock, Target } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Automação de Processos",
    description: "Desenvolvemos bots personalizados para automatizar tarefas repetitivas e processos manuais.",
    features: ["Web Scraping", "Integração de APIs", "Manipulação de dados"]
  },
  {
    icon: Zap,
    title: "Otimização de Performance",
    description: "Acelere seus processos com soluções de automação de alta performance e escalabilidade.",
    features: ["Processamento paralelo", "Otimização de código", "Monitoramento em tempo real"]
  },
  {
    icon: Shield,
    title: "Segurança & Compliance",
    description: "Implementamos automações seguras que atendem aos padrões de conformidade do seu setor.",
    features: ["Criptografia de dados", "Logs de auditoria", "Controle de acesso"]
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Colete e analise dados automaticamente para gerar insights valiosos para seu negócio.",
    features: ["Dashboards automáticos", "Relatórios personalizados", "Alertas inteligentes"]
  },
  {
    icon: Clock,
    title: "Agendamento Inteligente",
    description: "Configure execuções automáticas com horários personalizados e condições específicas.",
    features: ["Cron jobs avançados", "Triggers condicionais", "Recuperação de falhas"]
  },
  {
    icon: Target,
    title: "Consultoria Especializada",
    description: "Análise completa dos seus processos para identificar oportunidades de automação.",
    features: ["Mapeamento de processos", "ROI analysis", "Roadmap de automação"]
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de automação para transformar a eficiência do seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};