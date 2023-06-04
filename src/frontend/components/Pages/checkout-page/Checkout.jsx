import { useContext } from "react"
import { CheckoutContext } from "../../../context/CheckoutContext"
import { WishlistContext } from "../../../context/WishlistContext"
import NavgationTop from "../../navigation/NavigationTop"
import { CheckoutCard } from "../../Cards/checkout-card/CheckoutCard"

export const Checkout = () => {
    const {checkout} = useContext(CheckoutContext)

    const totalPrice = checkout.reduce(
        (total, product) =>
          total + product.discountedprice * product.itemQuantity,
        0
      );
    return (
        <div>
            <NavgationTop/>
            <main className="wrapper">
                <div className="page-wrapper">
                <div className="flex-center flex-row-wrap mg-t-s">
                        <div className="flex-center mg-t-s mg-s">
                        {checkout.length > 0 ? (
                <>
                  {checkout.map((product) => (
                    <CheckoutCard key={product._id} product={product} />
                  ))}
                  <h4>Total Price: Rs {totalPrice}</h4> {/* Display the total price */}
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