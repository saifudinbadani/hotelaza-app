import { products } from "../backend/db/products";

export const addToWishlist = (cartState, action) => {
    if (cartState.wishlist.includes(action.payload)) {
        return {
            ...cartState,
            wishlist: [...cartState.wishlist]
        }
    } else {
        return {
            ...cartState,
            wishlist: [...cartState.wishlist, ...products.filter(item => {
                return action.payload._id === item._id
            })]
        }
    }
}

export const  removeFromWishlist = (cartState, action) => {
   
    return {
        ...cartState,
        wishlist: [...cartState.wishlist.filter(item => {
            return action.payload._id !== item._id
        })]
    }
}
