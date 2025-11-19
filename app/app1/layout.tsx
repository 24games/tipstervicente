import type { Metadata } from 'next';
import './fonts.css';

export const metadata: Metadata = {
  title: 'App IA Casino - Vicente | Convierte $17.000 en $170.000',
  description: 'Descarga la app gratuita con inteligencia artificial que me convirtió en el récord de ganancias del casino. Operaciones EN VIVO.',
  keywords: ['casino', 'inteligencia artificial', 'app', 'ganancias', 'IA', 'vicente'],
  openGraph: {
    title: 'App IA Casino - Convierte $17.000 en $170.000',
    description: 'Descarga la app gratuita con inteligencia artificial',
    type: 'website',
  },
};

export default function App1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Preconnect para fontes */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.cdnfonts.com" />
      
      {/* Fonte Grift via CDN */}
      <link 
        href="https://fonts.cdnfonts.com/css/grift" 
        rel="stylesheet" 
      />
      
      {/* Fallback: Inter como backup */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      
      {children}
    </>
  );
}

