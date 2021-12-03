import { useSelector } from "react-redux";
import Product from "../Product"
import { Container, Content, EachBuy } from "./styles";
import { BsCart4 } from "react-icons/bs"

const Cart = () => {
    const cart = useSelector((store) => store.cart)

    return (
        <ContainerCart>
            <h2>Carrinho de compras <BsCart4 size={25} /> </h2>
            <ContentCart>
            {
                cart.map((item) => (
                    <>
                    <EachBuy>
                        <Product key={item.id} product={item} isRemovable />
                    </EachBuy>
                    </>
                ))
            }
            </ContentCart>
        </ContainerCart>
    )
}
export default Cart