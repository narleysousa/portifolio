import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Briefcase,
  ChevronDown,
  Cpu,
  Download,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Shield,
  TerminalSquare,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const CV_URL = `${import.meta.env.BASE_URL}curriculo.pdf`;
const KRONUS_PREVIEW_URL = `${import.meta.env.BASE_URL}kronus-preview`;
const DEMANDAS_PREVIEW_URL = `${import.meta.env.BASE_URL}demandas-preview`;
const GITHUB_URL = "https://github.com/narleysousa";
const LINKEDIN_URL = "https://www.linkedin.com/in/narley-almeida-de-sousa-b95589287/?skipRedirect=true";
const EMAIL = "narley_almeida@icloud.com";
const WHATSAPP = "5541985031881";

type MacWindowProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  children: ReactNode;
};

function MacWindow({ title, subtitle, badge, className, children }: MacWindowProps) {
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    if (!isMaximized) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMaximized]);

  const handleClose = () => {
    if (isClosed) {
      setIsClosed(false);
      return;
    }
    setIsClosed(true);
    setIsMinimized(false);
    setIsMaximized(false);
  };

  const handleMinimize = () => {
    setIsClosed(false);
    setIsMaximized(false);
    setIsMinimized((prev) => !prev);
  };

  const handleMaximize = () => {
    setIsClosed(false);
    setIsMinimized(false);
    setIsMaximized((prev) => !prev);
  };

  const wrapperClass = isMaximized
    ? "fixed inset-4 z-[70] flex max-h-[calc(100vh-2rem)] flex-col bg-card/95 backdrop-blur-xl"
    : className ?? "";

  return (
    <>
      {isMaximized && (
        <button
          type="button"
          aria-label="Sair da janela maximizada"
          onClick={() => setIsMaximized(false)}
          className="fixed inset-0 z-[65] bg-background/70 backdrop-blur-sm"
        />
      )}
      <article
        className={`overflow-hidden rounded-2xl border border-border/70 bg-card/85 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)] ${wrapperClass}`}
      >
        <header className="flex items-center justify-between gap-3 border-b border-border/70 bg-background/75 px-4 py-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={isClosed ? "Reabrir janela" : "Fechar janela"}
              onClick={handleClose}
              className="h-3 w-3 rounded-full bg-[#ff5f57] transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5f57]/50"
            />
            <button
              type="button"
              aria-label={isMinimized ? "Restaurar janela" : "Minimizar janela"}
              onClick={handleMinimize}
              className="h-3 w-3 rounded-full bg-[#febc2e] transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#febc2e]/50"
            />
            <button
              type="button"
              aria-label={isMaximized ? "Restaurar janela" : "Maximizar janela"}
              onClick={handleMaximize}
              className="h-3 w-3 rounded-full bg-[#28c840] transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#28c840]/50"
            />
          </div>

          <div className="min-w-0 flex-1 text-center">
            <p className="truncate text-xs font-semibold tracking-wide text-foreground/80">
              {title}
            </p>
            {subtitle && <p className="truncate text-[11px] text-foreground/60">{subtitle}</p>}
          </div>

          {badge ? (
            <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
              {badge}
            </span>
          ) : (
            <span className="w-8" />
          )}
        </header>

        {isClosed ? (
          <div className="flex items-center justify-between gap-3 p-5 text-sm text-foreground/70">
            <span>Janela fechada.</span>
            <Button size="sm" variant="outline" onClick={() => setIsClosed(false)}>
              Reabrir
            </Button>
          </div>
        ) : isMinimized ? (
          <div className="flex items-center justify-between gap-3 px-5 py-3 text-xs text-foreground/65">
            <span>Janela minimizada.</span>
            <Button size="sm" variant="outline" onClick={() => setIsMinimized(false)}>
              Restaurar
            </Button>
          </div>
        ) : (
          <div className={`p-5 ${isMaximized ? "overflow-y-auto" : ""}`}>{children}</div>
        )}
      </article>
    </>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "resultados",
        "sobre",
        "experiencia",
        "governanca",
        "habilidades",
        "projetos",
        "formacao",
        "contato",
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "sobre", label: "Sobre" },
    { id: "experiencia", label: "Experiência" },
    { id: "governanca", label: "Governança" },
    { id: "habilidades", label: "Habilidades" },
    { id: "projetos", label: "Projetos" },
    { id: "formacao", label: "Formação" },
    { id: "contato", label: "Contato" },
  ];

  const metrics = [
    {
      value: "10.000+",
      label: "registros processados por execução",
      file: "throughput.log",
    },
    {
      value: "98%",
      label: "taxa de sucesso em pipeline HTTP",
      file: "healthcheck.json",
    },
    {
      value: "60%",
      label: "redução no tempo de pesquisa jurisprudencial",
      file: "search-benchmark.md",
    },
    {
      value: "99%",
      label: "precisão em identificação de procurações",
      file: "ocr-validation.txt",
    },
  ];

  const experiencias = [
    {
      company: "TJPR",
      title: "PMO – IA & Data Governance",
      period: "Ago 2025 – Atual",
      team: "Assessoria 1ª Vice-Presidência",
      badge: "Atual",
      bullets: [
        "Liderança de serviços com IA/LLMs para classificação, priorização e roteamento de processos judiciais.",
        "Implantação de MLOps ponta a ponta com versionamento, CI/CD, observabilidade e monitoramento de drift.",
        "Parceria com áreas jurídicas para engenharia de prompts e RAG/LLMOps on-prem com aderência à LGPD.",
        "Resultados mensuráveis em produtividade e precisão de tarefas críticas no fluxo processual.",
      ],
    },
    {
      company: "TJPR",
      title: "Coordenador de TI — ML & Data Governance",
      period: "Atuação de liderança técnica",
      team: "Equipe de Dados, Engenharia e Produto",
      badge: "Coord",
      bullets: [
        "Gestão de equipe multidisciplinar com foco em entrega, qualidade e conformidade de dados.",
        "Definição de OKRs, priorização de backlog, gestão de riscos e controle de SLAs.",
        "Implantação de políticas e controles alinhados a COBIT, ITIL, ISO e LGPD.",
        "Coordenação de curadoria de dados e fine-tuning de GPTs/LLMs para contexto jurídico.",
      ],
    },
    {
      company: "UFPR",
      title: "Estagiário em Ciências da Computação",
      period: "Mai 2021 – Jun 2023",
      team: "AGTIC – Curitiba, PR",
      badge: "Base",
      bullets: [
        "Suporte técnico-administrativo em TI com triagem de demandas e atendimento de 1º nível conforme SLA.",
        "Modelagem e organização de bases com SQL, apoio em PostgreSQL/MySQL e controle de acessos.",
        "Consolidação de dados e automações ETL com Python (Pandas) para relatórios recorrentes.",
        "Prototipagem inicial em analytics/NLP e documentação padronizada de processos e templates.",
      ],
    },
  ];

  const governancaCards = [
    {
      title: "Gestão de TI & Estratégia",
      file: "governance-policies.yaml",
      lines: [
        "Governança de portfólio com priorização, roadmap, capacidade e orçamento.",
        "Desdobramento de OKRs, KPIs e SLAs com cadência executiva.",
        "Comitês de direção e decisões TI-negócio com rastreabilidade.",
      ],
    },
    {
      title: "Segurança, Dados & Execução",
      file: "delivery-playbook.md",
      lines: [
        "Arquiteturas RAG/LLMOps on-prem com security e privacy by design.",
        "LGPD na prática: minimização, base legal, logging, retenção e controles.",
        "Liderança de squads multidisciplinares com gestão de performance e coaching.",
      ],
    },
  ];

  const skillGroups = [
    {
      title: "Dados & Analytics",
      file: "stack/governance.ts",
      tags: ["SQL", "PostgreSQL/MySQL", "Python", "Pandas", "ETL", "Data Modeling"],
    },
    {
      title: "IA, LLMOps & MLOps",
      file: "stack/mlops.ts",
      tags: ["RAG", "LLM", "Prompt Engineering", "Drift Monitoring", "CI/CD", "Observability"],
    },
    {
      title: "Gestão & Operação",
      file: "stack/delivery.ts",
      tags: ["COBIT", "ITIL", "ISO", "LGPD", "OKRs/KPIs/SLAs", "Roadmap & Backlog"],
    },
  ];

  const projetos = [
    {
      id: "pipeline",
      titulo: "Pipeline de Extração de Dados HTTP",
      tag: "Python",
      problema: "Integração manual de grandes volumes de dados com endpoints externos.",
      solucao: "Pipeline automatizado com validação e tratamento robusto de erros.",
      stack: ["Python", "CSV", "HTTP", "Error Handling"],
      features: [
        "Validação inteligente de CSV",
        "Tratamento de múltiplos status HTTP",
        "Processamento em larga escala",
      ],
      impacto: "10.000+ registros | 98% sucesso | -80% tempo de integração",
      github: null,
      demo: null,
      file: "projects/http-pipeline.py",
    },
    {
      id: "agente",
      titulo: "Agente de Pesquisa de Decisões Judiciais",
      tag: "IA/Copilot",
      problema: "Pesquisa jurisprudencial lenta e pouco sistemática.",
      solucao: "Sistema com Copilot 365, busca semântica e RAG para decisões.",
      stack: ["Copilot 365", "RAG", "LLM", "NLP"],
      features: [
        "Pesquisa por similaridade semântica",
        "Elaboração de minutas com jurisprudência",
        "Integração com contexto jurídico",
      ],
      impacto: "-60% tempo de pesquisa | Consistência decisória | Qualidade de minutas",
      github: null,
      demo: null,
      file: "projects/juris-rag.ts",
    },
    {
      id: "localizador",
      titulo: "Localizador Inteligente de Documentos PDF",
      tag: "Python",
      problema: "Localização manual de documentos em acervos grandes.",
      solucao: "Sistema com OCR e busca por palavras-chave/regex.",
      stack: ["Python", "Tesseract OCR", "PDF", "Regex"],
      features: [
        "Extração com fallback OCR",
        "Busca configurável por regex",
        "Relatórios detalhados de status",
      ],
      impacto: "-70% tempo | 99% precisão na identificação",
      github: null,
      demo: null,
      file: "projects/document-locator.py",
    },
    {
      id: "kronus",
      titulo: "Kronus – Gestão de Ponto Inteligente",
      tag: "React/TS",
      problema: "Gestão de ponto fragmentada e manual.",
      solucao: "App multiplataforma com Firebase em tempo real.",
      stack: ["React 18", "TypeScript", "Firebase", "Firestore"],
      features: ["Dashboard em tempo real", "Gestão de férias e feriados", "Web, iOS, Android"],
      impacto: "100% automatização | Multiplataforma",
      github: null,
      demo: KRONUS_PREVIEW_URL,
      file: "projects/kronus-preview.tsx",
    },
    {
      id: "demandas",
      titulo: "Gestão de Demandas",
      tag: "React/TS",
      problema: "Demandas dispersas sem visibilidade de progresso.",
      solucao: "App com filtros, progresso e sincronização Firestore.",
      stack: ["React 18", "TypeScript", "Firebase", "Firestore"],
      features: [
        "Formulário com prioridade e categoria",
        "Alertas de demandas antigas",
        "Resumo por prioridade",
      ],
      impacto: "Centralização | Rastreamento em tempo real",
      github: null,
      demo: DEMANDAS_PREVIEW_URL,
      file: "projects/gestao-demandas.tsx",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(168,111,86,0.25),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(245,203,183,0.15),transparent_40%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(245,203,183,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,203,183,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />

      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/88 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-extrabold tracking-tight text-accent transition-opacity hover:opacity-90"
          >
            NA
          </button>

          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-md px-2 py-1 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a href={CV_URL} download className="hidden sm:inline-flex">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Baixar CV
              </Button>
            </a>
            <Button
              size="sm"
              className="gap-2 bg-accent hover:bg-accent/90"
              onClick={() => scrollToSection("contato")}
            >
              <MessageCircle className="h-4 w-4" />
              Falar comigo
            </Button>
          </div>

          <button
            className="p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="container flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 transition-colors ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a href={CV_URL} download>
                <Button variant="outline" className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Baixar CV
                </Button>
              </a>
              <Button
                className="w-full gap-2 bg-accent"
                onClick={() => scrollToSection("contato")}
              >
                Falar comigo
              </Button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="mb-4 text-5xl font-bold leading-[0.95] text-accent md:text-7xl">
                Narley Almeida
              </h1>
              <h2 className="mb-5 text-xl font-semibold text-foreground/90 md:text-2xl">
                PMO – IA & Data Governance | Governança de Portfólio | MLOps no setor jurídico
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-foreground/80">
                Conduzo portfólios de tecnologia com foco em priorização, roadmap, capacidade,
                riscos e orçamento. No TJPR, lidero serviços com IA/LLMs e MLOps ponta a ponta
                para acelerar o trâmite processual com segurança, compliance e métricas claras
                de valor.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  onClick={() => scrollToSection("projetos")}
                  className="gap-2 bg-accent font-semibold text-background hover:bg-accent/90"
                >
                  <Briefcase className="h-4 w-4" />
                  Explorar Projetos
                </Button>
                <a href={CV_URL} download className="inline-flex">
                  <Button variant="outline" className="gap-2 border-accent text-accent">
                    <Download className="h-4 w-4" />
                    Baixar CV
                  </Button>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="outline" className="gap-2 border-accent text-accent">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-xs text-foreground/70">
                <span className="rounded-full border border-border bg-card/70 px-3 py-1">
                  COBIT / ITIL / ISO / LGPD
                </span>
                <span className="rounded-full border border-border bg-card/70 px-3 py-1">
                  RAG + LLMOps + MLOps + Observability
                </span>
                <span className="rounded-full border border-border bg-card/70 px-3 py-1">
                  PMO com OKRs / KPIs / SLAs
                </span>
              </div>
            </div>

            <div className="space-y-5">
              <MacWindow
                title="terminal://impact-run.log"
                subtitle="execução em tempo real"
                badge="running"
              >
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-emerald-300">$ iniciar_pipeline --dataset judicial_case_batch.csv</p>
                  <p className="text-foreground/85">[ok] 10.000+ registros validados</p>
                  <p className="text-foreground/85">[ok] 98% de sucesso em integração HTTP</p>
                  <p className="text-foreground/85">[ok] pesquisa jurisprudencial -60%</p>
                  <p className="text-foreground/85">[ok] compliance LGPD: ativo</p>
                </div>
              </MacWindow>

              <MacWindow
                title="workspace://modules/kronus-preview.tsx"
                subtitle="janelas de produto"
                badge="preview"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-border/70 bg-background/45 p-3">
                    <p className="mb-1 text-xs uppercase tracking-wide text-foreground/60">
                      Módulo
                    </p>
                    <p className="text-sm font-semibold">Jornada em tempo real</p>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-background/45 p-3">
                    <p className="mb-1 text-xs uppercase tracking-wide text-foreground/60">
                      Módulo
                    </p>
                    <p className="text-sm font-semibold">Escalas e calendário</p>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-background/45 p-3">
                    <p className="mb-1 text-xs uppercase tracking-wide text-foreground/60">
                      Módulo
                    </p>
                    <p className="text-sm font-semibold">Auditoria e compliance</p>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-background/45 p-3">
                    <p className="mb-1 text-xs uppercase tracking-wide text-foreground/60">
                      Módulo
                    </p>
                    <p className="text-sm font-semibold">Painel executivo</p>
                  </div>
                </div>
              </MacWindow>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <button
              onClick={() => scrollToSection("resultados")}
              className="animate-bounce text-accent"
              aria-label="Ir para resultados"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      <section id="resultados" className="border-y border-border bg-card/70 py-12 md:py-16">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.file}
                className="rounded-xl border border-border/70 bg-background/40 p-4"
              >
                <div className="mb-4 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-[11px] text-foreground/60">{metric.file}</span>
                </div>
                <p className="text-3xl font-bold text-accent">{metric.value}</p>
                <p className="mt-1 text-sm text-foreground/70">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 md:py-28">
        <div className="container grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="mb-6 flex items-center gap-3 text-4xl font-bold text-accent md:text-5xl">
              <FileText className="h-10 w-10" />
              Sobre Mim
            </h2>
            <p className="text-lg leading-relaxed text-foreground/88">
              Bacharel em Ciências da Computação, pós em Governança de TI (em andamento) e
              pós em Ciência de Dados e Big Data Analytics (concluída). Atuo no TJPR na
              interseção entre gestão, dados e IA, com foco em entrega de serviços críticos
              com previsibilidade e governança.
            </p>
            <p className="mt-4 text-foreground/75">
              Minha atuação combina governança executiva de portfólio, liderança de times
              multidisciplinares e profundidade técnica em dados, ETL, SQL e analytics para
              suporte à decisão.
            </p>
          </div>

          <MacWindow title="profile://narley-almeida.md" subtitle="resumo técnico" badge="about">
            <div className="space-y-4">
              <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                <p className="text-xs uppercase tracking-wide text-foreground/60">Especialidade</p>
                <p className="mt-1 text-sm font-semibold text-foreground/90">
                  Governança de Portfólio + IA + Data Governance
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                <p className="text-xs uppercase tracking-wide text-foreground/60">Contexto</p>
                <p className="mt-1 text-sm font-semibold text-foreground/90">
                  TJPR com integração entre áreas técnicas, jurídicas e de negócio
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                <p className="text-xs uppercase tracking-wide text-foreground/60">Modelo de atuação</p>
                <p className="mt-1 text-sm font-semibold text-foreground/90">
                  Estratégia, execução e melhoria contínua com rastreabilidade de benefícios.
                </p>
              </div>
            </div>
          </MacWindow>
        </div>
      </section>

      <section id="experiencia" className="bg-card/65 py-20 md:py-28">
        <div className="container">
          <h2 className="mb-12 flex items-center gap-3 text-4xl font-bold text-accent md:text-5xl">
            <Briefcase className="h-10 w-10" />
            Experiência Profissional
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            {experiencias.map((exp) => (
              <MacWindow
                key={`${exp.company}-${exp.title}`}
                title={`${exp.company} · ${exp.title}`}
                subtitle={exp.period}
                badge={exp.badge}
              >
                <p className="mb-3 text-sm font-semibold text-accent">{exp.team}</p>
                <ul className="space-y-2 text-sm text-foreground/82">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </MacWindow>
            ))}
          </div>
        </div>
      </section>

      <section id="governanca" className="py-20 md:py-28">
        <div className="container">
          <h2 className="mb-12 flex items-center gap-3 text-4xl font-bold text-accent md:text-5xl">
            <Shield className="h-10 w-10" />
            Governança & Liderança
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {governancaCards.map((card) => (
              <MacWindow key={card.file} title={`workspace://${card.file}`} badge="policy">
                <h3 className="mb-3 text-lg font-bold text-foreground">{card.title}</h3>
                <ul className="space-y-2 text-sm text-foreground/82">
                  {card.lines.map((line) => (
                    <li key={line} className="flex gap-2">
                      <Workflow className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </MacWindow>
            ))}
          </div>
        </div>
      </section>

      <section id="habilidades" className="bg-card/65 py-20 md:py-28">
        <div className="container">
          <h2 className="mb-12 flex items-center gap-3 text-4xl font-bold text-accent md:text-5xl">
            <Cpu className="h-10 w-10" />
            Habilidades
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <MacWindow key={group.file} title={group.file} badge="stack">
                <h3 className="mb-4 text-lg font-bold text-foreground">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-accent/25 bg-accent/12 px-2.5 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </MacWindow>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="py-20 md:py-28">
        <div className="container">
          <h2 className="mb-12 flex items-center gap-3 text-4xl font-bold text-accent md:text-5xl">
            <BarChart3 className="h-10 w-10" />
            Projetos Destacados
          </h2>

          <div className="grid gap-8 xl:grid-cols-2">
            {projetos.map((p) => (
              <MacWindow
                key={p.id}
                title={`workspace://${p.file}`}
                subtitle={p.titulo}
                badge={p.tag}
                className="h-full"
              >
                <p className="mb-3 text-sm text-foreground/82">
                  <span className="font-semibold text-accent">Problema:</span> {p.problema}
                </p>
                <p className="mb-4 text-sm text-foreground/82">
                  <span className="font-semibold text-accent">Solução:</span> {p.solucao}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs text-foreground/78"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="mb-4 space-y-1 text-sm text-foreground/78">
                  {p.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>

                <p className="mb-5 text-sm font-semibold text-accent">Impacto: {p.impacto}</p>

                <div className="flex flex-wrap gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button variant="outline" size="sm" className="gap-1">
                        <Github className="h-4 w-4" />
                        Código
                      </Button>
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target={p.demo.startsWith("http") ? "_blank" : undefined}
                      rel={p.demo.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex"
                    >
                      <Button size="sm" className="gap-2 bg-accent hover:bg-accent/90">
                        <TerminalSquare className="h-4 w-4" />
                        Ver Demo
                      </Button>
                    </a>
                  )}
                  {!p.github && !p.demo && (
                    <span className="text-xs italic text-foreground/50">Links em breve</span>
                  )}
                </div>
              </MacWindow>
            ))}
          </div>
        </div>
      </section>

      <section id="formacao" className="bg-card/65 py-20 md:py-28">
        <div className="container">
          <h2 className="mb-12 flex items-center gap-3 text-4xl font-bold text-accent md:text-5xl">
            <GraduationCap className="h-10 w-10" />
            Formação
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <MacWindow title="education://graduation.md" badge="degree">
              <h3 className="text-xl font-bold text-foreground">Bacharel em Ciências da Computação</h3>
              <p className="mt-1 text-sm font-semibold text-accent">Universidade Estácio de Sá</p>
              <p className="mt-2 text-sm text-foreground/70">Curitiba | Jan 2019 – Ago 2023</p>
            </MacWindow>

            <MacWindow title="education://data-analytics.md" badge="concluída">
              <h3 className="text-xl font-bold text-foreground">
                Pós em Ciência de Dados e Big Data Analytics
              </h3>
              <p className="mt-1 text-sm font-semibold text-accent">Universidade Estácio de Sá</p>
              <p className="mt-2 text-sm text-foreground/70">Curitiba | Jan 2025 – Dez 2025</p>
            </MacWindow>

            <MacWindow title="education://postgraduate.md" badge="ongoing">
              <h3 className="text-xl font-bold text-foreground">Pós em Governança de TI</h3>
              <p className="mt-1 text-sm font-semibold text-accent">GRAN Faculdade</p>
              <p className="mt-2 text-sm text-foreground/70">Jul 2025 – Dez 2026 (em andamento)</p>
            </MacWindow>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { idioma: "Português", nivel: "Nativo" },
              { idioma: "Inglês", nivel: "Fluente" },
              { idioma: "Espanhol", nivel: "Intermediário" },
            ].map((lang) => (
              <div
                key={lang.idioma}
                className="rounded-xl border border-border/70 bg-background/45 px-4 py-3"
              >
                <p className="text-sm font-semibold text-foreground">{lang.idioma}</p>
                <p className="text-sm text-foreground/70">{lang.nivel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 md:py-28">
        <div className="container">
          <h2 className="mb-6 flex items-center gap-3 text-4xl font-bold text-accent md:text-5xl">
            <Users className="h-10 w-10" />
            Vamos Conversar?
          </h2>
          <p className="mb-4 max-w-2xl text-xl text-foreground/80">
            Disponível para posições em PMO de tecnologia, Governança de TI/Dados e IA aplicada.
          </p>
          <p className="mb-12 text-foreground/70">Curitiba, PR | Remoto/Híbrido</p>

          <MacWindow title="contact://narley-almeida.json" badge="online" className="max-w-4xl">
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className="inline-flex">
                <Button className="gap-2 bg-accent hover:bg-accent/90">
                  <Mail className="h-4 w-4" />
                  E-mail
                </Button>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline" className="gap-2 border-accent text-accent">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline" className="gap-2 border-accent text-accent">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline" className="gap-2 border-accent text-accent">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href={CV_URL} download className="inline-flex">
                <Button variant="outline" className="gap-2 border-accent text-accent">
                  <Download className="h-4 w-4" />
                  Baixar CV
                </Button>
              </a>
            </div>
          </MacWindow>
        </div>
      </section>

      <footer className="border-t border-border bg-card/70 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-foreground/70">© 2025 Narley Almeida. Todos os direitos reservados.</p>
          <p className="text-sm text-foreground/70">Desenvolvido com React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
