import { useState } from 'react'
import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import DetailsPage from './pages/DetailsPage'
import CheckoutPage from './pages/CheckoutPage'
import PageNotFound from './pages/404'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/products' />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/products/:id' element={<DetailsPage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App
