import '@/styles/globals.css'; // Importa o CSS global
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google'; // Importa a fonte
import { useRouter } from 'next/router';

// Seus componentes de layout
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Configura a fonte Inter
const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Define quais páginas terão o layout centralizado (sem Header/Footer)
  const authPages = ['/', '/login', '/signup'];
  const isAuthPage = authPages.includes(router.pathname);

  // Se for uma página de autenticação (/, /login, /signup)
  if (isAuthPage) {
    return (
      <main 
        className={`${inter.className} bg-gradient-to-b from-slate-900 to-slate-700 min-h-screen flex items-center justify-center p-4`}
      >
        <Component {...pageProps} />
      </main>
    );
  }

  // Se for qualquer outra página (loja, sobre, contato)
  return (
    <div className={`${inter.className} flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {/* O conteúdo da página (ex: store.tsx) será renderizado aqui */}
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}