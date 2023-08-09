import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.modules.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid estiloNav">
                <a className="navbar-brand" href= "#">TenisCenter</a>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link linkNav" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link linkNav" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link linkNav" href="#">Contactos</a>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link linkNav" href="#">Quienes somos</a>
                    </li>
                </ul>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;