import Link from 'next/link';

// Define as propriedades (props) que o card espera receber
type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
};

// Formata o preço para o padrão BRL (R$ 1.234,56)
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export default function ProductCard({ name, price, imageUrl }: ProductCardProps) {
  return (
    <Link 
      href="#"
      className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
                 border border-gray-200 dark:border-gray-700
                 transition-all duration-300
                 hover:shadow-xl hover:scale-[1.03]"
    >
      {/* Imagem do Produto (Menor) */}
      <div className="relative w-full h-48"> 
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x600/CCCCCC/FFFFFF?text=Erro')}
        />
      </div>

      {/* Conteúdo do Card (Padding menor) */}
      <div className="p-4 flex flex-col flex-grow">
        
        {/* Nome do Produto (Fonte menor e altura fixa menor) */}
        <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 h-12" title={name}>
          {name}
        </h3>
        
        {/* Preço (Fonte menor) */}
        <p className="text-xl font-semibold text-[#ffffff] my-8">
          {formatPrice(price)}
        </p>

        {/* Botão de Adicionar ao Carrinho (Fonte menor) */}
        <button
          className="w-full mt-auto text-white font-bold py-1.5 px-3 rounded-lg 
                     text-sm
                     transition-colors duration-300
                     bg-[#301860] hover:bg-[#483078]
                     focus:outline-none focus:ring-2 focus:ring-[#301860] focus:ring-opacity-50"
          
          onClick={(e) => {
            e.preventDefault(); 
            console.log(`Adicionado ao carrinho: ${name}`);
          }}
        >
          Adicionar
        </button>
      </div>
    </Link>
  );
}