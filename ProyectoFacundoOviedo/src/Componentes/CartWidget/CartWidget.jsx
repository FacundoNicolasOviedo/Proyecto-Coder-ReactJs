import "./CartWidget.modules.css"

const CartWidget = () => {
    return (
        <div className="estiloCart">
            <button type="button" className="btn btn-outline-primary position-relative">
                <i class="bi bi-cart4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                    <span className="visually-hidden">Productos en carrito</span>
                </span>
            </button>
        </div>
    )
}


export default CartWidget