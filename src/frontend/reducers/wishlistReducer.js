import { wishlistActionTypes } from "../utils/constants";

const {DISPLAY_WISHLIST, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} = wishlistActionTypes;

export const initialWishlistState = {
    wishlist : []
}

export const wishlistReducer = (state,{type,payload}) => {
    switch(type) {
        case DISPLAY_WISHLIST : 
            return {...state,wishlist:payload}
        case ADD_TO_WISHLIST : 
            const exclusiveWishlist = payload.reduce((acc,curr) => (
                acc.includes(curr) ? acc : [...acc,curr]
            ),[])
            return {...state,wishlist:[...exclusiveWishlist]}
        case REMOVE_FROM_WISHLIST : 
            return {...state,wishlist:payload}
        default : return state;
    }
}