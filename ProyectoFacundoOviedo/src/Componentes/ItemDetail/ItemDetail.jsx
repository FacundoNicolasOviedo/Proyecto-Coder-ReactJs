import React, { useContext, useState } from 'react'
import PropTypes from "prop-types";
import "./itemDetail.modules.css"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from '../../Context/CartProvider';



const ItemDetail = ({ item }) => {
    
    const [goToCart, setGoToCart] = useState(false)
    const { addItem } = useContext(CartContext)


   const onAdd = (quantity) => {
    setGoToCart(true)
    addItem(item, quantity)
     
   }

    if (!item) {
        return null;
    }

    return (
        <div>
            <h1 className='tituloDetail'>Descripción del producto</h1>

            <div className="estiloCardDetail card mb-3">
                <div className="row g-0">
                    <div className="col-md-12">
                        <img src={item.imageId} className="imagen" alt="" />
                    </div>
                    <div class="col-md-8">
                        <div className='card-body'>
                            <h3 className='tituloDetalle card-title'>{item.title}</h3>
                            <h4 className='card-title'>{item.categorId}</h4>
                            <p className='card-text'>{item.description}</p>
                            <h4>${item.price}</h4>
                        </div>
                        <ItemCount initial={1} stock={10} onAdd={onAdd}
                        />
                         <button onClick={() => addItem(item, 1)} className='botonAgregar btn btn-primary mt-3 mb-2'> Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>


    )
}



ItemDetail.propTypes = {
    item: PropTypes.object,

}
export default ItemDetail