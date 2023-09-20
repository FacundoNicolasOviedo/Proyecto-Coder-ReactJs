import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from "../../Context/CartProvider"
import "./Checkout.modules.css"
import { addDoc, getFirestore, collection, serverTimestamp } from "firebase/firestore";
import { NavLink } from 'react-router-dom';




const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, totalPrice, clearCart } = useContext(CartContext)


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    createOrder()
  };


  const createOrder = () => {
    const orderData = {
      buyer: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,

      },
      products: cart.map((item) => ({
        name: item.title,
        id: item.id,
        price: item.price,
      })),
      date: serverTimestamp()
    };

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');


    addDoc(ordersCollection, orderData)
      .then((docRef) => {
        setOrderId(docRef.id)
        clearCart()
      })
      .catch((error) => {
        console.log(error);
      })
  };

  if (orderId) {
    return (
      <div>
        <div>
          <h1 className='tituloOrder'>Tu compra ha sido exitosa</h1>
        </div>
        <div className='container'>
          <div className='card-body'>
            <h1 className='estiloConfirmacion'>Muchas gracias por tu compra {formData.name} su N°de orden es: {orderId}</h1>
          </div>
          <NavLink to="../" >
            <div>
              <button className='botonVolver btn btn-success'>Volver a página principal</button>
            </div>
          </NavLink>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className='tituloCheckout'>Resumen de la compra</h1>
      <div>
        {cart.map((item) => (
          <div className="container" key={item.id}>
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
        <form onSubmit={handleSubmit} className="form-floating">
          <input type="text" onChange={handleInputChange} className="form-control border border-dark" id="floatingPassword" placeholder="name" name="name"></input>
          <label htmlFor="floatingPassword">Nombre completo</label>
          <br />
          <div class="form-floating mb-4">
            <input type="email" onChange={handleInputChange} className="form-control border border-dark" id="floatingInput" placeholder="name@example.com" name="email"></input>
            <label htmlFor="floatingInput">Mail</label>
          </div>
          <div className="form-floating">
            <input type="text" onChange={handleInputChange} className="form-control border border-dark" id="floatingPassword" placeholder="phone" name="phone"></input>
            <label htmlFor="floatingPassword">Teléfono</label>
          </div>
          <br />
          <div className="form-floating">
            <select className="form-select border border-dark" id="floatingSelect" aria-label="Floating label select example">
              <option value="1">Tarjeta de débito</option>
              <option value="2">Tarjeta de crédito</option>
              <option value="3">Transferencia Bancaria</option>
            </select>
            <label htmlFor="floatingSelect">Método de pago</label>
          </div>
          <button onClick={clearCart} className='estiloBotonCheckout btn btn-primary' type='submit'>Finalizar Compra</button>
        </form>
      </div>
    </div>
  )
}

export default Checkout