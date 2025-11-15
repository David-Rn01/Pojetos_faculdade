import { Product } from '@/types'; // Importa nossa interface

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.onerror = null; 
          e.currentTarget.src = 'https://placehold.co/600x400/cccccc/333333?text=Imagem+Indisponível';
        }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-base mb-4">{product.description}</p>
        <div className="text-3xl font-bold text-[#301860] mb-4">{product.price}</div>
        <button className="w-full bg-[#301860] hover:bg-[#483078] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}