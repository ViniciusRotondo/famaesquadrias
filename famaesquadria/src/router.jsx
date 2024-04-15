import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"

import Header from './pages/Components/Header'
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
                    path="/" 
                    element={<Home />}
                    />
                <Route 
                    path="/portas" 
                    element={<Portas />}
                    />
                <Route 
                    path="/janelas" 
                    element={<Janelas />}
                    />
                <Route 
                    path="/portoes" 
                    element={<Portoes />}
                    />
                <Route 
                    path="/guarda-corpos" 
                    element={<GuardaCorpos />}
                    />
                <Route 
                    path="/espelhos" 
                    element={<Espelhos />}
                    />
            </Routes>
        </BrowserRouter>
    )
}

export default Router