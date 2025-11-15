import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Páginas com fundo escuro
  const authPages = ['/', '/login', '/signup'];
  const isAuthPage = authPages.includes(router.pathname);

  // Se for página de login/registro
  if (isAuthPage) {
    return (
      <main 
        className={`${inter.className} bg-gradient-to-b from-slate-900 to-slate-700 min-h-screen flex items-center justify-center p-4`}
      >
        <Component {...pageProps} />
      </main>
    );
  }

  // Se for o resto do site
  return (
    <div className={`${inter.className} flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}