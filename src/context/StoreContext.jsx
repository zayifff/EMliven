import { createContext, useEffect, useState } from "react";
import { event_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 })) /* creates new event */
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })) /* if event is already exits */
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;  /* iniatial value */
        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                let itemInfo = event_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item];

            }
        }
        return totalAmount;
    }

    const contextValue = { /* here we can return values for each function or value */
        event_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider