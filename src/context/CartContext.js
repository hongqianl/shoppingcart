import {useContext, createContext, useReducer } from "react"
import { CartReducer } from "../reducer/CartReducer";


const initContext = {
    productList: [],
    total: 0,
}

const CartContext = createContext(initContext);
export const CartProvider = ({children})=>{
    const [cart, dispatch] = useReducer(CartReducer, initContext);

    const addToCart = (productId) => {
        dispatch({
            type: "add",
            product: productId
        });
    }

    const removeFromCart = (productId) => {
        dispatch({
            type: "delete",
            product: productId
        });
    }

    const value = {
        productList: cart.productList,
        total: cart.total,
        addToCart,
        removeFromCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => {const context = useContext(CartContext);  return context;}