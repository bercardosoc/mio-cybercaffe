import { createContext, useState} from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (item) => {
        const removed = cart.find((product) => product.id === item.id)
        const removedIndex = cart.indexOf(removed)
        cart.splice(removedIndex, 1)
        setCart([...cart])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }} >
            {children}
        </CartContext.Provider>
    )
}