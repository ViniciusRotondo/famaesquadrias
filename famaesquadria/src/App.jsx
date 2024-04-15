import React from "react"
import Router from "./router"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Header />
        <Router />
      <Footer />
    </div>
  )
}

export default App
