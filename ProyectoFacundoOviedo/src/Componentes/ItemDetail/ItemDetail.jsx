import React from 'react'
import PropTypes from "prop-types";
import "./itemDetail.modules.css"

const ItemDetail = ({ item }) => {
    

    if (!item) {
        return null;
      }

    return (

        

        <div>
            <h1 className='tituloDetail'>Descripción del producto</h1>
            <h1>{item.name}</h1>
            <h2>{item.category}</h2>
            <h2>${item.price}</h2>
        </div>
    )
}



ItemDetail.propTypes = {
    item: PropTypes.object,
}
export default ItemDetail