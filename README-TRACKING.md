# 🎯 Server-Side Tracking - ETAPA 1 (PageView)

## ✅ Implementação Completa

Sistema de rastreamento server-side para Meta Conversion API integrado com Supabase foi implementado com sucesso!

## 📁 Arquivos Criados

### 1. Schema do Banco de Dados
- **`supabase/schema_tracking_bilhete_acao.sql`**
  - Tabela `tracking_bilhete_acao` com estrutura otimizada
  - Índices para match futuro (ETAPA 2)
  - Campos preparados para conversões

### 2. API Route (Server-Side)
- **`app/api/track/pageview/route.ts`**
  - Endpoint: `/api/track/pageview`
  - Recebe dados do cliente
  - Salva no Supabase
  - Envia para Meta CAPI

### 3. Cliente-Side Tracker
- **`lib/tracking/pageview-tracker.ts`**
  - Captura dados do navegador
  - Envia para API route
  - Evita duplicatas

### 4. Meta Pixel Component
- **`components/tracking/MetaPixel.tsx`**
  - Componente React para Meta Pixel
  - Já integrado no layout

### 5. Documentação
- **`docs/TRACKING-SETUP.md`** - Guia completo de setup
- **`.env.example`** - Template de variáveis de ambiente

## 🚀 Próximos Passos

### 1. Configurar Supabase

Execute o SQL em `supabase/schema_tracking_bilhete_acao.sql`:

```sql
-- Copie o conteúdo e execute no Supabase SQL Editor
```

### 2. Configurar Variáveis de Ambiente

**Local (.env.local):**
```bash
NEXT_PUBLIC_META_PIXEL_ID=928212556030144
META_ACCESS_TOKEN=seu_token_aqui
NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key
```

**Vercel:**
1. Settings → Environment Variables
2. Adicione todas as variáveis acima

### 3. Testar

1. Inicie o servidor: `npm run dev`
2. Acesse: `http://localhost:3000/bilhete-acao`
3. Verifique console do navegador
4. Verifique Supabase (novo registro)
5. Verifique Meta Events Manager

## 📊 Estrutura de Dados

### Campos para Match Futuro (ETAPA 2)

- ✅ `email` - Match principal
- ✅ `phone` - Match secundário  
- ✅ `fbp` + `fbc` - Cookies Facebook
- ✅ `ip_address` + `user_agent` + `timestamp` - Match por sessão

### Dados Capturados

- Identificação: email, phone, ip, user_agent, fbp, fbc
- Pessoais: first_name, last_name, date_of_birth
- Localização: city, state, country, zip_code
- Tracking: utm_source, utm_medium, utm_campaign, fbclid, gclid
- Metadados: page_url, referrer, language, timestamp

## 🔗 Integração

### Já Integrado

- ✅ Meta Pixel no `app/layout.tsx`
- ✅ Tracking na página `app/bilhete-acao/page.tsx`
- ✅ API route configurada
- ✅ Script cliente-side pronto

### Para Adicionar em Outra Página

```typescript
import { trackPageView } from '@/lib/tracking/pageview-tracker';

useEffect(() => {
  trackPageView();
}, []);
```

## 🎯 Preparado para ETAPA 2

A estrutura está preparada para:

- ✅ Match de usuários (email, phone, fbp+fbc, IP+UA)
- ✅ Webhooks de conversão (Perfect Pay, 24games, Telegram)
- ✅ Eventos Meta CAPI (Purchase, FTD, Lead)
- ✅ Atribuição correta de conversões

## 📚 Documentação Completa

Veja `docs/TRACKING-SETUP.md` para:
- Guia detalhado de instalação
- Troubleshooting
- Como adicionar nova landing page
- Próximos passos (ETAPA 2)

---

**Status:** ✅ ETAPA 1 Completa
**Próximo:** ETAPA 2 - Eventos de Conversão

