# 📊 Setup de Server-Side Tracking (ETAPA 1)

## Visão Geral

Sistema de rastreamento server-side para Meta Conversion API integrado com Supabase. Este é o **PRIMEIRO PASSO** de um sistema modular que será expandido na ETAPA 2 com eventos de conversão.

## 🏗️ Arquitetura

```
Cliente (Browser)
    ↓
[Script de Captura] → Captura dados do usuário
    ↓
[API Route Vercel] → /api/track/pageview
    ↓
    ├─→ [Supabase] → Salva PageView
    └─→ [Meta CAPI] → Envia evento PageView
```

## 📋 Pré-requisitos

1. **Supabase**: Banco de dados configurado
2. **Vercel**: Projeto deployado
3. **Meta Business**: Pixel ID e Access Token

## 🔧 Instalação

### 1. Criar Tabela no Supabase

Execute o SQL em `supabase/schema_tracking_bilhete_acao.sql` no seu Supabase:

```sql
-- Copie e execute o conteúdo do arquivo
-- Isso criará a tabela tracking_bilhete_acao
```

### 2. Configurar Variáveis de Ambiente

Copie `.env.example` para `.env.local` e preencha:

```bash
# Meta
NEXT_PUBLIC_META_PIXEL_ID=seu_pixel_id
META_ACCESS_TOKEN=seu_access_token

# Supabase
NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key
```

**Na Vercel:**
1. Vá em Settings → Environment Variables
2. Adicione todas as variáveis acima

### 3. Integrar na Landing Page

O tracking já está integrado em `app/bilhete-acao/page.tsx`:

```typescript
import { trackPageView } from '@/lib/tracking/pageview-tracker';

// No useEffect
useEffect(() => {
  trackPageView();
}, []);
```

### 4. Meta Pixel

O Meta Pixel já está incluído no `app/layout.tsx` via componente `<MetaPixel />`.

## 📊 Dados Capturados

### Obrigatórios
- ✅ `email` - Email do usuário
- ✅ `phone` - Telefone
- ✅ `ip` - Endereço IP
- ✅ `user_agent` - User Agent
- ✅ `fbp` - Cookie _fbp (Facebook Browser ID)
- ✅ `fbc` - Cookie _fbc (Facebook Click ID)

### Opcionais
- `first_name`, `last_name`, `date_of_birth`
- `city`, `state`, `country`, `zip_code`
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- `fbclid`, `gclid`
- `page_url`, `referrer`, `language`

## 🔍 Como Funciona

### 1. Cliente-Side (`lib/tracking/pageview-tracker.ts`)

- Captura dados do navegador (cookies, UTMs, etc)
- Envia POST para `/api/track/pageview`
- Evita duplicatas (usa sessionStorage)

### 2. Server-Side (`app/api/track/pageview/route.ts`)

- Recebe dados do cliente
- Salva no Supabase (`tracking_bilhete_acao`)
- Envia para Meta CAPI (evento PageView)
- Retorna confirmação

### 3. Banco de Dados (Supabase)

- Tabela: `tracking_bilhete_acao`
- Índices otimizados para match futuro
- Campos preparados para ETAPA 2

## 🎯 Match Futuro (ETAPA 2)

A estrutura permite match de usuários através de:

1. **Email** (principal)
2. **Telefone** (secundário)
3. **fbp + fbc** (cookies Facebook)
4. **IP + User Agent + Timestamp** (janela de tempo)

## 🔐 Segurança

- ✅ Dados sensíveis são hasheados (SHA256) antes de enviar para Meta
- ✅ Service Role Key nunca exposta no cliente
- ✅ Validação de dados no server-side
- ✅ Sanitização de inputs

## 📝 Adicionar Nova Landing Page

Para adicionar tracking em outra landing page:

1. **Criar nova tabela no Supabase:**
   ```sql
   CREATE TABLE tracking_{nome_projeto} (...);
   ```

2. **Atualizar API route:**
   ```typescript
   const SUPABASE_TABLE = 'tracking_{nome_projeto}';
   ```

3. **Adicionar tracking na página:**
   ```typescript
   import { trackPageView } from '@/lib/tracking/pageview-tracker';
   useEffect(() => { trackPageView(); }, []);
   ```

## 🧪 Teste

### Testar Localmente

1. Inicie o servidor: `npm run dev`
2. Acesse: `http://localhost:3000/bilhete-acao`
3. Verifique o console do navegador (deve aparecer "PageView tracked successfully")
4. Verifique o Supabase (deve ter novo registro)
5. Verifique Meta Events Manager (deve aparecer evento PageView)

### Testar em Produção

1. Faça deploy na Vercel
2. Acesse a URL de produção
3. Verifique logs da Vercel
4. Verifique Supabase
5. Verifique Meta Events Manager

## 🐛 Troubleshooting

### Tracking não funciona

1. Verifique variáveis de ambiente
2. Verifique console do navegador (F12)
3. Verifique logs da Vercel
4. Verifique se a tabela existe no Supabase

### Meta CAPI não recebe eventos

1. Verifique `META_ACCESS_TOKEN` (deve ser válido)
2. Verifique `META_PIXEL_ID` (deve estar correto)
3. Verifique Meta Events Manager → Test Events
4. Verifique se está usando test_event_code (remover em produção)

### Supabase não salva

1. Verifique `SUPABASE_SERVICE_ROLE_KEY`
2. Verifique `NEXT_PUBLIC_SUPABASE_URL`
3. Verifique se a tabela existe
4. Verifique permissões da tabela

## 📚 Próximos Passos (ETAPA 2)

- [ ] Webhook Perfect Pay (Purchase)
- [ ] Webhook 24games.cl (FTD)
- [ ] Webhook Telegram Mini App (Lead)
- [ ] Match de eventos com PageViews
- [ ] Envio de eventos de conversão para Meta CAPI

## 🔗 Links Úteis

- [Meta Conversion API Docs](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

**Última atualização:** 2025-12-12
**Versão:** 1.0.0 (ETAPA 1)

