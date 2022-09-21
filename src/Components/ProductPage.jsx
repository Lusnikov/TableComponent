import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export default function ProductPage() {
 const idProduct = useParams();
 const [product] = useSelector(state => state.projects).filter(e => e.id === +idProduct.id)
  return (
    <div>Информация о продукте "{product.name}"</div>
  )
}
