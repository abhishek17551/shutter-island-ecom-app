import { useContext } from 'react';
import { WishlistContext } from '../../../context/WishlistContext';
import { CartContext } from '../../../context/CartContext';


export const WishlistCard = ({ product }) => {
    const {_id, title, categoryName, image, price, discount, discountedprice, rating} = product
    const {handleWishlistRemoval} = useContext(WishlistContext)
    const {handleCartAddition} = useContext(CartContext)
    
    const handleMoveToCart = (item) => {
        handleCartAddition(item)
        handleWishlistRemoval(item)
    }

    return (
      <div className="card pointer flex-se-column mg-s">
        <img src={image} alt={title} className="responsive-image" />
        <div className="card-description flex-sb-column">
          <div className="primary flex-column">
            <h4>{title}</h4>
            <div className="price m-text">
              <h6><strong>Rs {discountedprice}</strong></h6>
              <h6 className="light strikethrough">Rs {price}</h6>
              <h6 className="discount">({discount}% Off)</h6>
            </div>
            <button className="btn primary-btn mg-xs" onClick={() => handleWishlistRemoval(product)}>Remove from Wishlist</button>
            <button className="btn primary-btn mg-xs" onClick={() => handleMoveToCart(product)}>Move to Cart</button>
          </div>
        </div>
      </div>
    );
  };