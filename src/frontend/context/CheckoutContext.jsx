import { createContext, useState } from "react";

export const CheckoutContext = createContext()

export const CheckoutProvider = ({children}) => {
    const [checkout,setCheckout] = useState([])

    const handleCheckoutAddition = (item) => {
        setCheckout((prevItems) => [...prevItems,item])
    }

    const handleCheckoutRemoval = ((item) => {
        setCheckout((prevItems) => prevItems.filter((prevItem) => prevItem._id !== item._id))
    })

    return (
        <CheckoutContext.Provider value={{checkout,handleCheckoutAddition,handleCheckoutRemoval}}>
            {children}
        </CheckoutContext.Provider>
    )
}