import { useState } from 'react';
import { useCart } from '../components/CartContext'; // Importa nosso hook
import Link from 'next/link';
import Head from 'next/head'; 

// Função para formatar o preço
const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
};

export default function CheckoutPage() {
    
    // Pega os itens e o total do contexto (Erro do '_' corrigido aqui)
    const { cartItems, totalPrice } = useCart(); 
    
    const [activeTab, setActiveTab] = useState('cartao'); // Estado para as abas
    const [showModal, setShowModal] = useState(false); // Estado para o modal de sucesso

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui entraria a lógica real de pagamento
        setShowModal(true);
    };

    return (
        <>
            <Head>
                <title>Pagamento - Flashtech</title>
            </Head>

            <main className="w-full">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    
                    {/* --- COLUNA DA ESQUERDA: FORMULÁRIOS --- */}
                    <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">

                        {/* 1. Informações Pessoais */}
                        <section className="bg-gray-800 rounded-xl shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-white mb-6">Informações Pessoais</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1">Nome Completo</label>
                                    <input type="text" id="nome" 
                                           className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                           placeholder="Seu nome" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
                                    <input type="email" id="email" 
                                           className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                           placeholder="voce@exemplo.com" required />
                                </div>
                                <div>
                                    <label htmlFor="cpf" className="block text-sm font-medium text-gray-300 mb-1">CPF</label>
                                    <input type="text" id="cpf" 
                                           className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                           placeholder="000.000.000-00" required />
                                </div>
                                <div>
                                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-1">Telefone / Celular</label>
                                    <input type="tel" id="telefone" 
                                           className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                           placeholder="(00) 90000-0000" required />
                                </div>
                            </div>
                        </section>

                        {/* 2. Endereço de Entrega */}
                        <section className="bg-gray-800 rounded-xl shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-white mb-6">Endereço de Entrega</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-1">
                                    <label htmlFor="cep" className="block text-sm font-medium text-gray-300 mb-1">CEP</label>
                                    <input type="text" id="cep" 
                                           className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                           placeholder="00000-000" required />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="rua" className="block text-sm font-medium text-gray-300 mb-1">Rua / Avenida</label>
                                    <input type="text" id="rua" 
                                           className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                           placeholder="Nome da sua rua" required />
                                </div>
                                <div>
                                    <label htmlFor="numero" className="block text-sm font-medium text-gray-300 mb-1">Número</label>
                                    <input type="text" id="numero" 
                                           className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                           placeholder="123" required />
                                </div>
                                <div>
                                    <label htmlFor="complemento" className="block text-sm font-medium text-gray-300 mb-1">Complemento</label>
                                    <input type="text" id="complemento" 
                                           className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                           placeholder="Apto, Bloco, etc." />
                                </div>
                                <div>
                                    <label htmlFor="bairro" className="block text-sm font-medium text-gray-300 mb-1">Bairro</label>
                                    <input type="text" id="bairro" 
                                           className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                           required />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="cidade" className="block text-sm font-medium text-gray-300 mb-1">Cidade</label>
                                    <input type="text" id="cidade" 
                                           className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                           required />
                                </div>
                                <div>
                                    <label htmlFor="estado" className="block text-sm font-medium text-gray-300 mb-1">Estado</label>
                                    <input type="text" id="estado" 
                                           className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                           required />
                                </div>
                            </div>
                        </section>

                        {/* 3. Método de Pagamento */}
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-6">Pagamento</h2>
                            <div className="flex">
                                <button type="button" onClick={() => setActiveTab('cartao')} className={`tab-btn ${activeTab === 'cartao' ? 'active' : ''}`}>Cartão</button>
                                <button type="button" onClick={() => setActiveTab('pix')} className={`tab-btn ${activeTab === 'pix' ? 'active' : ''}`}>PIX</button>
                                <button type="button" onClick={() => setActiveTab('boleto')} className={`tab-btn ${activeTab === 'boleto' ? 'active' : ''}`}>Boleto</button>
                            </div>

                            {/* Conteúdo Aba Cartão */}
                            <div id="content-cartao" className={`tab-content ${activeTab === 'cartao' ? 'block' : ''}`}>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="card-number" className="block text-sm font-medium text-gray-300 mb-1">Número do Cartão</label>
                                        <input type="text" id="card-number" 
                                               className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                               placeholder="0000 0000 0000 0000" />
                                    </div>
                                    <div>
                                        <label htmlFor="card-name" className="block text-sm font-medium text-gray-300 mb-1">Nome no Cartão</label>
                                        <input type="text" id="card-name" 
                                               className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                               placeholder="Como está escrito no cartão" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="card-expiry" className="block text-sm font-medium text-gray-300 mb-1">Validade (MM/AA)</label>
                                            <input type="text" id="card-expiry" 
                                                   className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                                   placeholder="MM/AA" />
                                        </div>
                                        <div>
                                            <label htmlFor="card-cvv" className="block text-sm font-medium text-gray-300 mb-1">CVV</label>
                                            <input type="text" id="card-cvv" 
                                                   className="w-full px-4 py-2 bg-gray-700 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                                   placeholder="123" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Conteúdo Aba PIX */}
                            <div id="content-pix" className={`tab-content ${activeTab === 'pix' ? 'block' : ''}`}>
                                <div className="text-center">
                                    <p className="text-lg text-gray-300 mb-4">Clique no botão abaixo para gerar um código PIX.</p>
                                    <p className="text-sm text-gray-400 mb-6">O código QR e o "Copia e Cola" serão exibidos após a confirmação do pedido.</p>
                                    <button type="button" className="w-full sm:w-auto px-8 py-3 bg-[#3859A3] text-white rounded-lg font-semibold hover:bg-blue-700">
                                        Gerar PIX
                                    </button>
                                </div>
                            </div>
                            {/* Conteúdo Aba Boleto */}
                            <div id="content-boleto" className={`tab-content ${activeTab === 'boleto' ? 'block' : ''}`}>
                                <div className="text-center">
                                    <p className="text-lg text-gray-300 mb-4">O boleto bancário será gerado após a confirmação do pedido.</p>
                                    <p className="text-sm text-gray-400 mb-6">Você poderá visualizar ou imprimir o boleto na próxima tela.</p>
                                    <button type="button" className="w-full sm:w-auto px-8 py-3 bg-[#3859A3] text-white rounded-lg font-semibold hover:bg-blue-700">
                                        Gerar Boleto
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Botão de Finalizar Compra */}
                        <button
                            type="submit"
                            className="w-full mt-8 bg-[#3859A3] text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            Finalizar Compra
                        </button>
                    </form>

                    {/* --- COLUNA DA DIREITA: RESUMO DO PEDIDO --- */}
                    <div className="lg:col-span-1 mt-10 lg:mt-0">
                        <div className="bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
                            <h2 className="text-2xl font-semibold text-white mb-6">Resumo do Pedido</h2>
                            
                            <div className="space-y-6">
                                {cartItems.length === 0 ? (
                                    <p className="text-gray-400">Seu carrinho está vazio.</p>
                                ) : (
                                    cartItems.map(item => (
                                        <div key={item.id} className="flex items-center space-x-4 pb-6 border-b border-gray-700 last:border-b-0">
                                            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                                            <div className="flex-grow">
                                                <h4 className="font-semibold text-white">{item.name}</h4>
                                                {/* Atualizado para mostrar a COR */}
                                                <p className="text-sm text-gray-400">Cor: {item.color}, Qtd: {item.quantity}</p>
                                                <p className="font-bold text-white mt-1">{formatCurrency(item.price * item.quantity)}</p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Cálculos */}
                            {cartItems.length > 0 && (
                                <div className="space-y-4 mt-6">
                                    <div className="flex justify-between text-gray-300">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-white">{formatCurrency(totalPrice)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span>Frete</span>
                                        <span className="font-medium text-green-500">Grátis</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-gray-700">
                                        <span>Total</span>
                                        <span>{formatCurrency(totalPrice)}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Modal de Sucesso */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-600">
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-white mt-6">Pagamento Concluído!</h3>
                        <p className="text-gray-300 mt-2">Seu pedido foi processado com sucesso. Obrigado por comprar na Flashtech!</p>
                        <Link href="/" legacyBehavior>
                            <a className="w-full inline-block mt-6 bg-[#3859A3] text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                Voltar para a Home
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}