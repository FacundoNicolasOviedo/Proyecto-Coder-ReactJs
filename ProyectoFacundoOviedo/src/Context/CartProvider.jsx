import { useState, createContext } from "react";


export const CartContext = createContext({
    cart: [],
});




const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const isInCart = (id) => {
        const itemInCart = cart.find((item) => item.id === id);
        return !!itemInCart;
    };
    const addItem = (product, quantity) => {
        const itemInCart = isInCart(product.id);

        if (itemInCart) {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity,
                    };
                }
                return item;
            });
            setCart(newCart);
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => { 
        return cart.reduce((accumulator, actualProduct) => accumulator + actualProduct.quantity, 0)
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                isInCart,
                totalPrice,
                totalProducts,
            }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
