import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.modules.css"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav className="estiloNavbar">

                <h1>
                    <Link className="estiloTitulo" to="/">Tennis Center</Link>
                </h1>
                <ul className="estiloLinks">
                    <li>
                        <NavLink className="estiloLink" to="/category/Wilson">Wilson</NavLink>
                    </li>
                    <li>
                        <NavLink className="estiloLink" to="/category/Head">Head</NavLink>
                    </li>
                    <li>
                        <NavLink className="estiloLink" to="/category/Babolat">Babolat</NavLink>
                    </li>
                </ul>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </div>

    )
}

export default NavBar;