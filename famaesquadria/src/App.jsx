import React from "react"
import Router from "./router"
import Header from "./pages/Components/Header"
import Footer from "./pages/Components/Footer"

function App() {
  return (
    <>
      <Header />
        <Router />
      <Footer />
    </>
  )
}

export default App
