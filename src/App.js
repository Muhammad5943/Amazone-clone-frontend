import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { signout } from './actions/userActions'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import SigninScreen from './screens/SigninScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  const cart = useSelector(state => state.cart)
  // console.log("cart ", cart);
  const { cartItems } = cart
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch()
  const signoutHandler = () => {
    dispatch(signout())
  }

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
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/" component={ HomeScreen } exact></Route>
          <Route path="/signin" component={ SigninScreen }></Route>
          <Route path="/register" component={ RegisterScreen }></Route>
          <Route path="/product/:_id" component={ ProductScreen }></Route>
          <Route path="/cart/:_id?" component={ CartScreen }></Route>         
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
