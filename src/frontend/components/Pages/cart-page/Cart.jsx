import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { CartCard } from "../../Cards/cart-card/CartCard"
import NavgationTop from "../../navigation/NavigationTop"


export const Cart = () => {
    const {cart}=useContext(CartContext)
    return (
        <div>
            <NavgationTop/>
            <main className="wrapper">
                <div className="page-wrapper">
                    <h3>Items in Cart : ({cart.length})</h3>
                    <div className="flex-center flex-row-wrap mg-t-s">
                        <div className="flex-center mg-t-s mg-s">
                        {cart.length > 0 ? (
                            cart.map((product) => (
                            <CartCard key={product._id} product={product} />
                            ))
                            ) : (
                                <h2>Your Cart is empty. Please add Items</h2>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}