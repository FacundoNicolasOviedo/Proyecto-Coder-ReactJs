import "./ItemListContainer.modules.css"

const ItemListContainer = ({greeting}) => {
   return (
   <seccion className="estiloSeccionGreeting">
    <h1 className="estiloGreeting">{greeting}</h1>
   </seccion>
   )
}

export default ItemListContainer