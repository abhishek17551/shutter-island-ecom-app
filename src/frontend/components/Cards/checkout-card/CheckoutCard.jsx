import './checkout-card.css'
import { useContext, useState } from "react";
import { CheckoutContext } from "../../../context/CheckoutContext";
import { WishlistContext } from "../../../context/WishlistContext";

export const CheckoutCard = ({product}) => {
    const {_id, title,brand, categoryName, image, price, discount, discountedprice, rating} = product;
    const [itemQuantity,setItemQuantity] = useState(1)
    const {handleCheckoutRemoval} = useContext(CheckoutContext)
    const {handleWishlistAddition} = useContext(WishlistContext)

    const handleMoveToWishlist = (item) => {
        handleWishlistAddition(item)
        handleCheckoutRemoval(item)
    }

    const handleItemQuantity = (event) => {
        const quantity = event.target.value;
        setItemQuantity(quantity)
    }

    const quantityArray = [1,2,3,4,5,6,7]
    return (
        <div className="horizontal-card padding-s mg-m ">
            <div className="cart-item">
                <div className="cart-item-image">
                    <img src={image} alt={title} className="responsive-image" />
                </div>
                <div className="flex-row-wrap flex-sb">
                <div className="cart-item-details">
                    <div className="primary-details flex-sb-column">
                        <h3>{brand}</h3>
                        <p className="light">{title}</p>
                    </div>
                    <div>
                        <label htmlFor="quantity">Quantity :</label>
                        <select name="quantity" id="_id" className='mg-l-xs' value={itemQuantity} onChange={handleItemQuantity}>
                            {
                                quantityArray.map((item) => (
                                    <option value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div class="cart-item-price">
                   <h4><strong>Rs {discountedprice * itemQuantity}</strong></h4>
                    <h4 class="light strikethrough">Rs {price * itemQuantity}</h4>
                    <h4 class="discount">({discount}% Off)</h4>
                </div>
            </div>
            </div>
          <div className="horizontal-card-btns"> 
                <button className = "remove" onClick={() => handleCheckoutRemoval(product)}>Delete</button>
                <button className = "move-to-wishlist" onClick={() => handleMoveToWishlist(product)}>Move To Wishlist</button>
          </div>
        </div>
    )
}