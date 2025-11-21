import Head from 'next/head';
import Link from 'next/link';
import { Smartphone, Laptop, Headphones, Package } from 'lucide-react';
import ProductCard from '../components/ProductCard'; // Usando caminho relativo

// --- DADOS FICTÍCIOS (MOCK) ---
// Este é o formato que o seu ProductCard.tsx espera
const mockProducts = [
  { id: '1', name: 'Samsung Galaxy S25 Ultra', price: 7649.00, image: 'https://m.magazineluiza.com.br/a-static/420x420/samsung-galaxy-s25-ultra-5g-256gb-galaxy-ai-titanio-azul-69-12gb-ram-cam-quadrupla-200-50-10-50mp-bateria-5000mah-dual-chip/magazineluiza/238920600/ff9276f61022e47dcf89b5f0031cec0b.jpg', colors: ['Preto', 'Prata'], category: 'Smartphones' },
  { id: '2', name: 'MacBook Air Apple 13" Chip M4, CPU 10 Núcleos, GPU 8 Núcleos, Neural Engine 16 Núcleos, 16GB RAM, SSD 256GB, Meia-noite - MW123BZ/A', price: 9015.50, image: 'https://m.magazineluiza.com.br/a-static/420x420/macbook-air-apple-13-chip-m4-cpu-10-nucleos-gpu-8-nucleos-neural-engine-16-nucleos-16gb-ram-ssd-256gb-meia-noite-mw123bz-a/kabum/726058/e211f07e7c8325ac03392f9dcc70d159.jpeg', colors: ['Cinza', 'Prata'], category: 'Notebooks' },
  { id: '3', name: 'AirPods 4 Apple com Estojo de Recarga USB-C, Branco - MXP63BZ/A', price: 1149.90, image: 'https://m.magazineluiza.com.br/a-static/420x420/airpods-4-apple-com-estojo-de-recarga-usb-c-branco-mxp63bz-a/kabum/634642/242c3d32699ca0328655092b6a559586.jpeg', colors: ['Preto', 'Branco'], category: 'Acessórios' },
  { id: '4', name: 'Apple Watch SE 3 GPS Caixa Estelar de Alumínio 40mm Pulseira Esportiva Estelar P/M', price: 3200.50, image: 'https://m.magazineluiza.com.br/a-static/420x420/apple-watch-se-3-gps-caixa-estelar-de-aluminio-40mm-pulseira-esportiva-estelar-p-m/magazineluiza/240598400/b29dcf9aafe064141a65c89d19f3cd63.jpg', colors: ['Preto', 'Dourado'], category: 'Acessórios' },
  { id: '5', name: 'Carregador USB C certificado pela Apple, pacote de 2 m, para iPhone Lightning - Kruidvat', price: 350.00, image: 'https://m.media-amazon.com/images/I/5166ogGvNYL._AC_SL1500_.jpg', colors: ['Branco'], category: 'Outros' },
  { id: '6', name: 'Mouse Gamer Sem Fio Logitech G Pro X Superlight 2 DEX, Lightspeed, 44.000 DPI, Design Assimétrico para Destros, Branco -910-007364', price: 750.00, image: 'https://m.magazineluiza.com.br/a-static/420x420/mouse-gamer-sem-fio-logitech-g-pro-x-superlight-2-dex-lightspeed-44-000-dpi-design-assimetrico-para-destros-branco-910-007364/kabum/677447/7cec25fda2017d278f2e40c0696cd7b0.jpeg', colors: ['Preto', 'RGB'], category: 'Periféricos' },
  { id: '7', name: 'Monitor Gamer Curvo ASUS ROG Swift 49", DFHD, UltraWide, 144Hz, FreeSync Premium, HDR 10, Altura Ajustável, Som Integrado - XG49VQ"', price: 4499.00, image: 'https://m.magazineluiza.com.br/a-static/420x420/monitor-gamer-curvo-asus-rog-swift-49-dfhd-ultrawide-144hz-freesync-premium-hdr-10-altura-ajustavel-som-integrado-xg49vq/kabum/103167/a6f583fa6f7cc558f58e2f1687a8de45.jpeg', colors: ['Preto'], category: 'Monitores' },
  { id: '8', name: 'Teclado Mecânico para Games Hykekit x FGG MADLIONS MAD 60 HE RGB 60%', price: 533.00, image: 'https://m.media-amazon.com/images/I/61ZPIlnLfBL._AC_SY450_.jpg', colors: ['Preto', 'Branco'], category: 'Periféricos' },
  { id: '9', name: 'Cadeira Gamer XT Racer Reclinável Giratória Preta Platinum W Series', price: 1044.00, image: 'https://m.magazineluiza.com.br/a-static/420x420/cadeira-gamer-xt-racer-reclinavel-giratoria-preta-platinum-w-series/magazineluiza/225508500/7e722a70bce5446135ccc95881e8e5a1.jpg', colors: ['Preto', 'Branco'], category: 'Acessórios' },
  { id: '10', name: 'Mesa Gamer KBM! GAMING DG500, Preto, RGB, Entrada P2 para Fone de Ouvido e Microfone - KGDG500PT', price: 799.00, image: 'https://m.magazineluiza.com.br/a-static/420x420/mesa-gamer-kbm-gaming-dg500-preto-rgb-entrada-p2-para-fone-de-ouvido-e-microfone-kgdg500pt/kabum/477684/a8d16b570794ebd0758d54f0a4910645.jpeg', colors: ['Preto', 'Branco'], category: 'Acéssorios' },
  { id: '11', name: 'Mousepad Dazz Hybrid Daskmat Octopus, Extra Grande 900x400mm, Borda Costurada, Preto Estampado - 62000141', price: 74.00, image: 'https://m.magazineluiza.com.br/a-static/420x420/mousepad-dazz-hybrid-daskmat-octopus-extra-grande-900x400mm-borda-costurada-preto-estampado-62000141/kabum/363053/c0cbfad01e3a670aeccec1f2a66607a8.jpeg', colors: ['Preto', 'Branco'], category: 'Periféricos' },
  { id: '12', name: 'Gabinete Gamer Rise Mode Galaxy Glass, Mid Tower, ATX, Lateral e Frontal em Vidro Temperado, Sem FANs, Branco - RM-GA-GG-FW', price: 379.00, image: 'https://m.magazineluiza.com.br/a-static/420x420/gabinete-gamer-rise-mode-galaxy-glass-mid-tower-atx-lateral-e-frontal-em-vidro-temperado-sem-fans-branco-rm-ga-gg-fw/kabum/320909/a5c9fdb01abf19fe8e1479f87bce1852.jpeg', colors: ['Preto', 'Branco'], category: 'Outros' },
];
// ------------------------------

export default function StorePage() {
  return (
    <>
      <Head>
        <title>Flashtech - Loja</title>
      </Head>

      {/* O w-full faz ele ocupar 100% do 'main' no _app.tsx */}
      <div className="w-full space-y-16">

        {/* --- Seção Hero (Design Flashtech) --- */}
        <section className="text-center bg-gray-800 p-12 md:p-20 rounded-xl shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Bem-vindo à Flashtech
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Os melhores eletrônicos e gadgets de última geração.
          </p>
          <div className="mt-8">
            <Link
              href="#destaques"
              className="inline-block text-white font-bold py-3 px-8 rounded-lg transition-colors
                           bg-[#3859A3] hover:bg-blue-700
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Ver Ofertas
            </Link>
          </div>
        </section>

        {/* --- Seção de Categorias (Design Flashtech) --- */}
        <section>
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Nossas Categorias
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <CategoryLink icon={<Smartphone size={32} />} name="Smartphones" />
            <CategoryLink icon={<Laptop size={32} />} name="Notebooks" />
            <CategoryLink icon={<Headphones size={32} />} name="Acessórios" />
            <CategoryLink icon={<Package size={32} />} name="Outros" />
          </div>
        </section>

        {/* --- Seção de Produtos em Destaque --- */}
        <section id="destaques">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Em Destaque
          </h2>
          
          {/* Grade de produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {/* --- ESTA É A FORMA CORRETA DE CHAMAR O CARD --- */}
            {mockProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product} // Passando o objeto 'product' inteiro
              />
            ))}
            {/* --- FIM --- */}

          </div>
        </section>

      </div>
    </>
  );
}

// Componente auxiliar de categoria (Design Flashtech)
const CategoryLink = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
  <Link
    href="#"
    className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md
               text-gray-300 hover:text-white
               border border-gray-700 hover:border-white 
               transition-all group"
  >
    <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
      {icon}
    </div>
    <span className="mt-3 font-semibold text-center">{name}</span>
  </Link>
);
