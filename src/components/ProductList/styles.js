import styled from "styled-components";

export const ContainerCatalogue = styled.div`
    h2 {
        font-size: 3rem;
        font-family: "Latte-outro";
    }
    h3 {
        font-size: 2rem;
    }
    @media(min-width:769px) {
        h1 {
            font-size: 5rem;
        }
    }
`
export const ContentCatalogue = styled.div`    
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    width: 100vw;
    img {
        margin: 0 auto;
        width: 200px;
    }
    @media (min-width: 769px) {
        width: 65vw;
    }
`
export const EachContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 400px;
    justify-content: space-around;
    margin: 1rem auto;
    background-color: rgba(255, 156, 109, 0.3);
    @media (min-width: 769px) {
        width: 250px;
        height: 450px;
        margin: 1.5rem;
    }
`
export const ContainerCart = styled.div`
    text-align: center;
    margin: 2rem auto;
    h2 {
        font-size: 2.5rem;
    }
    h3 {
        font-size: 2rem;
    }
    @media (min-width: 769px) {
        h2 {
            margin: 0 auto;
        }
        width: 25vw;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
`
export const ContentCart = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    width: 100vw;
    img {
        margin: 0 auto;
        width: 200px;
    }
    @media (min-width: 769px) {
        width: 30vw;
    }
`
export const EachBuy = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 400px;
    justify-content: space-around;
    margin: 1rem auto;
    background-color: rgba(255, 156, 109, 0.3);
    @media (min-width: 769px) {
        width: 250px;
        height: 450px;
    }
`