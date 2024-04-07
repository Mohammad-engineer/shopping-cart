import Card from "../components/Card";
import { useProducts } from "../context/ProductContext";
import Styles from "./ProductsPage.module.css";
import { InfinitySpin } from "react-loader-spinner";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import {FaListUl} from 'react-icons/fa'


const ProductsPage = () => {
  
  const products = useProducts();

  const [displayed, setDisplayed] = useState([])
  const [search,setSearch] = useState('')
  const [query,setQuery] = useState({})

  useEffect(()=>{
    setDisplayed(products)
  },[products])

  useEffect(()=>{
    console.log(query);
  },[query])

  const searchHandler = ()=>{
    setQuery(query=>({...query,search}))
  }

  const categoryHandler = (event)=>{
    const {tagName} = event.target
    if(tagName !== 'LI') return
    const category = event.target.textContent.toLowerCase();

    setQuery(query=>({...query,category}))
  }

  return (
    <>
    <div>
      <input type="text" placeholder="search..." value={search} onChange={e=>setSearch(e.target.value.toLocaleLowerCase())}/>
      <button onClick={searchHandler}><IoSearch /></button>
    </div>
      <div className={Styles.container}>
        <div className={Styles.products}>
          {!displayed.length && (
            <InfinitySpin
              visible={true}
              width="200"
              color="#4fa94d"
              ariaLabel="infinity-spin-loading"
            />
          )}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div><FaListUl />
          <p>Categiries</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
