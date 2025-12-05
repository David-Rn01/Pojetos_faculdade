import { createContext, useContext, useState, ReactNode, useMemo } from 'react';

interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    size: string;
    color: string;
    quantity: number;
}

interface ICartContext {
    cartItems: CartItem[];
    isCartOpen: boolean;
    addToCart: (item: Omit<CartItem, 'quantity' | 'id' | 'size'>, quantity: number, size: string, id_base: string) => void;
    removeFromCart: (itemId: string) => void;
    updateQuantity: (itemId: string, newQuantity: number) => void;
    toggleCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<ICartContext | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (itemToAdd: Omit<CartItem, 'quantity' | 'id' | 'size'>, quantity: number, size: string, id_base: string) => {
        const cartItemId = `${id_base}-${size}`;
        const existingItem = cartItems.find(item => item.id === cartItemId);

        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === cartItemId
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            ));
        } else {
            const newItem: CartItem = {
                id: cartItemId,
                name: itemToAdd.name,
                price: itemToAdd.price,
                image: itemToAdd.image,
                size: size,
                color: itemToAdd.color,
                quantity: quantity
            };
            setCartItems([...cartItems, newItem]);
        }
        setIsCartOpen(true);
    };

    const removeFromCart = (itemId: string) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
        } else {
            setCartItems(cartItems.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const totalItems = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    const totalPrice = useMemo(() => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cartItems]);

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

export function useCart() {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error('useCart deve ser usado dentro de um CartProvider');
    }
    return context;
}