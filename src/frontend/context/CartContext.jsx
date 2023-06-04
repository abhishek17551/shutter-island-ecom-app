import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const handleCartAddition = (item) => {
        setCart((prevItems) => [...prevItems,item])
    }

    const handleCartRemoval = (item) => {
        setCart((prevItems) => prevItems.filter((prevItem) => prevItem._id !== item._id))
    }

    return (
        <CartContext.Provider value={{cart,handleCartAddition,handleCartRemoval}}>
            {children}
        </CartContext.Provider>
    )
}