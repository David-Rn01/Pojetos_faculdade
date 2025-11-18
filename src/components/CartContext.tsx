import { createContext, useContext, useState, ReactNode, useMemo } from 'react';

// Define o formato de um item no carrinho
interface CartItem {
    id: string; // ID único (ex: 'PROD-001-M')
    name: string;
    price: number;
    image: string;
    size: string;
    color: string;
    quantity: number;
}

// Define o que o contexto vai fornecer
interface ICartContext {
    cartItems: CartItem[];
    isCartOpen: boolean;
    // --- MUDANÇA AQUI ---
    // O 'item' agora não tem 'size' (já que 'size' vem como outro argumento)
    addToCart: (item: Omit<CartItem, 'quantity' | 'id' | 'size'>, quantity: number, size: string, id_base: string) => void;
    removeFromCart: (itemId: string) => void;
    updateQuantity: (itemId: string, newQuantity: number) => void;
    toggleCart: () => void;
    totalItems: number;
    totalPrice: number;
}

// Cria o contexto
const CartContext = createContext<ICartContext | null>(null);

// Define o Provedor (o componente que vai "segurar" o estado)
export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Função para adicionar ao carrinho
    // --- MUDANÇA AQUI --- (na tipagem de 'itemToAdd')
    const addToCart = (itemToAdd: Omit<CartItem, 'quantity' | 'id' | 'size'>, quantity: number, size: string, id_base: string) => {
        // Cria um ID único para o item no carrinho (baseado no ID do produto e no tamanho)
        const cartItemId = `${id_base}-${size}`;
        const existingItem = cartItems.find(item => item.id === cartItemId);

        if (existingItem) {
            // Se já existe, atualiza a quantidade
            setCartItems(cartItems.map(item =>
                item.id === cartItemId
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            ));
        } else {
            // Se não existe, adiciona novo item
            const newItem: CartItem = {
                id: cartItemId,
                name: itemToAdd.name,
                price: itemToAdd.price,
                image: itemToAdd.image,
                size: size, // Pega o 'size' do argumento
                color: itemToAdd.color,
                quantity: quantity
            };
            setCartItems([...cartItems, newItem]);
        }
        setIsCartOpen(true); // Abre o carrinho ao adicionar
    };

    // Função para remover do carrinho
    const removeFromCart = (itemId: string) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    // Função para atualizar quantidade
    const updateQuantity = (itemId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
        } else {
            setCartItems(cartItems.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    // Função para abrir/fechar o painel
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    // Calcula o total de itens (ex: 5)
    const totalItems = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    // Calcula o preço total
    const totalPrice = useMemo(() => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cartItems]);

    // O "value" é o que será disponibilizado para os componentes
    const value = {
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        totalItems,
        totalPrice
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Hook customizado (para facilitar o uso)
export function useCart() {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error('useCart deve ser usado dentro de um CartProvider');
    }
    return context;
}