# ⚡ Comandos Rápidos

## 🚀 Iniciar Projeto

```bash
# 1. Instalar dependências
npm install

# 2. Executar em desenvolvimento
npm run dev

# 3. Abrir navegador
# http://localhost:3000/mines-vicente
```

---

## 📦 Comandos NPM

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Build para produção
npm run build

# Executar produção
npm start

# Verificar erros (linter)
npm run lint
```

---

## 🔍 Verificar Instalação

```bash
# Verificar Node.js
node --version
# Deve ser >= 18.x.x

# Verificar NPM
npm --version
# Deve ser >= 9.x.x

# Verificar dependências instaladas
npm list --depth=0
```

---

## 🌐 URLs

```bash
# Desenvolvimento
http://localhost:3000

# Homepage
http://localhost:3000/

# Página Vicente Mines (principal)
http://localhost:3000/mines-vicente
```

---

## 🛠️ Solução Rápida de Problemas

### Limpar e Reinstalar

```bash
# Windows PowerShell
Remove-Item -Recurse -Force node_modules, .next
npm install
npm run dev
```

### Porta 3000 Ocupada

```bash
# Usar outra porta
npm run dev -- -p 3001

# Ou matar processo (Windows)
netstat -ano | findstr :3000
taskkill /PID [número] /F
```

### Erro de Cache

```bash
# Limpar cache do Next.js
Remove-Item -Recurse -Force .next
npm run dev
```

---

## 📝 Arquivos Importantes

```
├── app/mines-vicente/page.tsx              # ← Página principal
├── app/mines-vicente/components/           # ← Componentes
│   └── RemainingSlots.tsx                  # ← Contador animado
├── package.json                            # ← Dependências
├── tailwind.config.ts                      # ← Cores customizadas
└── images/icone vicente.png                # ← Foto perfil
```

---

## 🎨 Personalização Rápida

### Mudar Link do Botão

```tsx
// app/mines-vicente/page.tsx (linha ~101)
href="https://t.me/seu-novo-link"
```

### Mudar Número Inicial

```tsx
// app/mines-vicente/components/RemainingSlots.tsx (linha 8)
const [count, setCount] = useState(50) // Era 37
```

### Mudar Cores

```ts
// tailwind.config.ts (linhas 12-16)
'neon-blue': '#SUA_COR',
'neon-green': '#SUA_COR',
'neon-yellow': '#SUA_COR',
```

---

## 🔥 Deploy Rápido

### Vercel (1 minuto)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy produção
vercel --prod
```

### Build Local

```bash
npm run build
npm start
# Acesse http://localhost:3000
```

---

## 📊 Verificar Qualidade

```bash
# Build sem erros?
npm run build
# ✅ Deve compilar sem erros

# Linter OK?
npm run lint
# ✅ Deve retornar sem warnings

# Testar em produção
npm run build && npm start
# ✅ Página deve carregar normalmente
```

---

## 🐛 Debug

```bash
# Ver logs detalhados
npm run dev

# Abrir DevTools no navegador
# Pressione F12
# Aba Console → verificar erros
# Aba Network → verificar carregamentos
# Aba Lighthouse → verificar performance
```

---

## 💾 Backup Rápido

```bash
# Fazer backup dos arquivos importantes
# Copiar estas pastas/arquivos:
- app/
- images/
- package.json
- tailwind.config.ts
- tsconfig.json
- next.config.js
```

---

## ✅ Checklist Pré-Deploy

- [ ] `npm run build` sem erros
- [ ] `npm run lint` sem warnings  
- [ ] Testado em mobile (F12 → Device Mode)
- [ ] Link do Telegram correto
- [ ] Imagem do perfil presente
- [ ] Contador funciona (37 → 1)
- [ ] Botão clicável
- [ ] Responsivo OK

---

## 🆘 Ajuda Rápida

**Erro "Cannot find module"**
```bash
npm install
```

**Erro "Port already in use"**
```bash
npm run dev -- -p 3001
```

**Página em branco**
```bash
Remove-Item .next -Recurse -Force
npm run dev
```

**Imagem não aparece**
- Verificar: `images/icone vicente.png` existe?

**TypeScript errors**
```bash
npm install --save-dev @types/react @types/node
```

---

## 📞 Comandos de Sistema (Windows)

```powershell
# Verificar processos Node
Get-Process node

# Matar todos os processos Node
Stop-Process -Name node -Force

# Limpar terminal
cls

# Listar arquivos
dir

# Navegar pastas
cd nome-da-pasta
cd ..
```

---

**Dica:** Mantenha este arquivo aberto em uma aba para referência rápida! 📌

