/**
 * Cliente-Side: PageView Tracker
 * 
 * Script para capturar dados do usuário e enviar para endpoint server-side
 * 
 * USO:
 * import { trackPageView } from '@/lib/tracking/pageview-tracker';
 * trackPageView();
 */

// ============================================
// CONFIGURAÇÃO
// ============================================
const TRACKING_ENDPOINT = '/api/track/pageview';

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

/**
 * Obter cookie por nome
 */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
}

/**
 * Obter parâmetros da URL (UTMs, etc)
 */
function getUrlParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  
  params.forEach((value, key) => {
    result[key] = value;
  });
  
  return result;
}

/**
 * Obter IP do cliente (via API externa - opcional)
 * Nota: Em produção, o IP será capturado no server-side
 * REMOVIDO: Esta chamada pode causar delay. O server-side captura automaticamente.
 */
async function getClientIP(): Promise<string | null> {
  // Não fazer chamada externa - o server-side captura o IP automaticamente
  // Isso evita delay e possíveis erros de CORS
  return null;
}

// ============================================
// FUNÇÃO PRINCIPAL: Track PageView
// ============================================

export async function trackPageView(additionalData?: Record<string, any>) {
  try {
    // Verificar se já foi executado (evitar duplicatas)
    if (typeof window !== 'undefined') {
      const trackingKey = 'pageview_tracked';
      if (sessionStorage.getItem(trackingKey)) {
        return; // Já foi rastreado nesta sessão
      }
      sessionStorage.setItem(trackingKey, 'true');
    }

    // Capturar dados do navegador
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    const language = typeof navigator !== 'undefined' ? navigator.language : '';
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const referrer = typeof document !== 'undefined' ? document.referrer : '';

    // Capturar cookies Facebook
    const fbp = getCookie('_fbp') || undefined;
    const fbc = getCookie('_fbc') || undefined;

    // Capturar parâmetros da URL
    const urlParams = getUrlParams();
    const utmSource = urlParams.utm_source || urlParams.utmSource;
    const utmMedium = urlParams.utm_medium || urlParams.utmMedium;
    const utmCampaign = urlParams.utm_campaign || urlParams.utmCampaign;
    const utmTerm = urlParams.utm_term || urlParams.utmTerm;
    const utmContent = urlParams.utm_content || urlParams.utmContent;
    const fbclid = urlParams.fbclid;
    const gclid = urlParams.gclid;

    // Preparar payload
    const payload = {
      // Identificação
      // ip: removido - server-side captura automaticamente
      user_agent: userAgent,
      fbp: fbp,
      fbc: fbc,

      // Tracking/UTMs
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_term: utmTerm,
      utm_content: utmContent,
      fbclid: fbclid,
      gclid: gclid,

      // Metadados
      page_url: pageUrl,
      referrer: referrer,
      language: language,
      timestamp: new Date().toISOString(),

      // Dados adicionais (se fornecidos)
      ...additionalData,
    };

    // Enviar para endpoint server-side
    const response = await fetch(TRACKING_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Tracking failed: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('PageView tracked successfully:', result);

    return result;
  } catch (error) {
    console.error('Error tracking PageView:', error);
    // Não bloquear a página em caso de erro
    return null;
  }
}

// ============================================
// FUNÇÃO: Track com dados do formulário
// ============================================

export async function trackPageViewWithForm(formData: {
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  date_of_birth?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
}) {
  return trackPageView(formData);
}

// ============================================
// AUTO-TRACK (opcional)
// ============================================

/**
 * Inicializar tracking automático quando a página carregar
 * Use apenas se quiser tracking automático em todas as páginas
 */
export function initAutoTracking() {
  if (typeof window === 'undefined') return;

  // Aguardar página carregar completamente
  if (document.readyState === 'complete') {
    trackPageView();
  } else {
    window.addEventListener('load', () => {
      trackPageView();
    });
  }
}

