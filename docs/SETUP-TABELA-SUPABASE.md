# 📊 Setup da Tabela no Supabase

## ✅ Tabela criada: `sqd_fut_bilhete-acao`

## 🚀 Como executar o SQL no Supabase

### Opção 1: Pelo Dashboard do Supabase (Recomendado)

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto: **jhyekbtcywewzrviqlos**
3. Vá em **SQL Editor** (ícone de banco de dados no menu lateral)
4. Clique em **New Query**
5. Copie todo o conteúdo do arquivo: `supabase/schema_sqd_fut_bilhete-acao.sql`
6. Cole no editor
7. Clique em **Run** (ou pressione `Ctrl+Enter`)
8. Aguarde a confirmação de sucesso

### Opção 2: Pelo psql (Terminal)

```bash
psql "postgresql://postgres.jhyekbtcywewzrviqlos:XhoB5znX17qpM7WG@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true" < supabase/schema_sqd_fut_bilhete-acao.sql
```

---

## 📋 O que foi criado

### Tabela: `sqd_fut_bilhete-acao`

**Campos principais:**
- `id` (UUID) - Identificador único
- `created_at` - Data de criação
- `email`, `phone` - Identificação do usuário
- `fbp`, `fbc` - Cookies do Facebook (CRUCIAIS)
- `ip_address`, `user_agent` - Identificação técnica
- `utm_source`, `utm_medium`, `utm_campaign` - Parâmetros de tracking
- `fbclid`, `gclid` - Click IDs
- `page_url`, `referrer`, `language` - Metadados da sessão
- `metadata` (JSONB) - Dados extras flexíveis

**Índices criados:**
- `idx_sqd_fut_bilhete_acao_email` - Busca por email
- `idx_sqd_fut_bilhete_acao_phone` - Busca por telefone
- `idx_sqd_fut_bilhete_acao_fbp` - Busca por FBP
- `idx_sqd_fut_bilhete_acao_fbc` - Busca por FBC
- `idx_sqd_fut_bilhete_acao_ip_ua_time` - Match por IP + UA + Timestamp
- `idx_sqd_fut_bilhete_acao_created_at` - Ordenação por data
- `idx_sqd_fut_bilhete_acao_fbclid` - Busca por FBCLID

---

## 🔧 Configuração das Variáveis de Ambiente

### 1. Obter a Service Role Key do Supabase

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto
3. Vá em **Settings** > **API**
4. Copie a **service_role key** (não a anon key!)

### 2. Criar arquivo `.env.local`

Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

### 3. Preencher o `.env.local`

Edite o arquivo `.env.local` e substitua:

```env
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key_aqui
```

**⚠️ IMPORTANTE:** Nunca commite o arquivo `.env.local` no Git!

---

## ✅ Verificar se a tabela foi criada

### Opção 1: Pelo Dashboard

1. Vá em **Table Editor** no menu lateral
2. Procure pela tabela: `sqd_fut_bilhete-acao`
3. Verifique se todos os campos estão lá

### Opção 2: Por SQL

Execute no SQL Editor:

```sql
SELECT * FROM "sqd_fut_bilhete-acao" LIMIT 5;
```

---

## 🧪 Testar o tracking

Depois de criar a tabela, teste o tracking com o comando de debug:

1. Abra: `http://localhost:3000/bilhete-acao`
2. Pressione F12 (Console)
3. Cole o comando de debug (veja `docs/DEBUG-TRACKING.md`)
4. Verifique se o registro aparece na tabela

---

## 📝 Notas

- Nome da tabela: `sqd_fut_bilhete-acao` (com aspas duplas por causa do hífen)
- A tabela está otimizada para match futuro na ETAPA 2
- Todos os índices estão configurados para performance
- O campo `metadata` permite adicionar dados extras sem alterar o schema

