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
            <div className="card">
              <div className="card-body">
                <li className="estiloLink" key={item.id}>
                    <img src={item.imageId} className="card-img-top" alt="" />
                    <h3 className="estiloTitulo">{item.title}</h3>
                    <h3 className="estiloCategoria">{item.categoryId}</h3>
                    <h4 className="estiloPrecio">${item.price}</h4>
                    <Link className="linksList" to={`/item/${item.id}`}>
                   <h5>Ver detalle</h5>
                  </Link>
                </li>
              </div>
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