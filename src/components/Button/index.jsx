import { Botao } from "./styles"
import { useContext } from "react"
import { CartContext } from "../../providers/cart"

const Button = ({ type, item }) => {

    const { addToCart, removeFromCart } = useContext(CartContext)

    const text = type === "catalogue" ? "Comprar" : "Remover"
    
    const handleClick = () => {
        if (type === "cart") {
            removeFromCart(item)
        } else {
            addToCart(item)
        }
    }
    
    return (
        <Botao onClick={handleClick} >
            {text}
        </Botao>
    )
}
export default Button