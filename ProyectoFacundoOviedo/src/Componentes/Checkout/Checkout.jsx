import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from "../../Context/CartProvider"
import "./checkout.modules.css"
import {addDoc, getFirestore, collection, serverTimestamp} from "firebase/firestore";




const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, totalPrice } = useContext(CartContext)


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder();
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
        date: serverTimestamp()
      })),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');


    addDoc(ordersCollection, orderData)
    .then((docRef) => {
      console.log('orden creada con id: ', docRef.id);
      setOrderId(docRef.id);
    })
    .catch((error) => {
      console.log(error);
    });

  

    useEffect(() => {
      return () => {
        if (orderId) {
          clearCart();
        }
      };
    }, [orderId]);
  

  

   
};



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
        <form onSubmit={handleSubmit} className="form-floating">
          <input type="text" onChange={handleInputChange} class="form-control" id="floatingPassword" placeholder="name"></input>
          <label for="floatingPassword">Nombre completo</label>
          <br />
          <div class="form-floating mb-4">
            <input type="email" onChange={handleInputChange} class="form-control" id="floatingInput" placeholder="name@example.com"></input>
            <label for="floatingInput">Mail</label>
          </div>
          <div className="form-floating">
            <input type="name" onChange={handleInputChange} class="form-control" id="floatingPassword" placeholder="phone"></input>
            <label for="floatingPassword">Teléfono</label>
          </div>
          <br />
          <div class="form-floating">
            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option value="1">Tarjeta de débito</option>
              <option value="2">Tarjeta de crédito</option>
              <option value="3">Transferencia Bancaria</option>
            </select>
            <label for="floatingSelect">Método de pago</label>
          </div>
        </form>
      </div>
      <button className='estiloBotonCheckout btn btn-primary'>Finalizar Compra</button>
    </div>
  )
}

export default Checkout