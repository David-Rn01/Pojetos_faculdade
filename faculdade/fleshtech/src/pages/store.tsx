import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

// --- Dados dos Produtos ---
// Colocamos os dados aqui por enquanto
const products: Product[] = [ // Usamos a interface Product[]
  {
    id: 1,
    name: 'Notebook Ultra X1',
    price: 'R$ 4.599,90',
    description: 'Performance de ponta para trabalho e jogos. Intel i7, 16GB RAM, 512GB SSD.',
    imageUrl: 'https://placehold.co/600x400/301860/white?text=Notebook+Ultra+X1'
  },
  {
    id: 2,
    name: 'Smartphone Flash F2',
    price: 'R$ 2.999,00',
    description: 'Câmera tripla de 108MP e tela AMOLED de 120Hz.',
    imageUrl: 'https://placehold.co/600x400/483078/white?text=Smartphone+Flash+F2'
  },
  {
    id: 3,
    name: 'Fone de Ouvido NoiseFree',
    price: 'R$ 899,90',
    description: 'Cancelamento de ruído ativo e 30 horas de bateria.',
    imageUrl: 'https://placehold.co/600x400/301860/white?text=Fone+NoiseFree'
  },
  {
    id: 4,
    name: 'Smartwatch TechFit',
    price: 'R$ 1.250,00',
    description: 'Monitoramento completo de saúde e GPS integrado.',
    imageUrl: 'https://placehold.co/600x400/483078/white?text=Smartwatch+TechFit'
  },
];

export default function StoreHomePage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-128px)]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-gray-900">Nossos Produtos</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}