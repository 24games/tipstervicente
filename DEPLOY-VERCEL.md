# 🚀 Guia de Deploy na Vercel

## Método Rápido (Interface Web) - RECOMENDADO

### Passo 1: Acesse a Vercel
1. Abra: https://vercel.com
2. Clique em **"Sign Up"** ou **"Log In"**
3. Escolha **"Continue with GitHub"** (use a mesma conta do repositório)

### Passo 2: Importe o Projeto
1. Após fazer login, clique em **"Add New Project"** ou **"Import Project"**
2. Na lista de repositórios, encontre e selecione: **`24games/tipstervicente`**
3. Clique em **"Import"**

### Passo 3: Configure o Deploy
A Vercel detectará automaticamente:
- ✅ Framework: **Next.js**
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

**Não precisa alterar nada!** Apenas clique em **"Deploy"**

### Passo 4: Aguarde o Deploy
- O deploy levará 1-3 minutos
- Você verá o progresso em tempo real
- Ao finalizar, receberá uma URL: `https://tipstervicente.vercel.app`

### Passo 5: Pronto! 🎉
- Seu site estará no ar!
- Cada push para `main` fará deploy automático
- Você pode configurar um domínio personalizado depois

---

## Método Alternativo (CLI)

Se preferir usar a linha de comando:

```bash
# 1. Instalar Vercel CLI (se ainda não tiver)
npm i -g vercel

# 2. Fazer login
vercel login

# 3. Deploy de produção
vercel --prod
```

---

## 📝 Notas Importantes

- ✅ O projeto já está configurado com `vercel.json`
- ✅ Todas as dependências estão no `package.json`
- ✅ O código está commitado e no GitHub
- ✅ Next.js 14 está configurado corretamente

## 🔗 Links Úteis

- Dashboard Vercel: https://vercel.com/dashboard
- Documentação: https://vercel.com/docs
- Status do Deploy: Aparecerá no dashboard após o primeiro deploy

---

**Tempo estimado:** 5 minutos ⏱️

