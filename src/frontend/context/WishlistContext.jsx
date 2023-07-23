import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useAuth } from "./AuthContext";
import { initialWishlistState, wishlistReducer } from "../reducers/wishlistReducer";
import { wishlistActionTypes } from "../utils/constants";
import { addToWishlistService, getWishlistService, removeFromWishlistService } from "../services/wishlistService";
import { toast } from "react-hot-toast";

export const WishlistContext = createContext()

export const WishlistProvider =({children}) => {
    const {token} = useAuth();
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, initialWishlistState);
    
    const [loading,setLoading] = useState(false);

    const {DISPLAY_WISHLIST, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} = wishlistActionTypes;

    const getWishlist = async () => {
        setLoading(true);
        try {
            const response = await getWishlistService(token)
            const {status, data:{wishlist}} = response;
            if(status === 200) {
                wishlistDispatch({type: DISPLAY_WISHLIST, payload: wishlist})
            }
        }  catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false)
        }
    }

    const addToWishlist = async (product) => {
        try {
            const response = await addToWishlistService(product,token)
            const {status, data:{wishlist}} = response;
            if(status === 201) {
                wishlistDispatch({type: ADD_TO_WISHLIST, payload: wishlist})
                toast.success(`${product.title} added to Wishlist!`)
            }
        }  
        catch (error) {
            console.error(error);
            toast.error("Unable to add to Wishlist.")
        }
    }

    const removeFromWishlist = async ({_id: productId}) => {
        try {
            const response = await removeFromWishlistService(productId, token)
            const {status, data:{wishlist}} = response;
            if(status === 200) {
                wishlistDispatch({type: REMOVE_FROM_WISHLIST, payload: wishlist});
                toast.success(`${product.title} removed from Wishlist!`)
            }
        }
        catch (error) {
            console.error(error);
            toast.error("Unable to remove from Wishlist.")
        }
    }

    const itemExistsInWishlist = (productId) => wishlistState.wishlist.find((product) => product._id === productId);

    useEffect(() => {
        if(token){
            getWishlist();
        }
    },[token])

    return (
        <WishlistContext.Provider value={{
            wishlistState,wishlistDispatch,loading,itemExistsInWishlist,removeFromWishlist,addToWishlist
        }

        }>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext)