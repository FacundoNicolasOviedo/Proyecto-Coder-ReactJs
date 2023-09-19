import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartProvider'
import ItemCart from './ItemCart';
import "./Cart.modules.css"

const cart = () => {

  const { cart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <h1 className='estiloTituloNegativo'>No hay elementos en el carrito</h1>
    )
  } 
  return (
    <div>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }


      <h3>total: {totalPrice()}</h3>

    </div>
  )
}
export default cart