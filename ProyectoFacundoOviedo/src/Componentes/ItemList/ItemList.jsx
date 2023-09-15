import propTypes from "prop-types"
import "./ItemList.modules.css"
import { Link } from "react-router-dom"



const ItemList = ({ items, addItem }) => {


  return (
    <div>
      <h1 className="estiloTituloItems">Productos</h1>
      <div className="container-fluid">
        <ul>
          {items.map((item) => (
            <div className="card col-6 col-md-4 col-lg-3">

              <li className="estiloLink" key={item.id}>
                <Link className="linksList" to={`/item/${item.id}`}>
                   <img src= {item.imageId} className="card-img-top" alt="" />
                  <h3>{item.title}</h3>
                  <h4>{item.categoryId}</h4>
                  <h4>${item.price}</h4>
                  <p>Stock: {item.stock} </p>
                </Link>
              </li>
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