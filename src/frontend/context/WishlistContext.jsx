import { createContext, useState } from "react";

export const WishlistContext = createContext()

export const WishlistProvider =({children}) => {
    const [wishlist,setWishlist] = useState([])

    const handleWishlistAddition = (item) => {
        setWishlist((prevItems) => [...prevItems,item])
    }
    const handleWishlistRemoval = (item) => {
        setWishlist((prevItems) => prevItems.filter((prevItem) => prevItem._id !== item._id))
    }

    return (
        <WishlistContext.Provider value={{wishlist,handleWishlistAddition,handleWishlistRemoval}}>
            {children}
        </WishlistContext.Provider>
    )
}