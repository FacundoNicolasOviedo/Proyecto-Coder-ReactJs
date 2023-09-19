import React, { useContext } from "react"
import { CartContext } from "../../Context/CartProvider"

const ItemCart = ({ item }) => {

    const {removeItem} = useContext(CartContext)
    return (
        <div>
            <div>
                <img src={item.imageId} className="imagen" alt="" />
            </div>
            <div>
               <h3 className='tituloDetalle card-title'>{item.title}</h3>
            </div>
            <div>
               <h4 className='card-title'>{item.categorId}</h4>
            </div>
            <div>
               <h4>${item.price}</h4>
            </div>
            <div>
                <button onClick={()=> removeItem(product.id)}>Eliminar Producto</button>
            </div>
        </div>
    )
}

export default ItemCart