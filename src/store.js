import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
/* static redux data source */
// import data from './data'

/* dinamic redux data source */
import { productDetailsReducer, productListReducer } from './reducers/productReducers'

const initialState = {}

/* static data redux */
// const reducer = (state, action) => {
//      return { products: data.products }
// }

/* dinamic data redux */
const reducer = combineReducers({
     productList: productListReducer,
     productDetails: productDetailsReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
     reducer, 
     initialState, 
     composeEnhancer(
          applyMiddleware(thunk)
     ))

export default store