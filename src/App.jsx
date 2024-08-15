// import React from 'react'
import Navbar from "./Components/Navigation/Navbar"
import Home from "./Components/Herosection/Home"
import Rename from  "./Components/About/Rename"
import Product from "./Components/Product/Product"
import Partner from "./Components/Partners/Partner"
import Footer from "./Components/Footer/Footer"
const App = () => {
  return (
    <>
    <Navbar/>
    <Home/> 
    <Product/>
    <Rename>

    </Rename>
   <Partner/>
   <Footer/>
    </>
  )
}

export default App