import React from "react"
import imgFama from '/fama.svg'
import { Link } from "react-router-dom"

const Header = () => {
    return(
        <>
        <img src={imgFama} style={{ width:'10%' }} alt="Logotipo fama" />
        <ul>
            <li><a href="/">Início</a></li>
            <li><a href='/janelas'>Janelas</a></li>
            <li><a href='/portas'>Portas</a></li>
            <li><a href='/portoes'>Portões</a></li>
            <li><a href='/guarda-corpos'>Guarda Corpo</a></li>
            <li><a href='/espelhos'>Espelhos</a></li>
        </ul>
        </> 
    )
}

export default Header