import Head from 'next/head';
import Link from 'next/link';
import { Smartphone, Laptop, Headphones, Package } from 'lucide-react';
import ProductCard from '../components/ProductCard'; // Usando caminho relativo

// --- DADOS FICTÍCIOS (MOCK) ---
// Este é o formato que o seu ProductCard.tsx espera
const mockProducts = [
  { id: '1', name: 'Smartphone Pro X (128GB, Tela 6.7")', price: 4299.90, image: 'https://m.media-amazon.com/images/I/61kE-oxS5QL._AC_SX522_.jpg', colors: ['Preto', 'Prata'], category: 'Smartphones' },
  { id: '2', name: 'Notebook UltraSlim Flashtech', price: 7599.00, image: 'https://m.media-amazon.com/images/I/51LAU1+ACrL._AC_SX679_.jpg', colors: ['Cinza', 'Prata'], category: 'Notebooks' },
  { id: '3', name: 'Fone de Ouvido Sem Fio Flashtech Bass', price: 899.90, image: 'https://m.media-amazon.com/images/I/51+i1WUqFLL._AC_SX522_.jpg', colors: ['Preto', 'Branco'], category: 'Acessórios' },
  { id: '4', name: 'Smartwatch 2.0 GPS', price: 1899.50, image: 'https://m.media-amazon.com/images/I/61e3-n3lLcL._AC_SY300_SX300_QL70_ML2_.jpg', colors: ['Preto', 'Dourado'], category: 'Acessórios' },
  { id: '5', name: 'Carregador Rápido 65W', price: 299.00, image: 'https://placehold.co/600x600/1e293b/94a3b8?text=Carregador', colors: ['Branco'], category: 'Outros' },
  { id: '6', name: 'Mouse Gamer Pro', price: 499.00, image: 'https://placehold.co/600x600/1e293b/94a3b8?text=Mouse', colors: ['Preto', 'RGB'], category: 'Periféricos' },
  { id: '7', name: 'Monitor UltraWide 34"', price: 2799.00, image: 'https://placehold.co/600x600/1e293b/94a3b8?text=Monitor', colors: ['Preto'], category: 'Monitores' },
  { id: '8', name: 'Teclado Mecânico RGB', price: 699.00, image: 'https://placehold.co/600x600/1e293b/94a3b8?text=Teclado', colors: ['Preto', 'Branco'], category: 'Periféricos' },
  { id: '9', name: 'Teclado Mecânico RGB', price: 699.00, image: 'https://placehold.co/600x600/1e293b/94a3b8?text=Teclado', colors: ['Preto', 'Branco'], category: 'Periféricos' },
  { id: '10', name: 'Teclado Mecânico RGB', price: 699.00, image: 'https://placehold.co/600x600/1e293b/94a3b8?text=Teclado', colors: ['Preto', 'Branco'], category: 'Periféricos' },
  { id: '11', name: 'Teclado Mecânico RGB', price: 699.00, image: 'https://placehold.co/600x600/1e293b/94a3b8?text=Teclado', colors: ['Preto', 'Branco'], category: 'Periféricos' },
  { id: '12', name: 'Teclado Mecânico RGB', price: 999.00, image: 'https://placehold.co/600x600/1e293b/94a3b8?text=Teclado', colors: ['Preto', 'Branco'], category: 'Outros' },
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
                           bg-blue-600 hover:bg-blue-700
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
               border border-gray-700 hover:border-blue-500 
               transition-all group"
  >
    <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
      {icon}
    </div>
    <span className="mt-3 font-semibold text-center">{name}</span>
  </Link>
);
