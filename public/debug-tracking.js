/**
 * 🐛 DEBUG: Testar Tracking PageView
 * 
 * COMO USAR:
 * 1. Abra o Console do navegador (F12)
 * 2. Cole este código completo e pressione Enter
 * 3. Ou copie apenas a função debugPageView() e execute: debugPageView()
 */

window.debugPageView = async function() {
  console.log('%c🔍 TESTE DE PAGEVIEW TRACKING', 'font-size: 16px; font-weight: bold; color: #0088cc;');
  console.log('=====================================\n');
  
  try {
    // Limpar sessionStorage para permitir novo tracking
    sessionStorage.removeItem('pageview_tracked');
    console.log('✅ SessionStorage limpo\n');
    
    // Capturar dados
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const pageUrl = window.location.href;
    const referrer = document.referrer;
    
    // Função para pegar cookies
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    }
    
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');
    
    // Capturar UTMs
    const urlParams = new URLSearchParams(window.location.search);
    
    const payload = {
      user_agent: userAgent,
      fbp: fbp || undefined,
      fbc: fbc || undefined,
      utm_source: urlParams.get('utm_source') || undefined,
      utm_medium: urlParams.get('utm_medium') || undefined,
      utm_campaign: urlParams.get('utm_campaign') || undefined,
      utm_term: urlParams.get('utm_term') || undefined,
      utm_content: urlParams.get('utm_content') || undefined,
      fbclid: urlParams.get('fbclid') || undefined,
      gclid: urlParams.get('gclid') || undefined,
      page_url: pageUrl,
      referrer: referrer,
      language: language,
      timestamp: new Date().toISOString(),
    };
    
    console.log('📦 Dados capturados:');
    console.table(payload);
    console.log('\n');
    
    // Enviar para API
    console.log('📤 Enviando para /api/track/pageview...\n');
    
    const startTime = Date.now();
    const response = await fetch('/api/track/pageview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    const duration = Date.now() - startTime;
    console.log(`⏱️ Tempo de resposta: ${duration}ms`);
    console.log(`📊 Status: ${response.status} ${response.statusText}\n`);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ ERRO na resposta:');
      console.error(errorText);
      return { success: false, error: errorText };
    }
    
    const result = await response.json();
    
    console.log('✅ Resposta do servidor:');
    console.log(result);
    console.log('\n');
    
    // Resultado final
    if (result.success) {
      console.log('%c🎉 SUCESSO! PageView rastreado!', 'font-size: 14px; font-weight: bold; color: #7BD204;');
      console.log(`   📝 Supabase ID: ${result.supabase_id || 'N/A'}`);
      console.log(`   📊 Meta Events Recebidos: ${result.meta_events_received || 0}`);
      console.log(`   💬 Mensagem: ${result.message || 'OK'}`);
    } else {
      console.warn('⚠️ Resposta não indica sucesso');
    }
    
    return result;
    
  } catch (error) {
    console.error('%c❌ ERRO ao testar PageView:', 'font-size: 14px; font-weight: bold; color: red;');
    console.error(error);
    console.error('\nStack:', error.stack);
    return { success: false, error: error.message };
  }
};

console.log('%c✅ Função debugPageView() carregada!', 'color: green; font-weight: bold;');
console.log('💡 Execute: debugPageView()');

