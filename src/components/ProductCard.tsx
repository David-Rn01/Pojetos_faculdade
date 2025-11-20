import Link from 'next/link';
import Image from 'next/image';
import { useCart } from './CartContext'; 
import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react'; // Ícones para o botão

// Definição do tipo do produto
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); 
  const [isAdded, setIsAdded] = useState(false);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita abrir a página do produto ao clicar no botão
    e.stopPropagation();

    // Usa a primeira cor como padrão para a adição rápida
    const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0] : 'Padrão';

    const itemToAdd = {
        name: product.name,
        price: product.price,
        image: product.image,
        color: defaultColor,
    };

    addToCart(itemToAdd, 1, defaultColor, product.id);

    // Feedback visual de sucesso
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    // CONTAINER DO CARD
    // group: permite controlar estilos dos filhos ao passar o mouse no pai
    // hover:shadow-blue-500/20: cria o efeito de "glow" azul
    <div className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 flex flex-col h-full">
      
      {/* Link para a página de detalhes */}
      <Link href={`/product/${product.id}`} legacyBehavior>
        <a className="block grow relative">
          
          {/* SEÇÃO DA IMAGEM */}
          <div className="relative w-full aspect-4/5 sm:aspect-square overflow-hidden bg-gray-900"> 
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              // A imagem faz um zoom suave (scale-110) quando passa o mouse no card (group-hover)
              className="transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Badge da Categoria (Etiqueta flutuante) */}
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 text-xs font-bold text-white bg-black/60 backdrop-blur-md rounded-full uppercase tracking-wide border border-white/10">
                {product.category}
              </span>
            </div>
          </div>

          {/* SEÇÃO DE INFORMAÇÕES */}
          <div className="p-5 flex flex-col h-full justify-between">
            <div>
              {/* Título do Produto */}
              <h3 className="text-lg font-bold text-white leading-snug group-hover:text-blue-400 transition-colors line-clamp-2" title={product.name}>
                {product.name}
              </h3>
              
              {/* Preço */}
              <div className="mt-2 flex items-baseline gap-2">
                <p className="text-2xl font-extrabold text-white">
                  {formatCurrency(product.price)}
                </p>
                <span className="text-xs text-gray-400">à vista</span>
              </div>
              
              {/* Indicador de Estoque */}
              <p className="text-xs text-green-400 mt-1 font-medium flex items-center">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                 Em estoque
              </p>
            </div>
          </div>
        </a>
      </Link>

      {/* BOTÃO DE AÇÃO (Rodapé do card) */}
      <div className="p-5 pt-0 mt-auto">
        <button
          onClick={handleQuickAdd}
          className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 ${
            isAdded 
              ? 'bg-green-600 text-white shadow-lg shadow-green-900/20' // Estilo quando adicionado
              : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20 group-hover:shadow-blue-600/40' // Estilo normal
          }`}
        >
          {isAdded ? (
            <>
              <Check size={18} />
              Adicionado
            </>
          ) : (
            <>
              <ShoppingCart size={18} />
              Adicionar
            </>
          )}
        </button>
      </div>

    </div>
  );
};

export default ProductCard;