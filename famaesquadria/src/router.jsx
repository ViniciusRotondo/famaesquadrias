import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"

import Home from './pages/Home'
import Portas from './pages/Portas'
import Janelas from './pages/Janelas'
import Portoes from './pages/Portoes'
import GuardaCorpos from './pages/Guarda-corpo'
import Espelhos from './pages/Espelhos'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    exact
                    path="/famaesquadrias/" 
                    element={<Home />}
                    />
                <Route 
                    path="/famaesquadrias/portas" 
                    element={<Portas />}
                    />
                <Route 
                    path="/famaesquadrias/janelas" 
                    element={<Janelas />}
                    />
                <Route 
                    path="/famaesquadrias/portoes" 
                    element={<Portoes />}
                    />
                <Route 
                    path="/famaesquadrias/guarda-corpos" 
                    element={<GuardaCorpos />}
                    />
                <Route 
                    path="/famaesquadrias/espelhos" 
                    element={<Espelhos />}
                    />
            </Routes>
        </BrowserRouter>
    )
}

export default Router