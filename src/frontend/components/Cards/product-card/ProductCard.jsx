import { useContext, useState } from 'react';
import './product-card.css'
import { WishlistContext } from '../../../context/WishlistContext';
import { CartContext } from '../../../context/CartContext';


export const ProductCard = ({ product }) => {
    const {_id, title, categoryName, image, price, discount, discountedprice, rating} = product
    const {handleWishlistAddition} = useContext(WishlistContext)
    const {handleCartAddition} = useContext(CartContext)

    const [wishlistAdded, setWishlistAdded] = useState(false);
    const [cartAdded, setCartAdded] = useState(false);

    const handleWishlistAdditionClick = () => {
      handleWishlistAddition(product)
      setWishlistAdded(true);
    }

    const handleCartAdditionCLick = () => {
      handleCartAddition(product)
      setCartAdded(true);
    }
    return (
      <div className="card pointer flex-se-column mg-s" key={_id}>
        <img src={image} alt={title} className="responsive-image" />
        <div className="card-description flex-sb-column mg-t-s">
          <div className="primary flex-column">
            <h4>{title}</h4>
            <div className="price m-text">
              <h6><strong>Rs {discountedprice}</strong></h6>
              <h6 className="light strikethrough">Rs {price}</h6>
              <h6 className="discount">({discount}% Off)</h6>
            </div>
            <button class="btn secondary-btn mg-xxs">View Details</button>
            <button className="btn primary-btn mg-xxs" onClick={handleWishlistAdditionClick} disabled={wishlistAdded}>{wishlistAdded ? "Added to Wishlist" : "Add to Wishlist"}</button>
            <button className="btn primary-btn mg-xxs" onClick={handleCartAdditionCLick} disabled={cartAdded} >{cartAdded ? "Added to Cart" : "Add to Cart"}</button>
          </div>
          {/* <button className="btn-icon solid-like wishlist">
            <i className="fa fa-heart"></i>
          </button> */}
        </div>
      </div>
    );
  };