/**
 * API Route: Tracking PageView (ETAPA 1)
 * 
 * Endpoint: /api/track/pageview
 * Método: POST
 * 
 * Recebe dados de PageView do cliente-side, salva no Supabase
 * e envia para Meta Conversion API
 */

import { NextRequest, NextResponse } from 'next/server';

// ============================================
// CONFIGURAÇÃO - CREDENCIAIS META
// ============================================
// IMPORTANTE: Substitua pelos valores reais nas variáveis de ambiente
const META_PIXEL_ID = process.env.META_PIXEL_ID || '928212556030144';
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || 'EAADG88pNjVUBQNJuBtUPNAZA5HqZBle3kHQfYZCAoDtPZCNQeLRiJHXPsNbYS7sdA4DMDanZCeJ0OOQMqWzfxr7pfRXmwmd2Qaw5nmthYZAZAxpxZA0Q0kUV7jzplsb0OiOIkUxxawLwS4OZAdeJ23xpVRE6AJ1ZArEOHmbKBq9AmRwUvk2bRiveyfNBJenVpykAZDZD';

// Nome da tabela no Supabase (isolamento por projeto)
const SUPABASE_TABLE = 'sqd_fut_bilhete-acao';

// URL da Meta Conversion API
const META_CAPI_URL = `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events`;

// ============================================
// TIPOS
// ============================================

interface PageViewData {
  // Identificação
  email?: string;
  phone?: string;
  ip?: string;
  user_agent?: string;
  fbp?: string;
  fbc?: string;
  
  // Dados pessoais
  first_name?: string;
  last_name?: string;
  date_of_birth?: string;
  
  // Localização
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
  
  // Tracking/UTMs
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  fbclid?: string;
  gclid?: string;
  
  // Metadados
  page_url?: string;
  referrer?: string;
  language?: string;
  timestamp?: string;
}

// ============================================
// FUNÇÃO: Salvar no Supabase
// ============================================

async function saveToSupabase(data: PageViewData, clientIp: string) {
  try {
    // IMPORTANTE: Usar Supabase MCP Server aqui
    // Por enquanto, usando fetch direto - substituir por MCP quando disponível
    
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase credentials not configured');
    }

    const payload = {
      email: data.email || null,
      phone: data.phone || null,
      fbp: data.fbp || null,
      fbc: data.fbc || null,
      ip_address: data.ip || clientIp || null,
      user_agent: data.user_agent || null,
      first_name: data.first_name || null,
      last_name: data.last_name || null,
      date_of_birth: data.date_of_birth || null,
      city: data.city || null,
      state: data.state || null,
      country: data.country || null,
      zip_code: data.zip_code || null,
      utm_source: data.utm_source || null,
      utm_medium: data.utm_medium || null,
      utm_campaign: data.utm_campaign || null,
      utm_term: data.utm_term || null,
      utm_content: data.utm_content || null,
      fbclid: data.fbclid || null,
      gclid: data.gclid || null,
      page_url: data.page_url || null,
      referrer: data.referrer || null,
      language: data.language || null,
      event_timestamp: data.timestamp || new Date().toISOString(),
      metadata: {
        received_at: new Date().toISOString(),
        source: 'pageview_tracking'
      }
    };

    const response = await fetch(`${supabaseUrl}/rest/v1/${SUPABASE_TABLE}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Supabase error: ${error}`);
    }

    const result = await response.json();
    return result[0]; // Retorna o registro criado
  } catch (error) {
    console.error('Error saving to Supabase:', error);
    throw error;
  }
}

// ============================================
// FUNÇÃO: Enviar para Meta CAPI
// ============================================

async function sendToMetaCAPI(data: PageViewData, clientIp: string, userAgent: string) {
  try {
    // Preparar dados para Meta CAPI
    const eventData = {
      data: [
        {
          event_name: 'PageView',
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: data.page_url || '',
          action_source: 'website',
          user_data: {
            // Hash dos dados sensíveis (opcional, mas recomendado)
            em: data.email ? await hashData(data.email) : undefined,
            ph: data.phone ? await hashData(data.phone) : undefined,
            fn: data.first_name ? await hashData(data.first_name) : undefined,
            ln: data.last_name ? await hashData(data.last_name) : undefined,
            db: data.date_of_birth ? await hashData(data.date_of_birth) : undefined,
            ct: data.city ? await hashData(data.city) : undefined,
            st: data.state ? await hashData(data.state) : undefined,
            country: data.country ? await hashData(data.country) : undefined,
            zp: data.zip_code ? await hashData(data.zip_code) : undefined,
            external_id: undefined, // Pode ser usado para match futuro
          },
          custom_data: {
            content_name: 'Bilhete Ação Landing Page',
            content_category: 'Landing Page',
            currency: 'USD',
            value: 0, // PageView não tem valor
          },
          // Cookies Facebook (CRUCIAIS)
          fbp: data.fbp || undefined,
          fbc: data.fbc || undefined,
        }
      ],
      // Test event code (remover em produção)
      // test_event_code: 'TEST12345',
    };

    const response = await fetch(`${META_CAPI_URL}?access_token=${META_ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Meta CAPI error: ${error}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending to Meta CAPI:', error);
    throw error;
  }
}

// ============================================
// FUNÇÃO: Hash de dados (SHA256)
// ============================================

async function hashData(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ============================================
// FUNÇÃO: Extrair IP do request
// ============================================

function getClientIP(request: NextRequest): string {
  // Tentar vários headers (Vercel, Cloudflare, etc)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIp) {
    return realIp;
  }
  if (cfConnectingIp) {
    return cfConnectingIp;
  }
  
  return 'unknown';
}

// ============================================
// HANDLER PRINCIPAL
// ============================================

export async function POST(request: NextRequest) {
  try {
    // Extrair IP e User Agent do request
    const clientIp = getClientIP(request);
    const userAgent = request.headers.get('user-agent') || '';

    // Parse do body
    const body: PageViewData = await request.json();

    // Validação básica
    if (!body.page_url) {
      return NextResponse.json(
        { error: 'page_url is required' },
        { status: 400 }
      );
    }

    // Salvar no Supabase
    let supabaseRecord;
    try {
      supabaseRecord = await saveToSupabase(body, clientIp);
    } catch (error) {
      console.error('Failed to save to Supabase:', error);
      // Continuar mesmo se falhar (não bloquear o tracking)
    }

    // Enviar para Meta CAPI
    let metaResponse;
    try {
      metaResponse = await sendToMetaCAPI(body, clientIp, userAgent);
      
      // Atualizar registro no Supabase com status do Meta
      if (supabaseRecord?.id && metaResponse?.events_received) {
        // TODO: Atualizar meta_event_id e meta_success no Supabase
        // Usar MCP Server para atualizar
      }
    } catch (error) {
      console.error('Failed to send to Meta CAPI:', error);
      // Continuar mesmo se falhar
    }

    // Retornar sucesso
    return NextResponse.json({
      success: true,
      supabase_id: supabaseRecord?.id,
      meta_events_received: metaResponse?.events_received || 0,
      message: 'PageView tracked successfully'
    });

  } catch (error: any) {
    console.error('Error in PageView tracking:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error.message 
      },
      { status: 500 }
    );
  }
}

// Permitir apenas POST
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST.' },
    { status: 405 }
  );
}

