# 🚀 Como Usar - Guia Rápido

## Passos para Executar o Projeto

### 1️⃣ Instalar Node.js

Certifique-se de ter o Node.js instalado (versão 18 ou superior):
```bash
node --version
```

Se não tiver, baixe em: https://nodejs.org/

### 2️⃣ Instalar Dependências

Abra o terminal nesta pasta e execute:

```bash
npm install
```

Isso instalará todas as dependências necessárias:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript

### 3️⃣ Executar em Desenvolvimento

```bash
npm run dev
```

O servidor iniciará em: **http://localhost:3000**

### 4️⃣ Acessar a Página

Abra seu navegador e vá para:

**http://localhost:3000/mines-vicente**

## 📍 Rotas Disponíveis

- `/` - Homepage simples
- `/mines-vicente` - Landing page completa ✨

## 🎯 O Que Foi Implementado

### ✅ Funcionalidades Principais

1. **Contador Animado**
   - Começa em 37
   - Diminui automaticamente (4-7s aleatório)
   - Animação suave fade-out/in
   - Para em 1

2. **Layout Completo**
   - Fundo preto com glow azul
   - Foto circular com borda neon
   - Nome e emojis
   - Alert amarelo destacado
   - Seta animada
   - Botão azul com hover effect

3. **Responsivo**
   - Funciona em mobile (360px+)
   - Adaptável até desktop (1440px+)

4. **Acessibilidade**
   - Navegação por teclado
   - ARIA labels
   - Contraste adequado

### 🎨 Design

- Cores neon (azul, verde, amarelo)
- Gradientes e glows
- Animações suaves
- Tipografia Inter (Google Fonts)

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start

# Linter (verificar erros)
npm run lint
```

## ❓ Solução de Problemas

### Erro ao instalar dependências

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 já em uso

```bash
# No Windows PowerShell
netstat -ano | findstr :3000
taskkill /PID <PID_NÚMERO> /F

# Ou execute em outra porta
npx next dev -p 3001
```

### Imagem não aparece

Certifique-se de que o arquivo existe em:
`/images/icone vicente.png`

## 📝 Personalização

### Alterar Link do Botão

Edite o arquivo: `app/mines-vicente/page.tsx`

Procure por:
```tsx
href="https://t.me/+-RVi0AhIjw9iMTAx"
```

### Alterar Número Inicial

Edite: `app/mines-vicente/components/RemainingSlots.tsx`

Linha:
```tsx
const [count, setCount] = useState(37) // Mude o 37
```

### Alterar Cores

Edite: `tailwind.config.ts`

```ts
colors: {
  'neon-blue': '#2563EB',    // Sua cor aqui
  'neon-green': '#00FF7F',   // Sua cor aqui
  'neon-yellow': '#FACC15',  // Sua cor aqui
}
```

## 🌐 Deploy (Produção)

### Vercel (Recomendado)

1. Crie conta em: https://vercel.com
2. Conecte seu repositório Git
3. Deploy automático!

### Netlify

1. Crie conta em: https://netlify.com
2. Arraste a pasta após `npm run build`
3. Configure build command: `npm run build`
4. Publish directory: `.next`

## 💡 Dicas

- Use `npm run dev` para desenvolvimento
- Abra DevTools (F12) para ver console
- Teste em mobile usando DevTools (Ctrl+Shift+M)
- A página funciona offline após carregar

## 📞 Suporte

Se tiver problemas:
1. Verifique se Node.js está atualizado
2. Delete `node_modules` e reinstale
3. Verifique console do navegador (F12)
4. Limpe cache do navegador (Ctrl+Shift+Delete)

---

**Pronto! Agora você tem uma landing page profissional funcionando! 🎉**

