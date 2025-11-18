import Link from 'next/link';
import Image from 'next/image';

// 1. Defina a "forma" dos dados do seu produto
type Product = {
  id: string;
  name: string;
  price: number;
  image: string; // URL da imagem
  category: string; // ex: "Periféricos", "Monitores"
};

// 2. Defina as props que o componente ProductCard espera receber
type ProductCardProps = {
  product: Product;
};

// 3. O Componente
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  
  // Função para formatar o preço para R$
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    // O Link envolve todo o card e aponta para a URL dinâmica
    <Link href={`/product/${product.id}`} legacyBehavior>
      
      {/* O <a> é o card em si. 
        Adicionamos 'group' para o efeito de zoom na imagem 
      */}
      <a className="block group bg-gray-800 rounded-lg shadow-lg overflow-hidden 
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:ring-2 hover:ring-blue-500">
        
        {/* Seção da Imagem */}
        <div className="relative w-full aspect-square overflow-hidden"> 
          <Image
            src={product.image}
            alt={product.name}
            layout="fill" // Preenche o espaço do 'div'
            objectFit="cover" // Garante que a imagem cubra o espaço
            // Efeito de zoom na imagem quando o mouse está sobre o 'group' (o card)
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Seção de Conteúdo */}
        <div className="p-4">
          <span className="text-sm text-blue-400 font-medium">{product.category}</span>
          <h3 className="text-lg font-semibold text-white mt-1 truncate" title={product.name}>
            {product.name}
          </h3>
          <p className="text-2xl font-bold text-white mt-2">
            {formatCurrency(product.price)}
          </p>
        </div>
        
      </a>
    </Link>
  );
};

export default ProductCard;