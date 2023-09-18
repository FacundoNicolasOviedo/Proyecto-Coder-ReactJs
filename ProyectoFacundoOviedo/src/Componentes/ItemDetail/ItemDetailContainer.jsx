import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from "../../Services"
import ItemDetail from "./ItemDetail"
import { CartContext } from '../../Context/CartProvider'

const ItemDetailContainer = () => {
  const [Item, setItem] = useState(null);
  const { id } = useParams()

  const addItem = useContext(CartContext)

  console.log(addItem)

  useEffect(() => {
    getProduct(id).then((response) => {
      setItem(response);
    }).catch(() => {
      setItem(null);
    })
  }, [id])




  return (
    <ItemDetail item={Item} addItem={addItem}  />
  )
}

export default ItemDetailContainer