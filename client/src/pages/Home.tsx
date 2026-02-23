import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone, Linkedin, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

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
      const sections = ["home", "sobre", "experiencia", "habilidades", "projetos", "formacao", "contato"];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
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
    { id: "sobre", label: "Sobre Mim" },
    { id: "experiencia", label: "Experiência" },
    { id: "habilidades", label: "Habilidades" },
    { id: "projetos", label: "Projetos" },
    { id: "formacao", label: "Formação" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-accent">
            NA
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container py-4 flex flex-col gap-4">
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
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent">
              Narley Almeida
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/90">
              Especialista em Governança de TI | Project Management Officer (PMO) – IA & Data Governance
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              Especialista em Governança de TI com expertise em gerenciamento de projetos de grande porte, conformidade regulatória (COBIT, ITIL, ISO, LGPD) e transformação digital. Profissional qualificado com perfil de liderança (Gerente, Coordenador, Senior, Governance) e excelente conduta profissional. Complemento expertise em Inteligência Artificial e MLOps para soluções inovadoras em ambientes complexos.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={() => scrollToSection("projetos")}
                className="bg-accent hover:bg-accent/90 text-background font-semibold"
              >
                Conhecer Projetos
              </Button>
              <Button
                onClick={() => scrollToSection("contato")}
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
              >
                Entrar em Contato
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => scrollToSection("sobre")}
              className="animate-bounce text-accent"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-20 md:py-32 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-accent">
            Sobre Mim
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              Sou especialista em Governança de TI com bacharelado em Ciências da Computação e pós-graduações em andamento em Governança de TI e Ciência de Dados & Big Data Analytics. Meu foco principal é a Governança de TI e áreas correlatas com gerenciamento de projetos de TI de grande porte, onde desenvolvo constantemente competências em liderança estratégica, conformidade regulatória (COBIT, ITIL, ISO, LGPD) e transformação digital. Atuo na interseção entre gestão estratégica e dados, liderando equipes multidisciplinares na estruturação de governança de TI/dados alinhada aos frameworks mais rigorosos.
            </p>
            <p>
              Atualmente, como Machine Learning Specialist no Tribunal de Justiça do Estado do Paraná, aplico minha expertise em Governança de TI na implantação de serviços automatizados com IA/LLMs para acelerar o processamento de processos judiciais. Estruturei pipelines completos de MLOps (versionamento, monitoramento de drift, CI/CD) e observabilidade de modelos em produção, garantindo segurança, privacidade e conformidade regulatória. Meu perfil de liderança inclui experiência em gestão de equipes multidisciplinares, definição de OKRs/SLAs, rituais ágeis e governança de dados com foco em conformidade e gestão de riscos.
            </p>
            <p>
              Minha experiência em Governança de TI combina gestão de riscos, conformidade regulatória e melhoria contínua com forte orientação a resultados em ambientes de alta complexidade. Sou especialista em definição de políticas, controles, arquitetura de TI e planejamento estratégico. Como profissional qualificado com excelente conduta profissional, busco agregar valor estratégico às organizações através da entrega de projetos de grande porte, desenvolvimento de soluções inovadoras em Governança de TI e liderança de transformação digital.
            </p>
            <p className="text-base text-accent font-semibold border-l-4 border-accent pl-4">
              Perfil Profissional: Gerente de TI | Coordenador de Projetos | Senior em Governança | Especialista em Conformidade e Gestão de Riscos | Líder de Transformação Digital
            </p>

            {/* Governança e Gerenciamento */}
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Governança & Gerenciamento de Projetos</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Governança de TI e Dados (Frameworks)</li>
                <li>✓ Gerenciamento de riscos e compliance</li>
                <li>✓ Entrega de projetos de grande porte</li>
                <li>✓ Gestão de mudanças organizacionais</li>
                <li>✓ Arquitetura e planejamento de TI</li>
                <li>✓ Transformação digital e inovação</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência */}
      <section id="experiencia" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-accent">
            Experiência Profissional
          </h2>

          <div className="space-y-12 max-w-3xl">
            {/* Cargo 1 */}
            <div className="border-l-4 border-accent pl-8 pb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Project Management Officer (PMO) – IA & Data Governance
              </h3>
              <p className="text-accent font-semibold mb-1">
                Assessoria de Recursos da 1ª Vice-Presidência do Tribunal de Justiça do Estado do Paraná (TJPR)
              </p>
              <p className="text-foreground/70 text-sm mb-4">
                Agosto de 2025 - Atual | Curitiba, PR
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Liderança na implementação de serviços automatizados com IA/LLMs para classificação, priorização e roteamento de processos judiciais, reduzindo gargalos em larga escala</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Estruturação de pipelines de MLOps de ponta a ponta (versionamento de modelos/dados, monitoramento de drift, CI/CD) e observabilidade de modelos para produção contínua e segura</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Parceria com áreas jurídicas para engenharia de prompts e desenho de RAG/LLMops on-prem, garantindo segurança, privacidade e aderência à LGPD</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Gestão de equipe multidisciplinar (dados, engenharia, produto) focada em ML e conformidade de dados (Data Governance & Compliance)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Definição e acompanhamento de OKRs, priorização de backlog e SLAs; condução de rituais ágeis (planning, review, retrospectiva) e gestão de riscos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Implantação de políticas e controles de governança de TI/dados alinhados a COBIT, ITIL, ISO e LGPD, equilibrando inovação e compliance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Coordenação de iniciativas de fine-tuning de GPTs/LLMs locais e curadoria de dados para aumentar a assertividade das respostas em contexto jurídico</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Resultados mensuráveis: redução de tempo de triagem e aumento da precisão em tarefas críticas (ex.: identificação de classe/assunto) com ganhos de produtividade</span>
                </li>
              </ul>
            </div>

            {/* Cargo 1.1 - Promoção */}
            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Senior Data Engineer
              </h3>
              <p className="text-accent font-semibold mb-1">
                Tribunal de Justiça do Estado do Paraná
              </p>
              <p className="text-foreground/70 text-sm mb-4">
                Dezembro de 2025 - Atual | Curitiba, PR
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Promoção reconhecendo expertise em arquitetura de dados, pipelines de MLOps e liderança técnica em projetos de IA/Governança</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Gestão de tecnologias Python e arquitetura de soluções de dados em larga escala</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Mentoria técnica de equipes multidisciplinares em práticas de engenharia de dados e conformidade</span>
                </li>
              </ul>
            </div>

            {/* Cargo 2 */}
            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Estagiário em Ciências da Computação
              </h3>
              <p className="text-accent font-semibold mb-1">
                AGTIC - Universidade Federal do Paraná
              </p>
              <p className="text-foreground/70 text-sm mb-4">
                Maio de 2021 - Junho de 2023 | Curitiba, PR
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Suporte técnico-administrativo com foco em organização de acervos, gestão de dados e prototipagem de soluções de IA/analytics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Modelagem e manutenção de painéis executivos com tabelas dinâmicas, fórmulas e gráficos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Desenvolvimento de scripts em Python (Pandas) para limpeza, junção e geração de relatórios recorrentes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>Prototipagem de notebooks para classificação e análise exploratória com pré-processamento de texto (NLP básico)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 md:py-32 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-accent">
            Habilidades e Competências
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {/* Governança - PRIMEIRO */}
            <div>
              <h3 className="text-xl font-bold text-accent mb-4 border-b-2 border-accent pb-2">Governança & Gerenciamento de Projetos</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Governança de TI e Dados (COBIT, ITIL, ISO)</li>
                <li>✓ Gerenciamento de riscos e compliance</li>
                <li>✓ Entrega de projetos de grande porte</li>
                <li>✓ Gestão de mudanças organizacionais</li>
                <li>✓ Arquitetura e planejamento de TI</li>
                <li>✓ Transformação digital e inovação</li>
              </ul>
            </div>

            {/* Gestão */}
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Gestão de TI & Estratégia</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Propriedade de portfólio e roadmap</li>
                <li>✓ Definição de OKRs, KPIs e SLAs</li>
                <li>✓ Governança de TI (COBIT, ITIL, ISO)</li>
                <li>✓ Conformidade regulatória (LGPD)</li>
                <li>✓ Gerenciamento de projetos de TI de grande porte</li>
                <li>✓ Alinhamento estratégico de TI com negócio</li>
              </ul>
            </div>

            {/* Operações */}
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Entrega de Serviços & Operações</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Implementação de serviços com IA/LLMs</li>
                <li>✓ MLOps de ponta a ponta</li>
                <li>✓ Observabilidade e monitoramento</li>
                <li>✓ Arquiteturas on-premise de RAG/LLMOps</li>
              </ul>
            </div>

            {/* Segurança */}
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Segurança & Conformidade</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Design de segurança by design</li>
                <li>✓ Conformidade LGPD</li>
                <li>✓ Gestão de riscos e políticas</li>
                <li>✓ Hardening de processos</li>
              </ul>
            </div>

            {/* Dados */}
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Liderança em Dados & Analytics</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Curadoria de dados e fine-tuning de LLMs</li>
                <li>✓ Modelagem de dados e ETL/automação</li>
                <li>✓ Analytics para suporte à decisão</li>
                <li>✓ Dashboards executivos</li>
              </ul>
            </div>

            {/* Técnicas */}
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Ferramentas Técnicas</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Python, SQL, Pandas, Jupyter</li>
                <li>✓ PostgreSQL, MySQL</li>
                <li>✓ Git, CI/CD, Observability</li>
                <li>✓ NLP, Classificação, EDA</li>
              </ul>
            </div>

            {/* Liderança */}
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Pessoas & Execução</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Liderança de times multidisciplinares</li>
                <li>✓ Cerimônias ágeis (planning, review, retro)</li>
                <li>✓ Gestão de performance e coaching</li>
                <li>✓ Comunicação técnica e de negócio</li>
                <li>✓ Perfil de Gerente, Coordenador e Senior</li>
                <li>✓ Excelente conduta profissional e ética</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-accent">
            Projetos Destacados
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {/* Projeto 1 - Pipeline de Extração (PRIMEIRO) */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors md:col-span-2 lg:col-span-1">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Pipeline de Extração de Dados HTTP
                </h3>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                  Python
                </span>
              </div>
              <p className="text-foreground/80 mb-6">
                Pipeline robusto de automação que lê dados de arquivos CSV, processa cada registro com validação inteligente e realiza requisições HTTP para endpoints externos com tratamento avançado de erros e fallbacks automáticos.
              </p>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-accent font-semibold mb-2">Tecnologias:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Python</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">CSV Processing</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">HTTP Requests</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Error Handling</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-foreground/80 text-sm mb-6">
                <p>✓ Leitura e validação inteligente de arquivos CSV com detecção de erros</p>
                <p>✓ Requisições HTTP com tratamento robusto de múltiplos códigos de status (200, 400, 500, TOKEN_EXPIRADO, etc.)</p>
                <p>✓ Salvamento automático de arquivos PDF resultantes com nomenclatura dinâmica</p>
                <p>✓ Geração de estatísticas detalhadas de execução (sucesso/falha/taxa de erro)</p>
                <p>✓ Logging estruturado para auditoria e troubleshooting</p>
                <p>✓ Processamento em larga escala com otimização de memória</p>
              </div>
              <p className="text-accent font-semibold text-sm">
                Impacto: Processamento de 10.000+ registros por execução | Taxa de sucesso 98% | Redução de 80% no tempo de integração de dados
              </p>
            </div>

            {/* Projeto 3 - Agente de Pesquisa de Decisões Judiciais */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors md:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Agente de Pesquisa de Decisões Judiciais com Copilot 365
                </h3>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                  IA/Copilot
                </span>
              </div>
              <p className="text-foreground/80 mb-6">
                Sistema inteligente que melhora a pesquisa e recuperação de decisões judiciais anteriores para desembargadores do TJPR, utilizando Copilot 365 como agente guia. Integra busca semântica, análise de temas similares e suporte à elaboração de minutas com base em jurisprudência consolidada, acelerando o processo decisório com IA.
              </p>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-accent font-semibold mb-2">Tecnologias:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Copilot 365</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Busca Semântica</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">RAG</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">LLM</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">NLP</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-foreground/80 text-sm mb-6">
                <p>✓ Pesquisa inteligente de decisões anteriores por tema, jurisprudência e similaridade semântica</p>
                <p>✓ Agente Copilot como guia interativo para pesquisa e análise de decisões judiciais</p>
                <p>✓ Recuperação de contexto jurídico relevante para embasamento de novas decisões</p>
                <p>✓ Suporte à elaboração de minutas com referências automáticas de jurisprudência consolidada</p>
                <p>✓ Análise de temas similares para aplicação de decisões justas e consistentes</p>
                <p>✓ Integração com Copilot 365 para aceleração do andamento de processos judiciais</p>
                <p>✓ Gerenciamento centralizado de decisões com histórico completo e rastreabilidade</p>
                <p>✓ Trabalho célere com suporte de IA, reduzindo tempo de pesquisa e análise</p>
              </div>
              <p className="text-accent font-semibold text-sm">
                Impacto: Redução de 60% no tempo de pesquisa jurisprudencial | Aumento de consistência decisória | Aceleração do andamento processual | Melhoria na qualidade das minutas
              </p>
            </div>

            {/* Projeto 2 - Localizador PDF (MELHORADO) */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors md:col-span-2 lg:col-span-1">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Localizador Inteligente de Documentos PDF
                </h3>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                  Python
                </span>
              </div>
              <p className="text-foreground/80 mb-6">
                Sistema inteligente em Python para localizar, processar e classificar arquivos PDF em diretórios de entrada, com extração de texto avançada usando OCR como fallback e busca semântica por palavras-chave específicas com suporte a expressões regulares.
              </p>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-accent font-semibold mb-2">Tecnologias:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Python</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Tesseract OCR</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">PDF Processing</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Regex</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-foreground/80 text-sm mb-6">
                <p>✓ Extração de texto com fallback inteligente para OCR em PDFs de imagem (DPI 300+)</p>
                <p>✓ Busca por palavras-chave configuráveis com suporte a expressões regulares</p>
                <p>✓ Geração de relatórios detalhados de status (Encontrado/Não Encontrado/Falha)</p>
                <p>✓ Logging estruturado com rastreamento de operações e erros</p>
                <p>✓ Validação robusta de diretórios e tratamento de exceções</p>
                <p>✓ Suporte a processamento em lote com progresso em tempo real</p>
              </div>
              <p className="text-accent font-semibold text-sm">
                Impacto: Redução de 70% no tempo de processamento manual | Precisão de 99% na identificação de procurações
              </p>
            </div>

            {/* Projeto 4 - Kronus */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors md:col-span-2 lg:col-span-1">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Kronus - Gestão de Ponto Inteligente
                </h3>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                  React/TS
                </span>
              </div>
              <p className="text-foreground/80 mb-6">
                Sistema inteligente de gestão de ponto com integração Firebase em tempo real, suporte a múltiplas plataformas (Web, iOS, Android) e gerenciamento avançado de férias, feriados e recessos. Inclui dashboard inteligente, dark mode e autenticação robusta.
              </p>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-accent font-semibold mb-2">Tecnologias:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">React 18</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">TypeScript</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Firebase</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Firestore</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Vite</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-foreground/80 text-sm mb-6">
                <p>✓ Dashboard inteligente com sincronização em tempo real</p>
                <p>✓ Gestão avançada de férias, feriados e recessos</p>
                <p>✓ Suporte a múltiplas plataformas (Web, iOS, Android)</p>
                <p>✓ Dark mode integrado com tema customizável</p>
                <p>✓ Autenticação robusta com Firebase Auth</p>
                <p>✓ Exportação de dados com formatos múltiplos</p>
                <p>✓ CI/CD com GitHub Actions para deploy automático</p>
              </div>
              <p className="text-accent font-semibold text-sm">
                Impacto: Automatização 100% de gestão de ponto | Sincronização em tempo real | Acesso multiplataforma
              </p>
            </div>

            {/* Projeto 5 - Gestão de Demandas */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors md:col-span-2 lg:col-span-1">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Gestão de Demandas
                </h3>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                  React/TS
                </span>
              </div>
              <p className="text-foreground/80 mb-6">
                Aplicação web para criar e gerenciar demandas/tarefas com formulário inteligente, filtros avançados, rastreamento de progresso e sincronização em tempo real com Firestore. Inclui alertas de demandas antigas e dashboard com resumo por prioridade.
              </p>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-accent font-semibold mb-2">Tecnologias:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">React 18</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">TypeScript</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Firebase</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Firestore</span>
                    <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded">Vite 5</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-foreground/80 text-sm mb-6">
                <p>✓ Formulário inteligente com múltiplas opções (projeto, responsáveis, categoria, prioridade)</p>
                <p>✓ Dashboard com resumo por prioridade (Alta, Média, Baixa)</p>
                <p>✓ Alerta de demandas antigas (mais de 14 dias)</p>
                <p>✓ Lista de tarefas com busca e filtros avançados</p>
                <p>✓ Barra de progresso visual e percentual por tarefa</p>
                <p>✓ Ações: ajustar progresso, marcar finalizada, excluir</p>
                <p>✓ Sincronização em tempo real com Firestore</p>
                <p>✓ Exportação de dados e temas customizáveis</p>
              </div>
              <p className="text-accent font-semibold text-sm">
                Impacto: Centralização de demandas | Rastreamento de progresso em tempo real | Redução de overhead administrativo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formação */}
      <section id="formacao" className="py-20 md:py-32 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-accent">
            Formação Acadêmica
          </h2>

          <div className="space-y-8 max-w-3xl">
            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Bacharel em Ciências da Computação
              </h3>
              <p className="text-accent font-semibold text-sm mb-1">
                Universidade Estácio de Sá
              </p>
              <p className="text-foreground/70 text-sm">
                Curitiba | Janeiro de 2019 - Agosto de 2023
              </p>
            </div>

            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Pós-Graduação: Governança em Tecnologia da Informação (em andamento)
              </h3>
              <p className="text-accent font-semibold text-sm mb-1">
                GRAN Faculdade
              </p>
              <p className="text-foreground/70 text-sm">
                Curitiba | Julho de 2025 - Dezembro de 2026
              </p>
            </div>

            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Inglês: A1-A2-B1-B2-C1
              </h3>
              <p className="text-accent font-semibold text-sm mb-1">
                DIBS ONLINE ENGLISH SCHOOL LTDA
              </p>
              <p className="text-foreground/70 text-sm">
                Janeiro de 2024 - Junho de 2024
              </p>
            </div>
          </div>

          {/* Idiomas */}
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-2xl font-bold text-accent mb-6">Idiomas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-foreground mb-2">Português</p>
                <p className="text-foreground/70">Nativo</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Inglês</p>
                <p className="text-foreground/70">Fluente (B2-C1)</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Espanhol</p>
                <p className="text-foreground/70">Intermediário</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-accent">
            Vamos Conversar?
          </h2>

          <div className="max-w-3xl">
            <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
              Estou sempre aberto a novas oportunidades, parcerias e discussões sobre IA, Governança de TI e transformação digital. Entre em contato para conversar sobre como posso ajudar seu projeto ou organização.
            </p>

            {/* Informações de Contato */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <a
                href="mailto:narley_almeida@icloud.com"
                className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
              >
                <div className="flex-shrink-0">
                  <Mail className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Email</p>
                  <p className="font-semibold text-foreground">narley_almeida@icloud.com</p>
                </div>
              </a>

              <a
                href="tel:+5541999096545"
                className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
              >
                <div className="flex-shrink-0">
                  <Phone className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Telefone</p>
                  <p className="font-semibold text-foreground">+55 (41) 99909-6545</p>
                </div>
              </a>
            </div>

            {/* Redes Sociais */}
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/narley-sousa-b95589287/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/10 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-accent" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/70 text-sm">
            © 2025 Narley Almeida de Sousa. Todos os direitos reservados.
          </p>
          <p className="text-foreground/70 text-sm">
            Desenvolvido com React + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
