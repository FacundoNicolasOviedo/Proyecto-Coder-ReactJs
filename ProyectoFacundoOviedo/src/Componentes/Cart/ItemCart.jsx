import React, { useContext } from "react"
import { CartContext } from "../../Context/CartProvider"
import "./ItemCart.modules.css"

const ItemCart = ({ item }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={item.imageId} className="imagen" alt="" />
                </div>
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
                    <h4 className="tituloCartCantidad">{item.quantity}</h4>
                </div>
                <div className="col">
                    <button className="botonRemover btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar Producto</button>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ItemCart