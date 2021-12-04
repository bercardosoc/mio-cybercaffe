import { createContext, useState} from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const [counter, setCounter] = useState(1)

    const addToCart = (item) => {
        if (counter <= 1) {
            setCounter(counter + 1)
            item.quantity = counter
            setCart([...cart, item])
        } else {
            setCounter(counter + 1)
            item.quantity = counter
        }
        console.log(cart)
    }

    const removeFromCart = (item) => {
        setCounter(counter - 1)
        item.quantity = counter
        if (counter < 1) {
            const newCart = cart.filter((itemOnCart) => itemOnCart.id !== item.id)
            setCart(newCart)
        }
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart}} >
            {children}
        </CartContext.Provider>
    )
}