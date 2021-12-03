import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
        font-size: 5rem;
        margin: 1rem;
    }
`

export const Container = styled.div`
    @media(min-width: 769px) {
        display:flex;
        width: 90vw;
    }
    
`