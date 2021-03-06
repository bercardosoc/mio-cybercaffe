import { SiBuymeacoffee } from "react-icons/si"
import { ContainerCatalogue, ContentCatalogue, EachContent, EachBuy, ContentCart, ContainerCart } from "./styles"
import { useContext } from "react"
import { CatalogueContext} from "../../providers/catalogue"
import { CartContext } from "../../providers/cart"
import Button from "../Button"
import { BsCart4 } from "react-icons/bs"

const ProductList = ({ type }) => {
    
    const { catalogue } = useContext(CatalogueContext)
    const { cart } = useContext(CartContext)

    const frequency = (cart, item) => {
        let count = 0
        cart.forEach((product) => product.name === item.name && count++)
        return count
    }

    return (
        <>
            {
                type === "catalogue" && (
                    <ContainerCatalogue>
                    <h2> <SiBuymeacoffee/> Cafézinhos para viagem </h2>
                    <ContentCatalogue>
                    {
                        catalogue.map((item, index) => (
                                <EachContent key={index} >
                                    <h3>{item.name}</h3>
                                    <img src= {item.img} alt={item.name} />
                                    <p>{item.description}</p>
                                    <span>{item.price.toFixed(2)}R$</span>
                                    <Button type={type} item={item} />
                                </EachContent>
                        ))}
                    </ContentCatalogue>
                    </ContainerCatalogue>)
            }
            {
                type === "cart" && (
                    <ContainerCart>
                    <h2>Carrinho de compras <BsCart4 size={25} /> </h2>
                    <ContentCart>
                    {
                        type === "cart" &&
                        cart.map((item, index) => (

                                <EachBuy key={index}>
                                    <h3>{item.name}</h3>
                                    <img src= {item.img} alt={item.name} />
                                    <p>{item.description}</p>
                                    <span>{item.price.toFixed(2)}R$</span>
                                    <span> Quantidade: {frequency(cart, item)} </span>
                                    <Button type={type} item={item} />
                                </EachBuy>
                        ))
                        }
                    </ContentCart>
                    </ContainerCart>)
            }
            </>
    )
}
export default ProductList