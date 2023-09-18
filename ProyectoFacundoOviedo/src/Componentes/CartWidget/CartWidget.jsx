import "./CartWidget.modules.css"
import { useContext } from "react"
import { getCartQuantity } from "../../utils"
import { CartContext } from "../../Context/CartProvider"



const CartWidget = () => {



    const {cart} = useContext(CartContext);


   console.log(cart)

    
    return (
        <div className="estiloCart">
            <button type="button" className="btn btn-outline-primary position-relative">
                <i class="bi bi-cart4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {cart.length}
                    <span className="visually-hidden">Productos en carrito
                    </span>
                </span>
            </button>
        </div>
    )
}


export default CartWidget