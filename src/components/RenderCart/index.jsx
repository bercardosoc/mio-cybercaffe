import { EachBuy } from "../ProductList/styles"
import { useContext } from "react"
import { CartContext } from "../../providers/cart"
import Button from "../Button"

const RenderCart = ({ type }) => {
    
    const { cart } = useContext(CartContext)

    const frequency = (cart, item) => {
        let count = 0
        cart.forEach((product) => product.name === item.name && count++)
        return count
    }
    
    return (
        <>
        {console.log(cart)}
              { type === "cart" &&
                  cart.map((item, index) => (

                                <EachBuy key={index}>
                                    <h3>{item.name}</h3>
                                    <img src= {item.img} alt={item.name} />
                                    <p>{item.description}</p>
                                    <span>{item.price.toFixed(2)}R$</span>
                                    <span> Quantidade: {frequency(cart, item)} </span>
                                    <Button type={type} item={item} />
                                </EachBuy>
                        ))}
        </>
    )
}
export default RenderCart