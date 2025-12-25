/**
 * Meta Pixel Component
 * 
 * Componente React para incluir o Meta Pixel na página
 * 
 * USO:
 * import MetaPixel from '@/components/tracking/MetaPixel';
 * <MetaPixel />
 */

'use client';

import { useEffect } from 'react';

// ============================================
// CONFIGURAÇÃO
// ============================================
// IMPORTANTE: Substitua pelo Pixel ID real
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '928212556030144';

export default function MetaPixel() {
  useEffect(() => {
    try {
      // Verificar se já foi inicializado
      if (typeof window === 'undefined' || (window as any).fbq) {
        return;
      }

      // Inicializar Meta Pixel
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        if (s && s.parentNode) {
          s.parentNode.insertBefore(t, s);
        }
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );

      // Configurar Pixel (com delay para garantir que carregou)
      setTimeout(() => {
        try {
          if ((window as any).fbq) {
            (window as any).fbq('init', META_PIXEL_ID);
            (window as any).fbq('track', 'PageView');
          }
        } catch (error) {
          console.error('Meta Pixel init error (não crítico):', error);
        }
      }, 100);
    } catch (error) {
      console.error('Meta Pixel error (não crítico):', error);
    }
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}

