import { createContext, useState } from "react"
import affogato from "../assets/affogato.png"
import black from "../assets/black.png"
import cappuccino from "../assets/cappuccino.png"
import dalgona from "../assets/dalgona.png" 
import doppio from "../assets/doppio.png"
import expresso from "../assets/expresso.png"
import galao from "../assets/galao.png"
import irish from "../assets/irish.png"
import latte from "../assets/latte.png"
import mocha from "../assets/mocha.png"

export const CatalogueContext = createContext([])

export const CatalogueProvider = ({ children }) => {
    const [catalogue, setCatalogue] = useState([
        {id: 1, name: "Affogato", description: "Expresso com sorvete.", price: 10, img: affogato,},
        {id: 2, name: "Café preto", description: "Café puro.", price: 10, img: black,},
        {id: 3, name: "Capuccino", description: "Expresso com leite e chantilly.", price: 10, img: cappuccino,},
        {id: 4, name: "Dalgona", description: "Café solúvel cremoso.", price: 10, img: dalgona,},
        {id: 5, name: "Doppio", description: "Expresso duplo.", price: 10, img: doppio,},
        {id: 6, name: "Expresso", description: "Expresso simples.", price: 10, img: expresso,},
        {id: 7, name: "Galão", description: "Café português expresso com leite espumoso.", price: 10, img: galao,},
        {id: 8, name: "Irlandês", description: "Café irlandês com uísque, açúcar e creme.", price: 10, img: irish},
        {id: 9, name: "Latte", description: "Expresso com leite", price: 10, img: latte,},
        {id: 10, name: "Mocha", description: "Expresso com chocolate e leite", price: 10, img: mocha,}
    ])
    return (
        <CatalogueContext.Provider value={{ catalogue }} >
            {children}
        </CatalogueContext.Provider>
    )
}