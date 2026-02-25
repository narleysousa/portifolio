import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BarChart3,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Globe,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { useLocation } from "wouter";

const DEMANDAS_MODULES = [
  {
    title: "Triagem e priorização",
    description:
      "Classifique demandas por prioridade, categoria e contexto para reduzir filas improdutivas.",
    icon: Clock3,
  },
  {
    title: "Quadro de execução",
    description:
      "Acompanhe andamento por status com visão operacional para time técnico e liderança.",
    icon: CalendarCheck2,
  },
  {
    title: "SLA e governança",
    description:
      "Defina regras de prazo, rastreie atrasos e mantenha histórico para auditoria de entrega.",
    icon: ShieldCheck,
  },
  {
    title: "Indicadores executivos",
    description:
      "Visualize produtividade, demandas críticas e capacidade para tomada de decisão.",
    icon: BarChart3,
  },
];

export default function DemandasPreview() {
  const [, setLocation] = useLocation();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(168,111,86,0.22),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(245,203,183,0.12),transparent_38%)]" />

      <header className="border-b border-border bg-background/85 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-accent">Preview</p>
            <h1 className="text-lg font-bold">Gestão de Demandas</h1>
          </div>
          <Button variant="outline" className="gap-2" onClick={() => setLocation("/")}>
            <ArrowLeft className="h-4 w-4" />
            Voltar ao portfólio
          </Button>
        </div>
      </header>

      <section className="container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              Prévia do app
            </p>
            <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              Gestão de demandas com foco em prioridade, visibilidade e execução.
            </h2>
            <p className="max-w-2xl text-foreground/80 md:text-lg">
              Esta é uma prévia do app em formato landing demo, no mesmo estilo do
              Kronus. A proposta é mostrar rapidamente como as tarefas evoluem do
              cadastro até a entrega com governança.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://narleysousa.github.io/ApadrinhaParana/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Abrir versão publicada
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/narley-almeida-de-sousa-b95589287/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline">Falar com Narley</Button>
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card/80 p-3">
                <p className="text-xs text-foreground/70">Captação</p>
                <p className="text-xl font-bold">Priorizada</p>
              </div>
              <div className="rounded-xl border border-border bg-card/80 p-3">
                <p className="text-xs text-foreground/70">Operação</p>
                <p className="text-xl font-bold">Tempo real</p>
              </div>
              <div className="rounded-xl border border-border bg-card/80 p-3">
                <p className="text-xs text-foreground/70">Objetivo</p>
                <p className="text-xl font-bold">Mais previsibilidade</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card/90 p-5 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-foreground/65">
                  Dashboard
                </p>
                <p className="text-lg font-semibold">Visão de execução</p>
              </div>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                Online
              </span>
            </div>

            <div className="space-y-3">
              {[
                "Cards com prioridade, SLA e responsável por demanda",
                "Alertas automáticos para tarefas acima do prazo",
                "Resumo consolidado por status e urgência",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-border/80 bg-background/40 p-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm text-foreground/85">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border/80 bg-background/40 p-3">
                <p className="text-xs text-foreground/70">Acesso</p>
                <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                  <Globe className="h-4 w-4 text-accent" />
                  Navegador
                </p>
              </div>
              <div className="rounded-lg border border-border/80 bg-background/40 p-3">
                <p className="text-xs text-foreground/70">Dispositivos</p>
                <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                  <Smartphone className="h-4 w-4 text-accent" />
                  Desktop / Mobile
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-14 md:pb-20">
        <h3 className="mb-6 text-2xl font-bold md:text-3xl">Módulos em destaque</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {DEMANDAS_MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className="rounded-xl border border-border bg-card/80 p-5 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-lg bg-accent/20 p-2 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="text-lg font-semibold">{module.title}</h4>
                </div>
                <p className="text-sm text-foreground/80">{module.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
