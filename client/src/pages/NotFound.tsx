import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,111,86,0.25),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(245,203,183,0.15),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(245,203,183,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,203,183,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative z-10 w-full max-w-lg mx-5">
        <article className="overflow-hidden rounded-2xl border border-border/70 bg-card/85 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)]">
          <header className="flex items-center justify-between gap-3 border-b border-border/70 bg-background/75 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <p className="text-xs font-semibold tracking-wide text-foreground/85">
              error://404.log
            </p>
            <span className="rounded-full bg-destructive/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-destructive">
              erro
            </span>
          </header>

          <div className="p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15">
              <AlertCircle className="h-8 w-8 text-accent" />
            </div>

            <h1 className="text-5xl font-bold text-accent mb-2">404</h1>

            <h2 className="text-xl font-semibold text-foreground mb-4">
              Página Não Encontrada
            </h2>

            <p className="text-foreground/80 mb-8 leading-relaxed">
              A página que você procura não existe.
              <br />
              Ela pode ter sido movida ou removida.
            </p>

            <Button
              onClick={() => setLocation("/")}
              className="gap-2 bg-accent font-semibold text-background hover:bg-accent/90"
            >
              <Home className="h-4 w-4" />
              Voltar ao Início
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}
