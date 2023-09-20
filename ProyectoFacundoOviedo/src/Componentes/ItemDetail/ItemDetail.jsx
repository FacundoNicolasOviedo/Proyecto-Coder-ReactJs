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

            <div className="container">
                <div className="row">
                    <div className="col mb-3">
                        <img src={item.imageId} className="imagenDetail" alt="" />
                    </div>
                    <div class="col-md-8">
                        <div className='card-body'>
                            <h3 className='tituloDetalle card-title'>{item.title}</h3>
                            <h4 className='card-title'>{item.categorId}</h4>
                            <p className='card-text'>{item.description}</p>
                            <h3 className='estiloPriceDetail'>${item.price}</h3>
                        </div>
                        <div className='estiloContador'>
                            <ItemCount initial={1} stock={10} onAdd={onAdd} />
                        </div>
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