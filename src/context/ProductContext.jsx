import { createContext, useEffect, useState } from "react"
import api from "../services/config"


const ProductsContext = createContext()

const ProductsProvider = ({children}) => {

  const [products,setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async ()=>{
      try {
        const response = await api.get('/products')
        setProducts(response)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchProducts()
  },[])

return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider