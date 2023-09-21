import { useState } from "react";
import "./ItemCount.modules.css"

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial);

    function aumentar() {
        if (count < 10) {
            setCount(count + 1);
        } else {
            alert("No se pueden pedir mas productos");
        }
    }

    function reducir() {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert("elija una cantidad valida");
        }
    }

    return (
        <div>
            <div className="estiloContador container">
                <button className='botonReducir' disabled={count <= 1} onClick={reducir}>
                    -
                </button>

                <h2 className='cantidad'>{count}</h2>

                <button className='botonAumentar' disabled={count >= stock} onClick={aumentar}>
                    +
                </button>
            </div>
            <div className="botonAgregarCarrito">
            <button onClick={() => onAdd(count)} className='botonAgregar btn btn-success mt-3 mb-2'> Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;