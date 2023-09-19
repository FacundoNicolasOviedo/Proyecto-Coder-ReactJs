import React, { useContext } from "react"
import { CartContext } from "../../Context/CartProvider"

const ItemCart = ({ item }) => {

    const { removeItem } = useContext(CartContext)
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={item.imageId} className="imagen" alt="" />
                </div>
                <div className="col">
                    <h3>{item.title}</h3>
                </div>
                <div className="col">
                    <h4>{item.categoryId}</h4>
                </div>
                <div className="col">
                    <h4>${item.price}</h4>
                </div>
                <div className="col">
                    <h4>{item.quantity}</h4>
                </div>
                <div className="col">
                    <button onClick={() => removeItem(item.id)}>Eliminar Producto</button>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ItemCart