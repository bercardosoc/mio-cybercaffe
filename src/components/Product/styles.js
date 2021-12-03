import styled from "styled-components"

export const Button = styled.button`
    width: 50%;
    height: 1.5rem;
    margin: 0 auto;
    text-transform: uppercase;
    background-color: var(--vermelho);
    color: var(--branco);
    border-radius: 8px;
    border: none;

    &:hover {
        background-color: var(--laranja);
        color: var(--azul);
        transition: 0.5s;
    }
`