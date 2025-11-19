import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../components/CartContext'; // Importa nosso hook
import Head from 'next/head'; // Bom para o SEO

// --- DADOS FALSOS (MOCK) ---
// No seu projeto real, você buscaria isso de um banco de dados
// usando o `id` da URL.
const mockProduct = {
    id_base: 'PROD-001', // Este é o ID base do produto
    name: 'Samsung Galaxy S25 Ultra 5G 256GB Galaxy AI Titânio Azul 6,9" 12GB RAM Câm. Quádrupla 200+50+10+50MP Bateria 5000mAh Dual Chip',
    price: 7649,
    images: [
        'https://m.magazineluiza.com.br/a-static/420x420/samsung-galaxy-s25-ultra-5g-256gb-galaxy-ai-titanio-azul-69-12gb-ram-cam-quadrupla-200-50-10-50mp-bateria-5000mah-dual-chip/magazineluiza/238920600/ff9276f61022e47dcf89b5f0031cec0b.jpg',
        'https://a-static.mlcdn.com.br/420x420/samsung-galaxy-s25-ultra-5g-256gb-galaxy-ai-titanio-azul-69-12gb-ram-cam-quadrupla-200-50-10-50mp-bateria-5000mah-dual-chip/magazineluiza/238920600/22d83f5e06001e60e816e60a6f55f1aa.jpg',
        'https://a-static.mlcdn.com.br/420x420/samsung-galaxy-s25-ultra-5g-256gb-galaxy-ai-titanio-azul-69-12gb-ram-cam-quadrupla-200-50-10-50mp-bateria-5000mah-dual-chip/magazineluiza/238920600/26ee0491e7bc89b3bdf7efc38b4547e5.jpg',
        'https://a-static.mlcdn.com.br/420x420/samsung-galaxy-s25-ultra-5g-256gb-galaxy-ai-titanio-azul-69-12gb-ram-cam-quadrupla-200-50-10-50mp-bateria-5000mah-dual-chip/magazineluiza/238920600/757c7054b3f58287b243bcef9e615ea2.jpg',
    ],
    description: 'O Galaxy S25 Ultra 5G Titânio Azul é o smartphone da Samsung com um design elegante e inovador. Ele possui tela Dynamic Amoled 2X de 6,9" com resolução QHD+ (3120 x 1440), que oferece imagens nítidas e vibrantes. A câmera traseira quádrupla de 200MP (Wide) + 50MP (Ultra Wide) 10MP (Tele) + 50MP (Tele), permite tirar fotos e vídeos de alta qualidade, com Zoom Digital até 100x e Óptico 5x. A câmera frontal de 12MP é ideal para selfies e videochamadas. Ele é equipado com 12GB de memória RAM, 256GB de armazenamento interno e processador Qualcomm Snapdragon 8 Elite for Galaxy (3nm) de 3.3GHz. Também conta com bateria de 5000mAh, que oferece autonomia para o dia todo. Vem com a nova geração do Galaxy AI, que oferece uma experiência personalizada e inteligente. O Cadeado Galaxy também está presente, garantindo mais segurança para o seu smartphone. É um smartphone completo, com um design elegante, uma tela incrível e um conjunto de câmeras de alta qualidade. Ele é ideal para quem busca um smartphone topo de linha. Acompanha 1 Caneta S Pen. Produto não acompanha fone de ouvido.',
    details: [
        '256GB de armazenamento interno',
        '12GB de memória RAM',
        '6,9" de tela',
        'Câmera traseira quádrupla de 200MP + 50MP + 10MP + 50MP',
        'Câmera frontal de 12MP',
        'Bateria de 5000mAh'
    ]
};
// --- FIM DOS DADOS FALSOS ---

// ESTA É A LINHA IMPORTANTE
export default function ProductDetailPage() {
    const router = useRouter();
    
    // --- LINHA CORRIGIDA (removido o '_') ---
    const { id } = router.query; // Pega o 'id' da URL (ex: 'PROD-001')
    
    const { addToCart } = useCart(); // Pega a função do nosso contexto

    // Estado local da página (não do carrinho)
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(mockProduct.images[0]);

    // Simula a notificação
    const [showNotification, setShowNotification] = useState(false);

    const handleAddToCart = () => {
        // Pega a imagem menor para o carrinho
        const imageForCart = mockProduct.images[0].replace('600x600', '80x80');

        // Este é o item base, sem o ID final do carrinho
        const itemToAdd = {
            name: mockProduct.name,
            price: mockProduct.price,
            image: imageForCart,
        };
        
        // Nós passamos o item, a quantidade, o tamanho e o ID base
        addToCart(itemToAdd, quantity, selectedSize, mockProduct.id_base);

        // Mostra notificação
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000);
    };

    return (
        <>
            <Head>
                {/* O 'id' da URL é o ID do produto */}
                <title>{mockProduct.name} (ID: {id}) - Flashtech</title>
            </Head>

            <main className="w-full">
                <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="md:grid md:grid-cols-2">
                        {/* Coluna da Esquerda: Galeria */}
                        <div className="p-6">
                            <img
                                id="main-product-image"
                                src={mainImage}
                                alt="Imagem principal do produto"
                                className="w-full h-auto object-cover rounded-lg shadow-md aspect-square"
                            />
                            <div className="grid grid-cols-4 gap-4 mt-4">
                                {mockProduct.images.map((imgSrc, index) => (
                                    <img
                                        key={index}
                                        src={imgSrc.replace('600x600', '150x150')}
                                        alt={`miniatura ${index + 1}`}
                                        className={`cursor-pointer rounded-md border-2 ${mainImage === imgSrc ? 'border-blue-500' : 'border-transparent'
                                            } hover:border-blue-500`}
                                        onClick={() => setMainImage(imgSrc)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Coluna da Direita: Informações */}
                        <div className="p-8">
                            <h1 className="text-3xl font-bold tracking-tight text-white">{mockProduct.name}</h1>
                            <p className="text-gray-400 text-sm mt-1">Product ID: {id}</p>

                            <div className="mt-4">
                                <span className="text-4xl font-extrabold text-white">R$ {mockProduct.price.toFixed(2).replace('.', ',')}</span>
                                <span className="text-base text-gray-400 ml-2">em até 10x sem juros</span>
                            </div>

                            <div className="mt-6 flex items-center text-green-500 font-semibold">
                                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                <span>Frete Grátis para todo o Brasil!</span>
                            </div>

                            <div className="mt-6">
                                <h2 className="text-lg font-semibold text-gray-200">Descrição e ficha técnica:</h2>
                                <p className="mt-2 text-gray-300 leading-relaxed">
                                    {mockProduct.description}
                                </p>
                                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-1">
                                    {mockProduct.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                </ul>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="size" className="block text-sm font-medium text-gray-300">Tamanho:</label>
                                <select
                                    id="size"
                                    value={selectedSize}
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                >
                                    <option value="P">Pequeno (P)</option>
                                    <option value="M">Médio (M)</option>
                                    <option value="G">Grande (G)</option>
                                </select>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-300">Quantidade:</label>
                                <div className="flex items-center mt-1">
                                    <button
                                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-l-md hover:bg-gray-600"
                                    >-</button>
                                    <input
                                        id="quantity"
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
                                        min="1"
                                        className="w-16 text-center bg-gray-700 border-t border-b border-gray-600 text-white focus:outline-none"
                                        readOnly
                                    />
                                    <button
                                        onClick={() => setQuantity(q => q + 1)}
                                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-r-md hover:bg-gray-600"
                                    >+</button>
                                </div>
                            </div>

                            <div className="mt-8">
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                >
                                    Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notificação */}
                <div
                    className={`fixed bottom-10 right-10 bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ${showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    Item adicionado ao carrinho!
                </div>
            </main>
        </>
    );
}