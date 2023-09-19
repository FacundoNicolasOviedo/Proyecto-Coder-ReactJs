import propTypes from "prop-types"
import "./ItemList.modules.css"
import { Link } from "react-router-dom"



const ItemList = ({ items }) => {


  return (

    <div className="container">
      <h1 className="estiloTituloItems">Productos</h1>
      <ul className="col-12 row">
        {items.map((item) => (
          <li className=" tarjeta card col-3 p-1 " key={item.id}>
            <img src={item.imageId} className="card-img-top" alt="" />
            <h3 className="estiloTitulo">{item.title}</h3>
            <h3 className="estiloCategoria">{item.categoryId}</h3>
            <h3 className="estiloPrecio">${item.price}</h3>
            <Link className="linksList" to={`/item/${item.id}`}>
              <h5>Ver detalle</h5>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


ItemList.propTypes = {
  items: propTypes.array.isRequired,
  addItem: propTypes.func,
};

export default ItemList