import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { useRouter } from 'next/router'; // 1. Importe o useRouter

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // 2. Pegue a rota atual
  const router = useRouter();
  const { pathname } = router;

  // 3. Crie uma lista das páginas onde o link deve ser escondido
  const authPages = ['/', '/login', '/signup'];
  const hideStoreLink = authPages.includes(pathname);

  return (
    <footer className="bg-slate-900 text-gray-300 w-full">
      <div className="container mx-auto p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Coluna 1: Sobre Nós */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Flashtech
            </h3>
            <p className="text-sm text-gray-400">
              Sua loja de confiança para os melhores eletrônicos e gadgets. 
              Nossa missão é conectar você com a tecnologia que importa, 
              com agilidade e segurança.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-flashtech-purple hover:underline transition-colors">
                  Página Inicial
                </Link>
              </li>
              
              {/* --- AQUI ESTÁ A MÁGICA --- */}
              {/* 4. O link "Loja" só aparece se 'hideStoreLink' for falso */}
              {!hideStoreLink && (
                <li>
                  <Link href="/store" className="hover:text-flashtech-purple hover:underline transition-colors">
                    Loja
                  </Link>
                </li>
              )}
              {/* --- FIM DA MÁGICA --- */}

              <li>
                <Link href="/about" className="hover:text-flashtech-purple hover:underline transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-flashtech-purple hover:underline transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-flashtech-purple" />
                <span>contato@flashtech.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-flashtech-purple" />
                <span>(99) 99999-9999</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Barra de Copyright */}
      <div className="bg-slate-800 text-gray-500 text-center text-sm py-4">
        <p>
          &copy; {currentYear} Flashtech. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}