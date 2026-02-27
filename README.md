# Portfolio Narley

Portfólio pessoal em React + Vite.

## Desenvolvimento

```bash
pnpm install
cp .env.example .env   # opcional: evita avisos de variáveis no build
pnpm dev
```

## Build

```bash
pnpm build
pnpm start
```

## Scripts

- `pnpm dev` — servidor de desenvolvimento
- `pnpm build` — build de produção
- `pnpm start` — roda o app em produção (após `pnpm build`)
- `pnpm check` — verificação TypeScript
- `pnpm lint` — ESLint
- `pnpm test` — testes (Vitest)
- `pnpm format` — formatação com Prettier

## CI (GitHub Actions)

O workflow em `.github/workflows/ci.yml` roda em todo push/PR para `main` ou `master`:

1. **Type check** — `pnpm run check`
2. **Lint** — `pnpm run lint`
3. **Testes** — `pnpm run test`
4. **Build** — `pnpm run build` (com variáveis de ambiente padrão)

Para o CI passar, mantenha o lockfile atualizado: após alterar `package.json`, rode `pnpm install` e faça commit do `pnpm-lock.yaml`.
