import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'

export default function CartScreen(props) {
     const productId = props.match.params._id
     console.log('productId ', productId);
     const qty = props.location.search 
                    ? Number(props.location.search.split('=')[1]) 
                    : 1
                    console.log('qty ', qty);

     const dispatch = useDispatch()
     useEffect(() => {
          if (productId) {
               dispatch(addToCart(productId, qty))
          }
     }, [dispatch, productId, qty])
     return (
          <div>
               <h1>Cart Screen</h1>
               <p>
                    ADD TO CART: ProductID: {productId} Qty: {qty}
               </p>
          </div>
     )
}

