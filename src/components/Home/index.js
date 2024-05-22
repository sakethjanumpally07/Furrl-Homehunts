// src/pages/Home.js
import React from 'react'
import Navbar from '../NavBar'
import ProductList from '../ProductList'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <ProductList />
    </div>
  )
}

export default Home
