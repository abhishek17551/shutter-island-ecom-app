import { useContext } from "react"
import './wishlist.css'
import NavgationTop from "../../navigation/NavigationTop"
import { WishlistContext } from "../../../context/WishlistContext"
import { WishlistCard } from "../../Cards/wishlist-card/WishlistCard"
import { CartContext } from "../../../context/CartContext"

export const Wishlist = () => {
    const {wishlist, handleWishlistRemoval}=useContext(WishlistContext)
    const {handleCartAddition} = useContext(CartContext)
    
    const handleMoveToCart = (item) => {
        handleCartAddition(item)
        handleWishlistRemoval(item)
    }
    return (
        <div>
            <NavgationTop/>
            <main className="wrapper">
                <div className="page-wrapper">
                    <h3>Items in Wishlist ({wishlist.length})</h3>
                    <div className="flex-center flex-row-wrap mg-t-s">
                        <div className="flex-center mg-t-s mg-s">
                        {wishlist.length > 0 ? (
                            wishlist.map((product) => (
                            <WishlistCard key={product._id} product={product} />
                            ))
                            ) : (
                                <h2>Your Wishlist is empty. Please add Items</h2>
                            )}

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}