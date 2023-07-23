import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useAuth } from "./AuthContext";
import { cartReducer, initialCartState } from "../reducers/cartReducer";
import { cartActionTypes } from "../utils/constants";
import { addToCartService, getCartService, removeFromCartService, updateQuantityService } from "../services/cartService";
import { toast } from "react-hot-toast";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const {token} = useAuth();
    const [cartState, cartDispatch] = useReducer(cartReducer,initialCartState);
    const [loading,setLoading] = useState(false);

    const {DISPLAY_CART,ADD_TO_CART,REMOVE_FROM_CART,UPDATE_QUANTITY_IN_CART} = cartActionTypes;
    const deliveryCharges = 1500;

    const getCart = async () => {
        setLoading(true);
        try {
          const response = await getCartService(token);
          const {status,data: { cart }} = response;
          if (status === 200) {
            cartDispatch({ type: DISPLAY_CART, payload: cart });
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    const addToCart = async (product) => {
        try {
          const response = await addToCartService(product, token);
          const {status,data: { cart }} = response;
          if (status === 201) {
            cartDispatch({ type: ADD_TO_CART, payload: cart });
            toast.success(`${product.title} added to Cart!`);
          }
        } catch (error) {
          console.error(error);
          toast.error("Unable to add to cart.");
        }
      };

    const removeFromCart = async ({ _id: productId, title }) => {
        try {
          const response = await removeFromCartService(productId, token);
          const {status,data: { cart }} = response;
          if (status === 200) {
            cartDispatch({ type: REMOVE_FROM_CART, payload: cart });
            toast.success(`${title} removed from Cart!`);
          }
        } catch (error) {
          console.error(error);
          toast.error("Unable to remove from cart.");
        }
      };

    const updateQuantityInCart = async ({ _id: productId, title },actionType) => {
        try {
          const response = await updateQuantityService(productId,actionType,token);
          const {status,data: { cart }} = response;
          if (status === 200) {
            cartDispatch({ type: UPDATE_QUANTITY_IN_CART, payload: cart });
            toast.success(
              actionType === "increment"
                ? `Added another ${title} to the Cart!`
                : `Removed one ${title} from Cart!`
            );
          }
        } catch (error) {
          console.error(error);
          toast.error("Unable to update quantity.");
        }
      };

    const itemExistsInCart = (productId) => cartState.cart.find(((product) => product._id === productId));

    const isQuantityZeroInCart = (product) => product.qty === 0;

    const clearCart = () => {
        cartState.cart.forEach((product) => {
          removeFromCart(product);
        });
      };

    const totalDiscountedPrice = cartState.cart.reduce((acc,curr) => acc + (curr.discountedprice * curr.qty),0)

    const totalCheckoutAmount = totalDiscountedPrice+deliveryCharges;

    useEffect(() => {
        if(token){
            getCart();
        }
    },[token])

    return (
        <CartContext.Provider value={{
            cartState,cartDispatch,loading,addToCart,removeFromCart,updateQuantityInCart,itemExistsInCart,
            isQuantityZeroInCart,deliveryCharges,totalDiscountedPrice,totalCheckoutAmount,clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);