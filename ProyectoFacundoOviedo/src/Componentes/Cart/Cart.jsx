import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartProvider'
import ItemCart from './ItemCart';
import "./Cart.modules.css"
import { NavLink } from 'react-router-dom';

const cart = () => {

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <h1 className='estiloTituloNegativo'>No hay elementos en el carrito</h1>
    )
  }
  return (
    <div>
      <h1 className='estiloTituloCart'>Tus productos</h1>
      <div>
        {
          cart.map(item => <ItemCart key={item.id} item={item} />)
        }

        <div className='container'>
          <div className='row'>
              <NavLink to="/checkout">
                <div className='col'>
                  <button className='btn btn-success'>Ir al Checkout</button>
                </div>
              </NavLink>

              <div className='col'>
                <button className='botonVaciar btn btn-warning' onClick={clearCart}>Vaciar carrito</button>
              </div>

              <div className='col'>
                <h3 className='estiloTotal'>Total: ${totalPrice()}</h3>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default cart