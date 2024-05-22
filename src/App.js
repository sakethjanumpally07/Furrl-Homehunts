// src/App.js
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route
          path="/wishlist"
          component={() => {
            window.location.href = 'https://furrl.in/wishlist'
            return null
          }}
        />
        <Route
          path="/cart"
          component={() => {
            window.location.href = 'https://furrl.in/cart'
            return null
          }}
        />
      </Switch>
    </Router>
  )
}

export default App
