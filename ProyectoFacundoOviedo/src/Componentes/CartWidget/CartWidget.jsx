import "./CartWidget.modules.css"
import { useContext } from "react"
import { CartContext } from "../../Context/CartProvider"



const CartWidget = () => {



    const {cart} = useContext(CartContext);

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    
    return (
        <div className="estiloCart">
            <button type="button" className="btn btn-outline-primary position-relative">
                <i class="bi bi-cart4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {totalQuantity}
                    <span className="visually-hidden">Productos en carrito
                    </span>
                </span>
            </button>
        </div>
    )
}


export default CartWidget