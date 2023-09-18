import {useState, useEffect, useContext} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../Services"
import { CartContext } from "../../Context/CartProvider"
//import CartContext from "../../Context/CartContext"


const ItemListContainer = () => {
   
  // const {addItem} = useContext (CartContext);

   const [items, setItems] = useState([]);
   const {categoryId} = useParams();

  

   useEffect(() => {
     getProducts(categoryId).then((response) => {
      setItems(response);
     });
   
   
   }, [categoryId])



   
   

   return  <ItemList items={items}/>;
   
}

export default ItemListContainer