import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'
import { useSelector } from 'react-redux'
import './index.css'

function App() {
  const cart = useSelector(state => state.cart)
  console.log("cart ", cart);
  const { cartItems } = cart
  // console.log('cart ', cartItems);
  
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Amazone Clone
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/" component={ HomeScreen } exact></Route>
          <Route path="/product/:_id" component={ ProductScreen }></Route>
          <Route path="/cart/:_id?" component={ CartScreen }></Route>         
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
