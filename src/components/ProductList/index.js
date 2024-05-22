// src/components/ProductList.js
import React, {useState, useEffect} from 'react'
import ProductItem from '../ProductItem'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const fetchProducts = async page => {
    setLoading(true)
    const response = await fetch(`https://furrl.in/api/products?page=${page}`)
    const data = await response.json()
    setProducts(prevProducts => [...prevProducts, ...data.products])
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts(page)
  }, [page])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        setPage(prevPage => prevPage + 1)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default ProductList
