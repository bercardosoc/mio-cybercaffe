import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (item) => {
        const newCart = cart.filter((itemOnCart) => itemOnCart.id !== item.id)
        setCart(newCart)
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart}} >
            {children}
        </CartContext.Provider>
    )
}