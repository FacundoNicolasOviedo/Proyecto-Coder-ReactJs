import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartProvider";
import "./ItemCount.modules.css"

const ItemCount = (item) => {
    const { addItem } = useContext(CartContext);

    const [count, setCount] = useState(0);

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
            <div className="estiloContador">
            <button className='botonReducir' onClick={reducir}>
                    -
                </button>
              
                <h2 className='cantidad'>{count}</h2>
                <button className='botonAumentar' onClick={aumentar}>
                    +
                </button>
               
            </div>
            <div>
                <button
                    onClick={() => addItem(item, 1)}
                    className='btn btn-primary mt-3 mb-2'>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;