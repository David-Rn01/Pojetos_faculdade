import '../styles/globals.css'; // <<<--- CORREÇÃO AQUI
import type { AppProps } from 'next/app';
import Head from 'next/head';

// --- CAMINHOS CORRIGIDOS (de '@/' para '../') ---
import { CartProvider } from '../components/CartContext'; // O "Cérebro"
import CartPanel from '../components/CartPanel';       // O "Visual" do carrinho
import Header from '../components/Header';           // Seu Header
import Footer from '../components/Footer';           // Seu Footer
// -----------------------------------------------

export default function App({ Component, pageProps }: AppProps) {
  return (
    // 1. O Provider DEVE envolver todo o resto
    <CartProvider>
      <Head>
        <title>Flashtech</title>
        <meta name="description" content="Sua loja de eletrônicos." />
      </Head>

      {/* 2. Este 'div' controla o layout da aplicação */}
      <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
        
        {/* 3. O Header agora pode usar o 'useCart()' */}
        <Header />

        {/* 4. O 'main' envolve a página atual (ex: store.tsx, [id].tsx) */}
        {/* Adicionado padding aqui para dar espaço nas laterais */}
        <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          <Component {...pageProps} />
        </main>

        {/* 5. O Footer fica no final */}
        <Footer />

        {/* 6. O Painel do Carrinho fica aqui, fora do fluxo principal */}
        {/* Ele é controlado pelo CartContext */}
        <CartPanel />
      </div>
    </CartProvider>
  );
}