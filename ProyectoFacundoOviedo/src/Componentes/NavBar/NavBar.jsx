import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.modules.css"
import { Link, NavLink } from "react-router-dom"



const NavBar = () => {




    return (
        <div>
            <nav className="estiloNavbar">

                <h1>
                    <Link className="estiloTituloLogo" to="/">Tennis Center</Link>
                </h1>
                <ul className="estiloLinks">
                    <li className="estiloLink">
                        <NavLink className="estiladoLi" to="/category/Wilson">Wilson</NavLink>
                    </li>
                    <li className="estiloLink">
                        <NavLink className="estiladoLi" to="/category/Head">Head</NavLink>
                    </li>
                    <li className="estiloLink">
                        <NavLink className="estiladoLi" to="/category/Babolat">Babolat</NavLink>
                    </li>
                </ul>
                <div>
                    <NavLink to ="/cart">
                        <CartWidget />
                    </NavLink>
                </div>
            </nav>
        </div>

    )
}

export default NavBar;