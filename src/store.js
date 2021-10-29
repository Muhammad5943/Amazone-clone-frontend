import { 
     applyMiddleware, 
     combineReducers, 
     compose, 
     createStore 
} from 'redux'
import thunk from 'redux-thunk'
import { cartReducer  } from './reducers/cartReducers'
/* static redux data source */
// import data from './data'

/* dinamic redux data source */
import { 
     productDetailsReducer, 
     productListReducer 
} from './reducers/productReducers'
import { 
     userRegisterReducer, 
     userSigninReducer 
} from './reducers/userReducers'

const initialState = {
     userSignin:{
          userInfo: localStorage.getItem('userInfo')
               ? JSON.parse(localStorage.getItem('userInfo'))
               : null
     },
     cart: {
          cartItems: localStorage.getItem('cartItems')
               ? JSON.parse(localStorage.getItem('cartItems'))
               : [],
     }
}

// console.log("localStorage ", localStorage.getItem('cartItems'));

/* static data redux */
// const reducer = (state, action) => {
//      return { products: data.products }
// }

/* dinamic data redux */
const reducer = combineReducers({
     productList: productListReducer,
     productDetails: productDetailsReducer,
     cart: cartReducer,
     userSignin: userSigninReducer,
     userRegister: userRegisterReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
     reducer, 
     initialState, 
     composeEnhancer(
          applyMiddleware(thunk)
     ))

export default store