import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from './actions/userActions'
import PrivateRoute from './components/PrivateRoute'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'
import SigninScreen from './screens/SigninScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingAddressScreen from './screens/ShippingAddressScreen'
import PaymentMethodScreen from './screens/PaymentMethodScreen'
import OrderScreen from './screens/OrderScreen'
import OrderHistoryScreen from './screens/OrderHistoryScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import ProfileScreen from './screens/ProfileScreen'
import AdminRoute from './components/AdminRoute'
import ProductListScreen from './screens/ProductListScreen'
import './index.css'
import ProductEditScreen from './screens/ProductEditScreen'

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
                      <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="/signin" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/signin">Sign In</Link>
                <Link to="/register">Sign Up</Link>
              </>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/" component={ HomeScreen } exact></Route>
          <AdminRoute
            path="/productlist"
            component={ ProductListScreen }
          ></AdminRoute>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route path="/signin" component={ SigninScreen }></Route>
          <Route path="/register" component={ RegisterScreen }></Route>
          <Route path="/shipping" component={ ShippingAddressScreen }></Route>
          <Route path="/payment" component={ PaymentMethodScreen }></Route>
          <Route path="/placeholder" component={ PlaceOrderScreen }></Route>
          <Route path="/product/:_id" component={ ProductScreen } exact></Route>
          <Route path="/product/:_id/edit" component={ ProductEditScreen } exact></Route>
          <Route path="/orderhistory" component={ OrderHistoryScreen }></Route>
          {/* <Route path="/profile" component={ ProfileScreen }></Route> */}
          <Route path="/order/:_id" component={ OrderScreen }></Route>
          <Route path="/cart/:_id?" component={ CartScreen }></Route>         
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
