import propTypes from "prop-types"
import "./ItemList.modules.css"
import { Link } from "react-router-dom"
import {useState} from "react"


const ItemList = ({ items, addItem }) => {
  const [count, setCount] = useState(0)
  function aumentar() {

    if (count < 10) {
      setCount(count + 1)
    } else {
      alert("No se pueden pedir mas productos")
    }
  }

  function reducir() {
    if (count > 0) {
      setCount(count - 1)
    } else {
      alert("elija una cantidad valida")
    }

  }

  return (
    <div>
      <h1 className="estiloTituloItems">Productos</h1>
      <div className="container-fluid">
        <ul>
          {items.map((item) => (
            <div className="card col-6 col-md-4 col-lg-3">

              <li className="estiloLink" key={item.id}>
                <Link className="linksList" to={`/item/${item.id}`}>
                   <img src= {item.image} className="card-img-top" alt="" />
                  <h3>{item.title}</h3>
                  <h4>{item.categoryId}</h4>
                  <h4>${item.price}</h4>
                  <p>Stock: {item.stock} </p>
                </Link>
              </li>
              <button className="boton" onClick={aumentar}>+</button>
              <h2 className="cantidad">{count}</h2>
              <button className="boton" onClick={reducir}>-</button>
              <button onClick={()=> addItem(item, 1)} className="btn btn-primary mt-3 mb-2" >Agregar al carrito</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}


ItemList.propTypes = {
  items: propTypes.array.isRequired,
  addItem: propTypes.func,
};

export default ItemList