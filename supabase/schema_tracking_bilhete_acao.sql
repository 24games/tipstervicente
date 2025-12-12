-- ============================================
-- SCHEMA: Tracking Bilhete Ação (ETAPA 1)
-- Banco: Supabase
-- Projeto: tipstervicente
-- ============================================

-- Tabela principal para armazenar PageViews
-- Estrutura otimizada para match futuro com eventos de conversão (ETAPA 2)
CREATE TABLE IF NOT EXISTS tracking_bilhete_acao (
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
    fbp VARCHAR(255), -- Facebook Browser ID
    fbc VARCHAR(255), -- Facebook Click ID
    
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
    country VARCHAR(2), -- Código ISO (ex: BR)
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
    event_timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- ============================================
    -- METADADOS DO TRACKING
    -- ============================================
    meta_event_id VARCHAR(255), -- ID do evento enviado para Meta CAPI
    meta_sent_at TIMESTAMP WITH TIME ZONE, -- Quando foi enviado para Meta
    meta_success BOOLEAN DEFAULT FALSE, -- Se foi enviado com sucesso
    
    -- Campo para armazenar dados adicionais (JSON flexível)
    metadata JSONB DEFAULT '{}'::jsonb
);

-- ============================================
-- ÍNDICES PARA PERFORMANCE E MATCH
-- ============================================

-- Índice para match por email (principal)
CREATE INDEX IF NOT EXISTS idx_tracking_bilhete_acao_email 
    ON tracking_bilhete_acao(email) 
    WHERE email IS NOT NULL;

-- Índice para match por telefone (secundário)
CREATE INDEX IF NOT EXISTS idx_tracking_bilhete_acao_phone 
    ON tracking_bilhete_acao(phone) 
    WHERE phone IS NOT NULL;

-- Índice para match por fbp (Facebook Browser ID)
CREATE INDEX IF NOT EXISTS idx_tracking_bilhete_acao_fbp 
    ON tracking_bilhete_acao(fbp) 
    WHERE fbp IS NOT NULL;

-- Índice para match por fbp + fbc combinados
CREATE INDEX IF NOT EXISTS idx_tracking_bilhete_acao_fbp_fbc 
    ON tracking_bilhete_acao(fbp, fbc) 
    WHERE fbp IS NOT NULL AND fbc IS NOT NULL;

-- Índice para match por IP + User Agent + Timestamp (janela de tempo)
CREATE INDEX IF NOT EXISTS idx_tracking_bilhete_acao_ip_ua_time 
    ON tracking_bilhete_acao(ip_address, user_agent, event_timestamp);

-- Índice para busca por timestamp (análises temporais)
CREATE INDEX IF NOT EXISTS idx_tracking_bilhete_acao_timestamp 
    ON tracking_bilhete_acao(event_timestamp DESC);

-- Índice para busca por UTMs (análise de campanhas)
CREATE INDEX IF NOT EXISTS idx_tracking_bilhete_acao_utm 
    ON tracking_bilhete_acao(utm_source, utm_medium, utm_campaign);

-- Índice para busca por meta_event_id (verificação de envio)
CREATE INDEX IF NOT EXISTS idx_tracking_bilhete_acao_meta_event 
    ON tracking_bilhete_acao(meta_event_id) 
    WHERE meta_event_id IS NOT NULL;

-- ============================================
-- COMENTÁRIOS E DOCUMENTAÇÃO
-- ============================================

COMMENT ON TABLE tracking_bilhete_acao IS 
'Tracking de PageViews para landing page Bilhete Ação. Estrutura preparada para match com eventos de conversão (ETAPA 2)';

COMMENT ON COLUMN tracking_bilhete_acao.email IS 
'Email do usuário - Campo principal para match com eventos de conversão';

COMMENT ON COLUMN tracking_bilhete_acao.phone IS 
'Telefone do usuário - Campo secundário para match com eventos de conversão';

COMMENT ON COLUMN tracking_bilhete_acao.fbp IS 
'Facebook Browser ID (_fbp cookie) - CRUCIAL para envio correto na Meta CAPI';

COMMENT ON COLUMN tracking_bilhete_acao.fbc IS 
'Facebook Click ID (_fbc cookie) - Importante para atribuição de conversão';

COMMENT ON COLUMN tracking_bilhete_acao.meta_event_id IS 
'ID do evento retornado pela Meta CAPI - usado para verificação e deduplicação';

-- ============================================
-- NOTAS PARA ETAPA 2
-- ============================================
-- 
-- Esta estrutura permite match futuro através de:
-- 1. Email (match principal)
-- 2. Telefone (match secundário)
-- 3. fbp + fbc (match por cookies Facebook)
-- 4. IP + User Agent + Timestamp (match por sessão em janela de tempo)
--
-- Para adicionar nova landing page, crie tabela similar:
-- tracking_{nome_projeto} com mesma estrutura

