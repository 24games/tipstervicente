# 🐛 Debug: Testar Tracking PageView

## Como usar no Console do Navegador

1. Abra a página: `http://localhost:3000/bilhete-acao`
2. Pressione `F12` para abrir o DevTools
3. Vá na aba **Console**
4. Cole o código abaixo e pressione `Enter`

---

## 📋 Comando de Debug Completo

```javascript
// ============================================
// DEBUG: Testar Tracking PageView
// ============================================

(async function debugPageView() {
  console.log('🔍 Iniciando teste de PageView...\n');
  
  try {
    // Limpar sessionStorage para permitir novo tracking
    sessionStorage.removeItem('pageview_tracked');
    console.log('✅ SessionStorage limpo\n');
    
    // Capturar dados manualmente
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const pageUrl = window.location.href;
    const referrer = document.referrer;
    
    // Capturar cookies Facebook
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    }
    
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');
    
    // Capturar UTMs da URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    const fbclid = urlParams.get('fbclid');
    const gclid = urlParams.get('gclid');
    
    // Preparar payload
    const payload = {
      user_agent: userAgent,
      fbp: fbp || undefined,
      fbc: fbc || undefined,
      utm_source: utmSource || undefined,
      utm_medium: utmMedium || undefined,
      utm_campaign: utmCampaign || undefined,
      fbclid: fbclid || undefined,
      gclid: gclid || undefined,
      page_url: pageUrl,
      referrer: referrer,
      language: language,
      timestamp: new Date().toISOString(),
    };
    
    console.log('📦 Payload capturado:');
    console.table(payload);
    console.log('\n');
    
    // Enviar para API
    console.log('📤 Enviando para /api/track/pageview...\n');
    
    const response = await fetch('/api/track/pageview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    console.log(`📊 Status: ${response.status} ${response.statusText}\n`);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Erro na resposta:');
      console.error(errorText);
      return;
    }
    
    const result = await response.json();
    
    console.log('✅ Resposta do servidor:');
    console.log(result);
    console.log('\n');
    
    // Verificar resultados
    if (result.success) {
      console.log('🎉 SUCESSO! PageView rastreado com sucesso!');
      console.log(`   - Supabase ID: ${result.supabase_id || 'N/A'}`);
      console.log(`   - Meta Events: ${result.meta_events_received || 0}`);
    } else {
      console.warn('⚠️ Resposta não indica sucesso');
    }
    
  } catch (error) {
    console.error('❌ ERRO ao testar PageView:');
    console.error(error);
    console.error('\nStack:', error.stack);
  }
})();
```

---

## 🎯 Comando Simplificado (Versão Curta)

```javascript
// Versão curta - apenas testar
sessionStorage.removeItem('pageview_tracked');
fetch('/api/track/pageview', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    page_url: window.location.href,
    user_agent: navigator.userAgent,
    language: navigator.language,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
  })
})
.then(r => r.json())
.then(data => console.log('✅ Resultado:', data))
.catch(err => console.error('❌ Erro:', err));
```

---

## 🔍 Verificar Dados no Supabase

Após executar o debug, você pode verificar se os dados foram salvos:

1. Acesse o Supabase Dashboard
2. Vá na tabela `tracking_bilhete_acao`
3. Verifique o último registro criado

---

## 🧪 Testar com UTMs

Para testar com parâmetros de URL, adicione à URL:

```
http://localhost:3000/bilhete-acao?utm_source=facebook&utm_medium=cpc&utm_campaign=teste&fbclid=123456
```

Depois execute o comando de debug novamente.

---

## 📝 Notas

- O tracking usa `sessionStorage` para evitar duplicatas na mesma sessão
- Para testar múltiplas vezes, limpe o `sessionStorage` primeiro
- Os dados são enviados para Supabase E Meta CAPI simultaneamente
- Erros não bloqueiam a página (são apenas logados no console)

