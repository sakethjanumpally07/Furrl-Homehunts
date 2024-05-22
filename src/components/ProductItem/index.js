// src/components/ProductItem.js
import React from 'react'
import {Link} from 'react-router-dom'
import ShareButton from '../ShareButton'

const ProductItem = ({product}) => {
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </Link>
      <ShareButton productUrl={`https://furrl.in/product/${product.id}`} />
    </div>
  )
}

export default ProductItem
