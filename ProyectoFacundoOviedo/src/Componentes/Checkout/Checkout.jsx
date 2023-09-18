import React from 'react'
import { useContext } from 'react'
import { CartContext } from "../../Context/CartProvider"




const Checkout = () => {

    const {cart} = useContext(CartContext)
  return (
    <div>Checkout</div>
  )
}

export default Checkout