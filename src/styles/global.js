import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root {
    --azul: #afc5ff; 
    --amarelo: #fcff82; 
    --laranja: #ff9c6d; 
    --vermelho: #fd5959; 
    --branco: #ffffff;
}
body {
    background: var(--amarelo);
}
button {
    cursor: pointer;
}
h1 {
    font-family: "Title";
    text-align: center;
}
h2, h3, h4, h5, h6 {
    font-family: "Latte";
}
p {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}
`