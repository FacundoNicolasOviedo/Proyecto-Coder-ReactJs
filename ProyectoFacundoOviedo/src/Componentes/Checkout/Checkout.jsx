import React from 'react'
import { useContext } from 'react'
import { CartContext } from "../../Context/CartProvider"
import "./checkout.modules.css"




const Checkout = () => {

  const { cart, totalPrice } = useContext(CartContext)

  return (
    <div>
      <h1 className='tituloCheckout'>Resumen de la compra</h1>
      <div>
        {cart.map((item) => (
          <div className="container">
            <div className="row">
              <div className="col">
                <h4 className="tituloCart">{item.title}</h4>
              </div>
              <div className="col">
                <h4
                  className="tituloCartCategory">{item.categoryId}</h4>
              </div>
              <div className="col">
                <h4
                  className="tituloCartPrice">${item.price}</h4>
              </div>
              <div className="col">
                <h4 className="tituloCartCantidad">X{item.quantity}</h4>
              </div>
              <hr />
            </div>
          </div>
        ))}
        <div className='col'>
          <h3 className='estiloTotalCheckout'>Total: ${totalPrice()}</h3>
        </div>
      </div>
      <div className='container'>
        <h2 className='tituloFormulario'>Coloque sus datos para terminar</h2>
        <div className="form-floating mb-4">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
          <label for="floatingInput">Nombre</label>
        </div>
        <div className="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
          <label for="floatingPassword">Apellido</label>
          <div class="form-floating mb-4">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
            <label for="floatingInput">Mail</label>
          </div>
          <div className="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
            <label for="floatingPassword">Teléfono</label>
          </div>
        </div>
      </div>
      <button className='estiloBotonCheckout btn btn-primary'>Finalizar Compra</button>
    </div>
  )
}

export default Checkout