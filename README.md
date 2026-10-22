# Tema Cloudflare Editorial (Astro v7 + Cloudflare Pages)

Um tema moderno, ultra-rápido e minimalista em **Astro v7**, otimizado para **Blog Editorial**, documentação com **Starlight** e busca estática instantânea com **Pagefind**.

![Prévia do Tema](/preview.png)

## Destaques do Tema

- **Astro v7 com Islands Architecture**: Zero JavaScript desnecessário no cliente. Páginas HTML puras geradas no build.
- **Busca Instantânea com Pagefind**: Busca estática completa e ultrarrápida via teclado (`⌘K` ou `Ctrl+K`).
- **Design System Monocromático com OKLCH**: Paleta minimalista e moderna com alternância inteligente entre modo claro e escuro.
- **Otimizado para Cloudflare Pages**: Arquitetura pronta para distribuição global na borda, com baixíssimo TTFB (< 50ms) e nota 100 no Lighthouse.
- **Padrão IA 2.0 Integrado**: Compatível com sincronização automatizada via `sync.ts` do CMS e dados centralizados em `src/data/`:
  - `siteConfig.json` (Nome, cores, autor, links sociais e contatos)
  - `menu.json` (Navegação principal)
  - `categories.json` (Categorias e tags do acervo)
  - `authors.json` (Perfis da equipe editorial)
  - `sobre.json` (Página institucional)
  - `contato.json` (Canais de atendimento e formulário)
  - `privacy.json` e `terms.json` (Diretrizes legais)
- **SEO & Social Share Automáticos**: Sitemap, feeds RSS (`/rss.xml`), metadados Open Graph dinâmicos em SVG e suporte a LLMs (`/llms.txt`).
- **Suporte a Mídias**: Exibe imagens de capa reais (`heroImage` / `image` / `coverImage`) ou gera automaticamente elegantes capas geométricas SVG paramétricas.

## Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/ygorluz/tema-cloudflare-blog.git
cd tema-cloudflare-blog

# Instale as dependências (Node 22+)
npm install --legacy-peer-deps

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:4321** no seu navegador.

## Estrutura do Projeto

```text
src/
├── components/          # Componentes modulares (Hero, BlogCard, Header, Footer)
├── config/              # Configurações de navegação e site
├── content/             # Coleções de conteúdo tipadas com Zod
│   ├── blog/            # Artigos em Markdown/MDX
│   └── docs/            # Documentação técnica com Starlight
├── data/                # Dados centralizados (IA 2.0 CMS)
│   ├── siteConfig.json
│   ├── categories.json
│   ├── authors.json
│   ├── menu.json
│   ├── sobre.json
│   ├── contato.json
│   ├── privacy.json
│   └── terms.json
├── layouts/             # Layouts mestres (BaseLayout, BlogLayout)
├── pages/               # Rotas e páginas Astro
└── styles/              # Design tokens e folhas globais
```

## Licença

Distribuído sob a licença [MIT](LICENSE).
