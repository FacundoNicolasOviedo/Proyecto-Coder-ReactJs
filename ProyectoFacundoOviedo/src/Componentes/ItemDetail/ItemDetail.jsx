import React from 'react'
import PropTypes from "prop-types";
import "./itemDetail.modules.css"
import ItemCount from "../ItemCount/ItemCount"
import aumentar from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {

    if (!item) {
        return null;
    }

    return (

        <div>
            <h1 className='tituloDetail'>Descripción del producto</h1>

            <div className="estiloCardDetail card mb-3">
                <div className="row g-0">
                    <div className="col-md-9">
                        <img src={item.image} className="img-fluid rounded-start" alt="" />
                    </div>
                    <div class="col-md-8">
                        <div className='card-body'>
                            <h3 className='card-title'>{item.title}</h3>
                            <h4 className='card-title'>{item.categorId}</h4>
                            <p className='card-text'>{item.description}</p>
                            
                            
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