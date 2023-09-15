import CartContext from "../../Context/CartContext"
import "./CartWidget.modules.css"
import { useContext } from "react"
import { getCartQuantity } from "../../utils"



const CartWidget = () => {

    const {cantidadTotal} = useContext(CartContext);


   

    
    return (
        <div className="estiloCart">
            <button type="button" className="btn btn-outline-primary position-relative">
                <i class="bi bi-cart4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {cantidadTotal()}
                    <span className="visually-hidden">Productos en carrito
                    </span>
                </span>
            </button>
        </div>
    )
}


export default CartWidget