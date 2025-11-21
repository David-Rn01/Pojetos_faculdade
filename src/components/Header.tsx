import Link from 'next/link';
import { useRouter } from 'next/router'; // Importamos o useRouter
import { useCart } from './CartContext';
import { ShoppingCart, User, Phone } from 'lucide-react';

export default function Header() {
  const { toggleCart, totalItems } = useCart();
  
  // Pegamos a rota atual para saber em qual página estamos
  const router = useRouter();
  const { pathname } = router;

  // Lista de páginas onde o carrinho NÃO deve aparecer
  const authPages = ['/','/login', '/signup'];
  const hideCartButton = authPages.includes(pathname);

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="shrink-0">
            <Link href="/" legacyBehavior>
              <a className="text-3xl font-bold text-[#ffff]">Flashtech</a>
            </Link>
          </div>

          {/* LINKS DE NAVEGAÇÃO */}
          <div className="hidden md:flex space-x-8">
            <Link href="/store" legacyBehavior>
              <a className="text-gray-300 hover:text-white transition-colors font-medium">Loja</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-gray-300 hover:text-white transition-colors font-medium">Sobre Nós</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-gray-300 hover:text-white transition-colors font-medium flex items-center gap-2">
                <Phone size={18} /> 
                Contato
              </a>
            </Link>
          </div>

          {/* ÁREA DIREITA */}
          <div className="flex items-center space-x-6">
            
            {/* Só mostramos o carrinho se NÃO estivermos nas páginas de auth */}
            {!hideCartButton && (
              <button 
                onClick={toggleCart} 
                className="relative p-2 text-gray-300 hover:text-white transition-colors focus:outline-none"
                aria-label="Abrir carrinho"
              >
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            )}

            {/* Botão Login */}
            <Link href="/login" legacyBehavior>
              <a className="bg-[#301860] hover:bg-[#483078] text-white px-5 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <User size={18} />
                Login
              </a>
            </Link>

          </div>

        </div>
      </nav>
    </header>
  );
}