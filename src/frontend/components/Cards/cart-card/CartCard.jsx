import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { WishlistContext } from "../../../context/WishlistContext";
import { CheckoutContext } from "../../../context/CheckoutContext";



export const CartCard = ({ product }) => {
    const {_id, title, categoryName, image, price, discount, discountedprice, rating} = product
    const {handleCartRemoval} = useContext(CartContext)
    const {handleWishlistAddition} = useContext(WishlistContext)
    const {handleCheckoutAddition} = useContext(CheckoutContext)

    const handleMoveToWishlist = (item) => {
        handleWishlistAddition(item)
        handleCartRemoval(item)
    }

    const handleProceedToCheckout = (item) => {
      handleCheckoutAddition(item)
      handleCartRemoval(item)
    }
    
    return (
      <div className="card pointer flex-se-column mg-s" >
        <img src={image} alt={title} className="responsive-image" />
        <div className="card-description flex-sb-column">
          <div className="primary flex-column">
            <h4>{title}</h4>
            <div className="price m-text">
              <h6><strong>Rs {discountedprice}</strong></h6>
              <h6 className="light strikethrough">Rs {price}</h6>
              <h6 className="discount">({discount}% Off)</h6>
            </div>
            <button className="btn primary-btn mg-xs" onClick={() => handleMoveToWishlist(product)}>Move to Wishlist</button>
            <button className="btn primary-btn mg-xs" onClick={() => handleProceedToCheckout(product)}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    );
  };