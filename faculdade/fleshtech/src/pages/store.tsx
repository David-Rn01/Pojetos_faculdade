import Head from 'next/head';
import Link from 'next/link';
import { Smartphone, Laptop, Headphones, Package } from 'lucide-react';
import ProductCard from '@/components/ProductCard'; 

// --- DADOS FICTÍCIOS (MOCK) ---
const mockProducts = [
  { id: 1, name: 'Smartphone Pro X (128GB, Tela 6.7")', price: 4299.90, imageUrl: 'https://placehold.co/600x600/301860/FFFFFF?text=Smartphone' },
  { id: 2, name: 'Notebook UltraSlim', price: 7599.00, imageUrl: 'https://placehold.co/600x600/483078/FFFFFF?text=Notebook' },
  { id: 3, name: 'Fone de Ouvido Sem Fio Flashtech Bass', price: 899.90, imageUrl: 'https://placehold.co/600x600/301860/FFFFFF?text=Fone' },
  { id: 4, name: 'Smartwatch 2.0 GPS', price: 1899.50, imageUrl: 'https://placehold.co/600x600/483078/FFFFFF?text=Watch' },
  { id: 5, name: 'Carregador Rápido 65W', price: 299.00, imageUrl: 'https://placehold.co/600x600/301860/FFFFFF?text=Carregador' },
  { id: 6, name: 'Mouse Gamer Pro', price: 499.00, imageUrl: 'https://placehold.co/600x600/483078/FFFFFF?text=Mouse' },
  { id: 6, name: 'Mouse Gamer Pro', price: 499.00, imageUrl: 'https://placehold.co/600x600/483078/FFFFFF?text=Mouse' },
  { id: 6, name: 'Mouse Gamer Pro', price: 499.00, imageUrl: 'https://placehold.co/600x600/483078/FFFFFF?text=Mouse' },
  { id: 6, name: 'Mouse Gamer Pro', price: 499.00, imageUrl: 'https://placehold.co/600x600/483078/FFFFFF?text=Mouse' },
  { id: 6, name: 'Mouse Gamer Pro', price: 499.00, imageUrl: 'https://placehold.co/600x600/483078/FFFFFF?text=Mouse' },
  { id: 6, name: 'Mouse Gamer Pro', price: 499.00, imageUrl: 'https://placehold.co/600x600/483078/FFFFFF?text=Mouse' },
  { id: 6, name: 'Mouse Gamer Pro', price: 499.00, imageUrl: 'https://placehold.co/600x600/483078/FFFFFF?text=Mouse' },
];
// ------------------------------

export default function StorePage() {
  return (
    <>
      <Head>
        <title>Flashtech - Nossa Loja</title>
      </Head>

      {/* Este 'w-full' faz ele ocupar 100% do "container" do _app.tsx */}
      <div className="w-full space-y-16">

        {/* --- Seção Hero --- */}
        <section className="text-center bg-gray-50 dark:bg-gray-800 p-12 md:p-20 rounded-xl shadow-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-[#301860] dark:text-gray-100">
            Bem-vindo à Flashtech
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Os melhores eletrônicos e gadgets de última geração.
          </p>
          <div className="mt-8">
            <Link
              href="#destaques"
              className="inline-block text-white font-bold py-3 px-8 rounded-lg transition-colors
                         bg-[] hover:bg-[#301860]
                         focus:outline-none focus:ring-2 focus:ring-[#483078] focus:ring-opacity-50"
            >
              Ver Ofertas
            </Link>
          </div>
        </section>

        {/* --- Seção de Categorias --- */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
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
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
            Em Destaque 
          </h2>
          
          {/* A grade pequena com 6 colunas */}
          <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-2 gap-10 ">
            {mockProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </section>

      </div>
    </>
  );
}

// Componente auxiliar de categoria
const CategoryLink = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
  <Link
    href="#"
    className="flex flex-col items-center justify-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md
               text-gray-700 dark:text-gray-200 hover:text-[#483078] dark:hover:text-white
               border border-transparent hover:border-[#483078] 
               transition-all group"
  >
    <div className="text-gray-500 group-hover:text-[#483078] transition-colors">
      {icon}
    </div>
    <span className="mt-3 font-semibold text-center">{name}</span>
  </Link>
);