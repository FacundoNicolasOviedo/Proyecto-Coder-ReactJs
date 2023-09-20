import { Routes, Route } from "react-router-dom"
import NavBar from "./Componentes/NavBar/NavBar"
import ItemListContainer from "./Componentes/ItemList/ItemListContainer"
import ItemDetailContainer from "./Componentes/ItemDetail/ItemDetailContainer"
import "./app.modules.css"
import CartProvider from "./Context/CartProvider"
import Checkout from "./Componentes/Checkout/Checkout"
import Cart from "./Componentes/Cart/Cart"
import SuccessfullOrder from "./Componentes/Checkout/SuccessfullOrder"



function App() {

 

  return (

    
    <CartProvider>
      <div className="estiloDivNavbar">
        <NavBar />
       
      </div>


    


     
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/successfullOrder" element={<SuccessfullOrder />}/>
      </Routes>
      
    </CartProvider>
  )
}

export default App
