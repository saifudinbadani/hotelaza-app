import { products } from "../backend/db/products";

export const addToCart = (cartState, action) => {
    if (cartState.cart.includes(action.payload)) {
        return {
            ...cartState,
            totalQty: cartState.totalQty + 1,
            totalPrice: cartState.totalPrice + action.payload.price,
            cart: [...cartState.cart]
        }
    } else {
        return {
            ...cartState,
            totalQty: cartState.totalQty + 1,
            totalPrice: cartState.totalPrice + action.payload.price,
            cart: [...cartState.cart, ...products.filter(item => {
                return action.payload._id === item._id
            })]
        }
    }
}

export const  removeFromCart = (cartState, action) => {
   
        return {
            ...cartState,
            totalQty: cartState.totalQty - 1,
            totalPrice: cartState.totalPrice - action.payload.price,
            cart: [...cartState.cart.filter(item => {
                return action.payload._id !== item._id
            })]
        }
}