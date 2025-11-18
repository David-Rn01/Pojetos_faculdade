import Link from 'next/link';
import { useCart } from './CartContext'; // 1. Importamos o hook do carrinho
import { ShoppingCart } from 'lucide-react'; // 2. Importamos o ícone

export default function Header() {
  // 3. Pegamos a função de abrir e o total de itens
  const { toggleCart, totalItems } = useCart();

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- LOGO --- */}
          <div className="flex-shrink-0">
            <Link href="/" legacyBehavior>
              <a className="text-3xl font-bold text-[#ffff]">Flashtech</a>
            </Link>
          </div>

          {/* --- LINKS DE NAVEGAÇÃO (Centro) --- */}
          <div className="hidden md:flex space-x-8">
            <Link href="/store" legacyBehavior>
              <a className="text-gray-300 hover:text-white transition-colors font-medium">Loja</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-gray-300 hover:text-white transition-colors font-medium">Sobre Nós</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-gray-300 hover:text-white transition-colors font-medium">Contato</a>
            </Link>
          </div>

          {/* --- ÁREA DIREITA (Carrinho + Login) --- */}
          <div className="flex items-center space-x-6">
            
            {/* BOTÃO DO CARRINHO */}
            <button 
              onClick={toggleCart} 
              className="relative p-2 text-gray-300 hover:text-white transition-colors focus:outline-none"
              aria-label="Abrir carrinho"
            >
              <ShoppingCart size={24} />
              
              {/* Bolinha vermelha com a quantidade (só aparece se tiver itens) */}
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* BOTÃO DE LOGIN */}
            <Link href="/login" legacyBehavior>
              <a className="bg-[#301860] hover:bg-[#483078] text-white px-5 py-2 rounded-lg font-semibold transition-colors">
                Login
              </a>
            </Link>

          </div>

        </div>
      </nav>
    </header>
  );
}