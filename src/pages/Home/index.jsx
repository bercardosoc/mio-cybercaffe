import ProductList from "../../components/ProductList"
import { CartProvider } from "../../providers/cart"
import { CatalogueProvider } from "../../providers/catalogue"
import {Container, Background} from "./styles"

const Home = () => {

    return (
        <Background>
        <h1>Ber & Lu</h1>
        <Container>
            <CatalogueProvider>
                <CartProvider>
                <ProductList type="catalogue" />
                <ProductList type="cart" />
                </CartProvider>
            </CatalogueProvider>
        </Container>
        </Background>
    )
}
export default Home