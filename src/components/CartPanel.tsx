import Link from 'next/link';
import { useCart } from './CartContext'; // Importa nosso hook
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'; // Para a animação de slide

// Função para formatar o preço
const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
};

export default function CartPanel() {
    const { isCartOpen, toggleCart, cartItems, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

    return (
        <Transition.Root show={isCartOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={toggleCart}>
                {/* Overlay (fundo escuro) */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-300"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-300"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    {/* Este é o conteúdo do `detalhe_produto.html`, mas em React */}
                                    <div className="flex h-full flex-col overflow-y-scroll bg-gray-800 shadow-xl">
                                        {/* Cabeçalho */}
                                        <div className="flex justify-between items-center p-6 border-b border-gray-700">
                                            <Dialog.Title className="text-2xl font-bold text-white">Meu Carrinho</Dialog.Title>
                                            <button
                                                type="button"
                                                className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
                                                onClick={toggleCart}
                                            >
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Lista de Itens */}
                                        <div className="grow p-6 overflow-y-auto">
                                            {cartItems.length === 0 ? (
                                                <div className="text-center text-gray-400 mt-10">
                                                    Seu carrinho está vazio.
                                                </div>
                                            ) : (
                                                <ul role="list" className="-my-6 divide-y divide-gray-700">
                                                    {cartItems.map((item) => (
                                                        <li key={item.id} className="flex py-6">
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-700">
                                                                <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                                                            </div>
                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-white">
                                                                        <h3>{item.name}</h3>
                                                                        <p className="ml-4">{formatCurrency(item.price)}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-400">Tamanho: {item.size}</p>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <div className="flex items-center">
                                                                        <label htmlFor={`quantity-${item.id}`} className="sr-only">Quantidade</label>
                                                                        <input
                                                                            type="number"
                                                                            id={`quantity-${item.id}`}
                                                                            min="1"
                                                                            value={item.quantity}
                                                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                                                                            className="w-16 text-center bg-gray-700 border-gray-600 text-white rounded-md"
                                                                        />
                                                                    </div>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removeFromCart(item.id)}
                                                                        className="font-medium text-red-500 hover:text-red-400"
                                                                    >
                                                                        Remover
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>

                                        {/* Rodapé do Carrinho */}
                                        {cartItems.length > 0 && (
                                            <div className="border-t border-gray-700 p-6 bg-gray-900">
                                                <div className="flex justify-between text-lg font-semibold text-gray-300">
                                                    <p>Subtotal ({totalItems} itens)</p>
                                                    <p className="font-bold text-white">{formatCurrency(totalPrice)}</p>
                                                </div>
                                                <div className="flex justify-between items-center mt-2 mb-6">
                                                    <span className="text-lg font-semibold text-gray-300">Frete:</span>
                                                    <span className="text-lg font-bold text-green-500">Grátis</span>
                                                </div>
                                                <div className="mt-6">
                                                    <Link href="/checkout" legacyBehavior>
                                                        <a
                                                            onClick={toggleCart} // Fecha o painel ao navegar
                                                            className="w-full flex items-center justify-center rounded-lg border border-transparent bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-green-700 transition duration-300"
                                                        >
                                                            Ir para o Pagamento
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}