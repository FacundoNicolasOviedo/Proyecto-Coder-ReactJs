import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from "../../Services"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [Item, setItem] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    getProduct(id).then((response) => {
      setItem(response);
    }).catch(() => {
      setItem(null);
    })
  }, [id])


  return (
    <ItemDetail item={Item} />
  )
}

export default ItemDetailContainer