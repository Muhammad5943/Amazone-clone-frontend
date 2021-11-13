import React, { useEffect } from 'react'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'

function HomeScreen() {
    /* implement before using redux */
    // const [ products, setProducts ] = useState([])
    // const [ loading, setLoading ] = useState(false)
    // const [ error, setError ] = useState(false)

    /* implement after using redux */
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    // console.log('products ', products);

    useEffect(() => {
        /* implement before using redux */
        // const fetchData = async () => {
        //   try {
        //     setLoading(true)

        //     const { data } = await axios.get('/api/products')
        //     setLoading(false)
        //     setProducts(data.data.products)
        //   } catch (error) {
        //     setError(error.message)
        //     setLoading(false)
        //   }
        
        // }

        // fetchData()

        /* implement after using redux */
        dispatch(listProducts({}))
    }, [dispatch])

    return (
      <div>
        {loading? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{ error }</MessageBox>
        ) : (
            <div className="row center">
              {products.map((product) => (
                  <Product 
                    key={ product._id }
                    product={ product }
                  />
                ))
              }
            </div>
          )
        }
      </div>
    )
}

export default HomeScreen

