// src/pages/ProductDetails.js
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const ProductDetails = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://furrl.in/api/products/${id}`)
      const data = await response.json()
      setProduct(data)
    }

    fetchProduct()
  }, [id])

  if (!product) {
    return <p>Loading...</p>
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductDetails
