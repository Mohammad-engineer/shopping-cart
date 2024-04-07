import { Link } from "react-router-dom";
import { HiMiniArrowsPointingOut, HiShoppingCart } from "react-icons/hi2";
import { shortenText } from "../utils/utils";
import Styles from "./Card.module.css";



const Card = ({data}) => {
    const {category,description,id,image,price,title,rating:{rate,count}} = data
  return (
    <div className={Styles.card} >
        <img src={image} alt={title} />
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>
        <div className={Styles.actions}>
            <Link to={`/products/${id}`}><HiMiniArrowsPointingOut /></Link>
            <button><HiShoppingCart /></button>
        </div>
    </div>
  )
}

export default Card