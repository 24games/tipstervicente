-- ============================================
-- SCHEMA: Server-Side Tracking (ETAPA 1)
-- Banco: Supabase
-- Projeto: Bilhete Ação - Vicente Tipster
-- Tabela: sqd_fut_bilhete-acao
-- ============================================

-- Tabela principal para armazenar PageViews
-- Estrutura otimizada para match futuro com eventos de conversão (ETAPA 2)
CREATE TABLE IF NOT EXISTS "sqd_fut_bilhete-acao" (
    -- ID único
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- ============================================
    -- CAMPOS PARA MATCH FUTURO (ETAPA 2)
    -- ============================================
    
    -- Identificação principal (para match)
    email VARCHAR(255),
    phone VARCHAR(50),
    
    -- Cookies Facebook (CRUCIAIS para CAPI)
    fbp VARCHAR(255), -- Facebook Browser ID (_fbp)
    fbc VARCHAR(255), -- Facebook Click ID (_fbc)
    
    -- Identificação por IP + User Agent (match secundário)
    ip_address INET,
    user_agent TEXT,
    
    -- ============================================
    -- DADOS PESSOAIS
    -- ============================================
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    date_of_birth DATE,
    
    -- ============================================
    -- LOCALIZAÇÃO
    -- ============================================
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(2), -- Código ISO (ex: BR, CL)
    zip_code VARCHAR(20),
    
    -- ============================================
    -- TRACKING / UTMs
    -- ============================================
    utm_source VARCHAR(255),
    utm_medium VARCHAR(255),
    utm_campaign VARCHAR(255),
    utm_term VARCHAR(255),
    utm_content VARCHAR(255),
    fbclid VARCHAR(255), -- Facebook Click ID
    gclid VARCHAR(255),  -- Google Click ID
    
    -- ============================================
    -- METADADOS DA SESSÃO
    -- ============================================
    page_url TEXT,
    referrer TEXT,
    language VARCHAR(10),
    event_timestamp TIMESTAMP WITH TIME ZONE,
    
    -- ============================================
    -- CONTROLE INTERNO
    -- ============================================
    meta_event_id VARCHAR(255), -- ID do evento no Meta CAPI
    meta_success BOOLEAN DEFAULT false,
    metadata JSONB -- Dados extras/flexíveis
);

-- ============================================
-- ÍNDICES PARA PERFORMANCE E MATCH
-- ============================================

-- Índice para busca por email (match principal)
CREATE INDEX IF NOT EXISTS idx_sqd_fut_bilhete_acao_email 
ON "sqd_fut_bilhete-acao"(email) 
WHERE email IS NOT NULL;

-- Índice para busca por telefone (match secundário)
CREATE INDEX IF NOT EXISTS idx_sqd_fut_bilhete_acao_phone 
ON "sqd_fut_bilhete-acao"(phone) 
WHERE phone IS NOT NULL;

-- Índice para busca por FBP (importante para Meta)
CREATE INDEX IF NOT EXISTS idx_sqd_fut_bilhete_acao_fbp 
ON "sqd_fut_bilhete-acao"(fbp) 
WHERE fbp IS NOT NULL;

-- Índice para busca por FBC (importante para Meta)
CREATE INDEX IF NOT EXISTS idx_sqd_fut_bilhete_acao_fbc 
ON "sqd_fut_bilhete-acao"(fbc) 
WHERE fbc IS NOT NULL;

-- Índice composto para match por IP + User Agent + Timestamp
CREATE INDEX IF NOT EXISTS idx_sqd_fut_bilhete_acao_ip_ua_time 
ON "sqd_fut_bilhete-acao"(ip_address, user_agent, event_timestamp) 
WHERE ip_address IS NOT NULL AND user_agent IS NOT NULL;

-- Índice para ordenação por data
CREATE INDEX IF NOT EXISTS idx_sqd_fut_bilhete_acao_created_at 
ON "sqd_fut_bilhete-acao"(created_at DESC);

-- Índice para busca por FBCLID
CREATE INDEX IF NOT EXISTS idx_sqd_fut_bilhete_acao_fbclid 
ON "sqd_fut_bilhete-acao"(fbclid) 
WHERE fbclid IS NOT NULL;

-- ============================================
-- COMENTÁRIOS NA TABELA
-- ============================================

COMMENT ON TABLE "sqd_fut_bilhete-acao" IS 'Tracking de PageView para Landing Page Bilhete Ação - ETAPA 1';
COMMENT ON COLUMN "sqd_fut_bilhete-acao".fbp IS 'Cookie _fbp do Facebook - CRUCIAL para Meta CAPI';
COMMENT ON COLUMN "sqd_fut_bilhete-acao".fbc IS 'Cookie _fbc do Facebook - CRUCIAL para Meta CAPI';
COMMENT ON COLUMN "sqd_fut_bilhete-acao".email IS 'Email do usuário - Chave principal para match na ETAPA 2';
COMMENT ON COLUMN "sqd_fut_bilhete-acao".phone IS 'Telefone do usuário - Chave secundária para match na ETAPA 2';
COMMENT ON COLUMN "sqd_fut_bilhete-acao".metadata IS 'Dados extras em formato JSON para flexibilidade';

-- ============================================
-- FIM DO SCHEMA
-- ============================================

