import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href= "#">TenisCenter</a>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contactos</a>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Quienes somos</a>
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