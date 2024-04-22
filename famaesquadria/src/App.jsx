import React from "react"
import Router from "./router"
import Header from "./components/Header"
import FooterFama from "./components/FooterFama"

function App() {
  return (
    <>
      <Header />
        <Router />
      <FooterFama />
    </>  
  )
}

export default App
