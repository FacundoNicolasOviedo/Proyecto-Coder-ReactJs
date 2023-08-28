import propTypes from "prop-types"
import "./ItemList.modules.css"
import { Link } from "react-router-dom"
import {useState} from "react"

const ItemList = ({ items }) => {
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
      <div className="row">
        <ul>
          {items.map((item) => (
            <div className="card col-6 col-md-4 col-lg-3">
              <img src={item.image} className="card-img-top" alt="" />
              <li key={item.id}>
                <Link to={`/item/${item.id}`}>
                  <h3>{item.name}</h3>
                  <h4>{item.category}</h4>
                  <h4>${item.price}</h4>

                </Link>
              </li>
              <button className="boton" onClick={aumentar}>+</button>
              <h2 className="cantidad">{count}</h2>
              <button className="boton" onClick={reducir}>-</button>
              <button className="btn btn-primary mt-3 mb-2">Agregar al carrito</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}


ItemList.propTypes = {
  items: propTypes.array.isRequired,
};

export default ItemList