// src/pages/_app.tsx
//import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 1. Importe a fonte 'Inter'
import { Inter } from 'next/font/google';

// 2. Configure a fonte
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    // 3. Aplique a fonte no div principal (LINHA CORRIGIDA)
    <div className={`flex flex-col min-h-screen bg-gray-50 ${inter.className}`}>
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}