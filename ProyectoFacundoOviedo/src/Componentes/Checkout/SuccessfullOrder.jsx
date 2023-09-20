import React from 'react'
import "./SuccessfullOrder.modules.css"

const SuccessfullOrder = () => {
    return (
        <div>
            <div>
                <h1 className='tituloOrder'>Tu compra ha sido exitosa</h1>
            </div>
            <div className='container'>
            <div className='card'>
              <h1>Perfecto... su N°de orden es:</h1>
            </div>
            </div>
        </div>
    )
}

export default SuccessfullOrder