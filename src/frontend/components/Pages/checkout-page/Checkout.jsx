import '../../Cards/checkout-card/checkout-card.css'
import { useContext, useState } from "react"
import { CheckoutContext } from "../../../context/CheckoutContext"
import { WishlistContext } from "../../../context/WishlistContext"
import NavgationTop from "../../navigation/NavigationTop"
import { CheckoutCard } from "../../Cards/checkout-card/CheckoutCard"

export const Checkout = () => {
    const {checkout} = useContext(CheckoutContext)
    const [quantityValues,setQuantityValues] = useState({})

    const handleQuantityChange = (productId,quantity) => {
      setQuantityValues((prevQuantityValues) => ({
        ...prevQuantityValues,[productId]:quantity
      }))
    }

  const calculateTotalPrice = () => {
      let totalPrice = 0;
      checkout.forEach((item) => {
          const quantity = quantityValues[item._id] || 1;
          const itemTotal = item.discountedprice * quantity;
          totalPrice+=itemTotal
      });
      return totalPrice
  }

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    checkout.forEach((item) => {
      const quantity = quantityValues[item._id] || 1;
      totalQuantity += quantity;
    });
    return totalQuantity;
  };
    return (
        <div>
            <NavgationTop/>
            <main className="wrapper">
                <div className="page-wrapper">
                <div className="flex-center flex-row-wrap mg-t-s">
                        <div className="flex-center flex-row-wrap mg-t-s mg-s">
                        {checkout.length > 0 ? (
                <>
                  {checkout.map((product) => (
                    <CheckoutCard key={product._id} product={product} quantity={quantityValues[product._id] || 1} onQuantityChange={handleQuantityChange} />
                  ))}
                  <div className="text-card flex-center flex-column padding-s" >
                    <h4>Order Summary</h4>
                    <p className="m-text mg-t-s">Total Price: Rs {calculateTotalPrice()}</p> 
                    <p className="m-text mg-t-s">Total Items : {checkout.length}</p>
                    <p className="m-text mg-t-s">Total Quantity : {calculateTotalQuantity()}</p>
                  </div>  
                </>
              ) : (
                <h2>Please add items from your Cart!</h2>
              )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}