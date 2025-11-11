# Landing Page Vicente Mines 💣

Landing page em Next.js 14 (App Router) com Tailwind CSS e Framer Motion.

## 🚀 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start
```

## 📁 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx              # Layout raiz
│   ├── page.tsx                # Homepage (/)
│   ├── globals.css             # Estilos globais
│   └── mines-vicente/          # Rota /mines-vicente
│       ├── page.tsx            # Página principal
│       └── components/
│           └── RemainingSlots.tsx  # Contador animado
├── images/
│   └── icone vicente.png       # Foto do perfil
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## 🎯 Página /mines-vicente

Acesse em: `http://localhost:3000/mines-vicente`

### Características Implementadas

✅ **Layout Pixel-Perfect**
- Fundo preto com gradiente vertical sutil
- Glow azul radial no centro
- Espaçamento vertical idêntico ao design

✅ **Contador Animado (37 → 1)**
- Inicia em 37 cupos
- Diminui automaticamente a cada 4-7 segundos (aleatório)
- Animação suave: fade-out descendo + próximo número surge de trás
- Zero layout shift (altura fixa do container)
- Para em 1

✅ **Elementos Visuais**
- Número verde gigante com glow
- Foto circular com borda azul neon e glow externo
- Nome "Vicente Mines 💣" em negrito
- Alert amarelo com emoji de fogo
- Seta verde animada (breathing effect)
- Botão azul neon com ícone play

✅ **Animações e Efeitos**
- Hover no botão: glow intenso + scale 1.02
- Active no botão: scale 0.99
- Seta com pulso suave (opacity 0.8 → 1)
- Transições suaves com easing customizado

✅ **Acessibilidade**
- Contraste AA/AAA
- aria-label no botão
- Focus visible com outline azul
- Teclado navegável (Enter/Space)
- Viewport meta tag

✅ **Responsivo**
- Mobile-first (360px - 1440px)
- Hierarquia visual mantida em todas as resoluções
- Tamanhos adaptativos de fonte e espaçamento

## 🎨 Cores e Tipografia

**Fonte:** Inter (Google Fonts)

**Paleta:**
- Fundo: `#000000` → `#06080E` (gradiente)
- Azul neon: `#2563EB` → `#60A5FA`
- Verde: `#00FF7F` → `#10B981`
- Amarelo: `#FACC15`
- Texto: `#FFFFFF` / `#C9D1D9`

## 🔧 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **React 18**

## 📝 Conteúdo (ES-CL)

Todo o texto está em espanhol chileno conforme especificado:

- Número: começa em **37**
- Subtítulo: "¡POCOS CUPOS DISPONIBLES!"
- Nome: "Vicente Mines 💣"
- Destaque: "🔥 ¡ÚLTIMOS CUPOS GRATUITOS! ¡ASEGURA EL TUYO YA!"
- Instrução: "HAZ CLIC EN EL BOTÓN DE ABAJO👇"
- Botão: "ENTRAR AL GRUPO VIP"

## ✨ Detalhes Técnicos

### Animação do Contador

- Utiliza `framer-motion` com `AnimatePresence`
- Modo `popLayout` para transições suaves
- `useEffect` com `setTimeout` para intervalo aleatório
- Direction tracking para controlar direção da animação
- Container com altura fixa previne CLS

### Efeitos Visuais

- Glows: `box-shadow` + `filter: blur()`
- Gradientes: `linear-gradient()` e `radial-gradient()`
- Text gradient: `-webkit-background-clip: text`
- Animações CSS: `@keyframes breathing`
- Transitions: `cubic-bezier(0.4, 0, 0.2, 1)`

## 🌐 Deploy

Compatível com Vercel, Netlify, ou qualquer plataforma que suporte Next.js.

```bash
npm run build
npm start
```

## 📄 Licença

Projeto proprietário.

