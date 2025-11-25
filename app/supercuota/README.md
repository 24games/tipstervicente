# 🎯 Página /supercuota - Documentação

## 📍 Acesso
**URL:** `http://localhost:3000/supercuota` (dev) ou `seu-dominio.com/supercuota` (prod)

---

## 🎨 Estética Implementada

### Cores Principais:
- **Verde Neon:** `#00FF88` (CTA, destaques)
- **Roxo:** Gradientes roxos na segunda dobra
- **Preto Profundo:** Background principal
- **Branco/Cinza:** Textos

### Vibe:
✅ Dark Mode  
✅ Tech/Cyberpunk  
✅ Agressiva e exclusiva  
✅ Apostas de alto nível  

---

## 📐 Estrutura da Página

### 1️⃣ HERO SECTION (Primeira Dobra)

**Background:**
- Imagem do expert: `/supercuota/images/bg-expert.jpg`
- Overlay escuro (60%) para legibilidade

**Elementos:**

**Headline:**
```
"Las Supercuotas más Brígidas están aquí."
```
- ✅ Gradiente verde neon/branco animado
- ✅ Animação contínua (3s loop)
- ✅ Responsivo (text-5xl → text-8xl)

**Subheadline:**
```
"Acceso exclusivo a jugadas de otro nivel..."
```
- ✅ Texto cinza claro
- ✅ Fade-in animado

**Botão CTA:**
- Texto: "Entrar al Grupo VIP"
- ✅ Ícone WhatsApp integrado
- ✅ Verde neon (#00FF88)
- ✅ Efeito Sheen/Shine (laminado a cada 3s)
- ✅ Hover scale

**Aviso de Urgência:**
- 🔥 Ícone de fogo pulsando
- Texto: "¡Ponte vío! Los cupos vuelan."

**⚠️ IMPORTANTE - Margem Superior:**
```jsx
mt-[300px] md:mt-[450px]
```
Garante que o texto não cobre o rosto do expert na foto.

---

### 2️⃣ SEÇÃO DE PROVA SOCIAL (Segunda Dobra)

**Background:**
- Gradiente: preto → roxo → preto
- Glows ambientes (verde neon e roxo) com blur

**Título:**
```
"Los que ya forraron con nuestras fijas"
```

**Carrossel:**
- ✅ Auto-advance a cada 2 segundos
- ✅ Transição suave (ease-in-out)
- ✅ 5 slides (ajustável)
- ✅ Indicadores clicáveis
- ✅ Placeholders cinzas prontos para substituição

**Como funciona:**
1. Define `totalSlides` no código (linha 10)
2. Carrossel passa automaticamente
3. Usuário pode clicar nos indicadores

---

### 3️⃣ FOOTER

- Texto: "Vicente Tips © 2026..."
- Minimalista, centralizado
- Borda superior sutil

---

## 🖼️ Como Adicionar as Imagens

### Background do Hero:

1. Coloque a foto em: `public/supercuota/images/bg-expert.jpg`
2. **Já está configurado automaticamente!**

Se quiser mudar o nome, edite linha 116:
```jsx
backgroundImage: 'url(/supercuota/images/SEU-ARQUIVO.jpg)',
```

### Prints do Carrossel:

**Opção 1: Manter placeholders cinzas (atual)**
- Não fazer nada. Os placeholders servem para testar.

**Opção 2: Adicionar suas imagens**

1. Coloque as imagens em `public/supercuota/images/` com nomes como:
   - `print-1.jpg`
   - `print-2.jpg`
   - `print-3.jpg`
   etc.

2. No código, substitua o placeholder (linha 203-211):

**ANTES:**
```jsx
<div className="w-full max-w-md h-[600px] bg-gray-800 rounded-3xl ...">
  <p className="text-gray-500 text-xl font-bold">
    Print {index + 1}
  </p>
</div>
```

**DEPOIS:**
```jsx
<div className="w-full max-w-md h-[600px] rounded-3xl overflow-hidden shadow-2xl">
  <img 
    src={`/supercuota/images/print-${index + 1}.jpg`}
    alt={`Prova Social ${index + 1}`}
    className="w-full h-full object-cover"
  />
</div>
```

3. Ajuste `totalSlides` (linha 10) para o número de imagens que você tem:
```jsx
const totalSlides = 3; // Se tiver 3 prints
```

---

## 🎬 Animações Implementadas

### Gradiente no Texto (Headline):
- **Nome:** `gradient-flow`
- **Duração:** 3s
- **Efeito:** Verde neon/branco correndo pelo texto

### Sheen no Botão (CTA):
- **Nome:** `sheen`
- **Duração:** 3s
- **Efeito:** Brilho branco diagonal passando

### Fogo Pulsando (Urgência):
- **Nome:** `fire-pulse`
- **Duração:** 1.5s
- **Efeito:** Scale + glow laranja

### Carrossel:
- **Auto-advance:** 2s
- **Transição:** 500ms ease-in-out
- **Manual:** Clique nos indicadores

---

## 🔧 Customizações Rápidas

### Mudar o link do WhatsApp:

Linha 139:
```jsx
href="https://wa.me/seu-numero"
```

Substitua `seu-numero` pelo número no formato internacional:
```jsx
href="https://wa.me/56912345678" // Exemplo Chile
```

### Ajustar margem superior (Hero):

Linha 125:
```jsx
mt-[300px] md:mt-[450px]
```

Ajuste os valores conforme sua imagem:
- Mobile: `mt-[250px]`
- Desktop: `md:mt-[500px]`

### Mudar velocidade do carrossel:

Linha 16:
```jsx
}, 2000); // 2000ms = 2 segundos
```

Altere para `3000` (3s) ou `1500` (1.5s)

### Mudar número de slides:

Linha 10:
```jsx
const totalSlides = 5;
```

### Cores:

**Verde Neon:** Busque por `#00FF88` e substitua
**Roxo:** Busque por `purple-` nas classes Tailwind

---

## 📱 Responsividade

### Breakpoints Tailwind:
- **Mobile:** < 640px
- **sm:** ≥ 640px
- **md:** ≥ 768px
- **lg:** ≥ 1024px

### Ajustes principais:
- Headline: `text-5xl` → `text-8xl`
- Botão: `text-2xl` → `text-4xl`
- Margem Hero: `mt-[300px]` → `md:mt-[450px]`
- Prints carrossel: `max-w-md` (adaptável)

---

## 🚀 Checklist de Deploy

- [ ] Adicionar `bg-expert.jpg` em `public/supercuota/images/`
- [ ] Adicionar prints do carrossel (ou manter placeholders)
- [ ] Ajustar link do WhatsApp
- [ ] Ajustar `totalSlides` se necessário
- [ ] Testar responsividade (mobile/desktop)
- [ ] Verificar margem superior do Hero
- [ ] Testar carrossel (auto e manual)
- [ ] Validar animações

---

## 🎨 Stack Utilizada

✅ **Next.js 14** (App Router)  
✅ **React 18**  
✅ **TypeScript**  
✅ **Tailwind CSS** (Estilização)  
✅ **Framer Motion** (Animações de entrada)  
✅ **Lucide React** (Ícone de fogo)  
✅ **CSS Animations** (Gradiente, Sheen, Pulse)  

---

## 💡 Dicas

1. **Imagem do Expert:**
   - Certifique-se que o rosto está no topo
   - Use imagem de alta qualidade
   - Testar margem superior em diferentes telas

2. **Prints:**
   - Use formato 9:16 (vertical como celular)
   - Qualidade boa mas não excessiva (otimização)
   - Nomes consistentes: `print-1.jpg`, `print-2.jpg`...

3. **Performance:**
   - Comprima imagens antes do upload
   - Use JPG para fotos, PNG só se precisar transparência
   - WebP é ainda melhor se suportado

---

## 🐛 Troubleshooting

**Imagem não aparece:**
- Verifique o caminho: `/supercuota/images/nome-arquivo.jpg`
- Certifique-se que está em `public/supercuota/images/`
- Reinicie o servidor (`npm run dev`)

**Carrossel não funciona:**
- Verifique `totalSlides` (deve ser > 0)
- Console do navegador pode ter erros

**Margem superior errada:**
- Ajuste `mt-[300px]` e `md:mt-[450px]`
- Teste em tela real, não só no DevTools

---

**Página pronta para produção! 🚀**

Basta adicionar as imagens e ajustar o link do WhatsApp!

