import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../components/CartContext'; // Importa nosso hook
import Head from 'next/head'; // Bom para o SEO
// 1. IMPORTE O "BANCO DE DADOS"
import { mockProducts } from '../../data/products'; 

export default function ProductDetailPage() {

    let url: string = '';

    const router = useRouter();
    const { id } = router.query; // Pega o 'id' da URL
    const { addToCart } = useCart(); // Pega a função do nosso contexto

    // 2. ENCONTRE O PRODUTO CORRETO
    const product = mockProducts.find(p => p.id === String(id));

    // 3. ESTADOS LOCAIS
    // Iniciamos vazio e atualizamos via useEffect para evitar erros de hidratação
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    
    // Quando o produto carregar, define a cor e imagem padrão
    useEffect(() => {
        if (product) {
            setMainImage(product.images[0]);
            // Define a primeira cor como padrão se existir
            if (product.colors && product.colors.length > 0) {
                setSelectedColor(product.colors[0]);
            }
        }
    }, [product]);

    // 4. LÓGICA DE ADICIONAR AO CARRINHO
    const handleAddToCart = () => {
        if (!product) return; 

        const imageForCart = product.images[0]; // Usa a primeira imagem para o carrinho

        const itemToAdd = {
            name: product.name,
            price: product.price,
            image: imageForCart,
            color: selectedColor
        };
        
        // Envia a COR selecionada
        addToCart(itemToAdd, quantity, selectedColor, product.id);

        // Mostra notificação
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000);
    };

    // 5. RENDERIZAÇÃO SE O PRODUTO NÃO EXISTIR
    if (!router.isReady) return null;
    if (!product) {
        return (
            <div className="text-center text-white text-xl p-10 min-h-[50vh] flex items-center justify-center">
                Produto não encontrado.
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{product.name} - Flashtech</title>
            </Head>

            <main className="w-full">
                <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="md:grid md:grid-cols-2">
                        
                        {/* --- Coluna da Esquerda: Galeria --- */}
                        <div className="p-6">
                            <div className="aspect-square w-full relative bg-gray-900 rounded-lg overflow-hidden mb-4">
                                {mainImage && (
                                    <img
                                        id="main-product-image"
                                        src={mainImage}
                                        alt={product.name}
                                        className="w-full h-full object-contain"
                                    />
                                )}
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((imgSrc: SetStateAction<string> | Blob | undefined, index: Key | null | undefined) => (
                                    <div 
                                        key={index}
                                        className={`cursor-pointer rounded-md border-2 aspect-square overflow-hidden bg-gray-900 ${mainImage === imgSrc ? 'border-blue-500' : 'border-transparent'} hover:border-blue-500`}
                                        onClick={() => {
                                            if (imgSrc instanceof Blob) {
                                                url = URL.createObjectURL(imgSrc);
                                                setMainImage(url);
                                            } else if (typeof imgSrc === 'string') {
                                                setMainImage(imgSrc);
                                            }
                                        }
                                    }
                                    >
                                        <img
                                            src={url}
                                            alt={`miniatura ${index}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* --- Coluna da Direita: Informações --- */}
                        <div className="p-8">
                            <h1 className="text-3xl font-bold tracking-tight text-white">{product.name}</h1>
                            <p className="text-gray-400 text-sm mt-1">Ref: {product.id}</p>

                            <div className="mt-4">
                                <span className="text-4xl font-extrabold text-white">
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                                </span>
                                <span className="text-base text-gray-400 ml-2">em até 10x sem juros</span>
                            </div>

                            <div className="mt-6 flex items-center text-green-500 font-semibold">
                                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                <span>Frete Grátis para todo o Brasil!</span>
                            </div>

                            <div className="mt-6">
                                <h2 className="text-lg font-semibold text-gray-200">Sobre este item:</h2>
                                <p className="mt-2 text-gray-300 leading-relaxed">
                                    {product.description}
                                </p>
                                {product.details && (
                                    <ul className="list-disc list-inside text-gray-300 mt-4 space-y-1">
                                        {product.details.map((detail: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => <li key={i}>{detail}</li>)}
                                    </ul>
                                )}
                            </div>

                            {/* --- SELEÇÃO DE COR --- */}
                            <div className="mt-6">
                                <label htmlFor="color" className="block text-sm font-medium text-gray-300">Cor:</label>
                                <select
                                    id="color"
                                    value={selectedColor}
                                    onChange={(e) => setSelectedColor(e.target.value)}
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                >
                                    {product.colors && product.colors.map((color: any, idx: Key | null | undefined) => (
                                        <option key={idx} value={String(color)}>{String(color)}</option>
                                    ))}
                                </select>
                            </div>

                            {/* --- QUANTIDADE --- */}
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
                    className={`fixed bottom-10 right-10 bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 z-50 ${showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                        }`}
                >
                    Item adicionado ao carrinho!
                </div>
            </main>
        </>
    );
}