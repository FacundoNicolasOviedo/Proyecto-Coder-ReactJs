import { useContext, useState } from "react"
import CartProvider from "../../Context/CartProvider"


const ItemCount = (item) => {


    const {addItem} = useContext(CartProvider)
    

    const [count, setCount] = useState(0)

function aumentar() {

    if (count < 10) {
        setCount(count + 1)
    } else {
        alert("No se pueden pedir mas productos")
    }
}

function reducir() {
    if (count > 0) {
        setCount(count - 1)
    } else {
        alert("elija una cantidad valida")
    }

}

return (
    <div>
        <button className="boton" onClick={aumentar}>+</button>
        <h2 className="cantidad">{count}</h2>
        <button className="boton" onClick={reducir}>-</button>
        <button onClick={() => addItem(item, 1)} className="btn btn-primary mt-3 mb-2" >Agregar al carrito</button>
    </div>


)


}


export default ItemCount
