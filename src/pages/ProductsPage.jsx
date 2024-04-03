import Card from "../components/Card";
import { useProducts } from "../context/ProductContext";
import Styles from "./ProductsPage.module.css";
import { InfinitySpin } from "react-loader-spinner";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import {FaListUl} from 'react-icons/fa'


const ProductsPage = () => {
  
  const products = useProducts();
  const [search,setSearch] = useState('')

  const searchHandler = ()=>{

  }

  return (
    <>
    <div>
      <input type="text" placeholder="search..." value={search} onChange={e=>e.target.value.toLocaleLowerCase()}/>
      <button onClick={searchHandler}><IoSearch /></button>
    </div>
      <div className={Styles.container}>
        <div className={Styles.products}>
          {!products.length && (
            <InfinitySpin
              visible={true}
              width="200"
              color="#4fa94d"
              ariaLabel="infinity-spin-loading"
            />
          )}
          {products.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div><FaListUl />
          <p>Categiries</p>
          </div>
          <ul>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Mens Clothing</li>
            <li>Womens Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
