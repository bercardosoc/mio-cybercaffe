import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../store/modules/cart/actions"
import { Button } from "./styles"
const Product = ({ product, isRemovable = false}) => {

    const { name, img, description, price, id } = product

    const dispatch = useDispatch()

    return (
        <>
            <h3>{name}</h3>
            <img src= {img} alt={name} />
            <p>{description}</p>
            <span>{price.toFixed(2)}R$</span>
            {
                isRemovable ? (
                    <Button onClick={() => dispatch(removeFromCart(id))} >
                        Remover
                    </Button>
                ) : (
                    <Button onClick={() => dispatch(addToCart(product))} >
                        Comprar
                    </Button>
                )
            }
        </>
    )
}
export default Product