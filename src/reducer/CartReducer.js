
import { addToCart, removeFromCart } from '../utils/cartFunctions';
import { addToWishlist, removeFromWishlist } from '../utils/wishlistFunctions';


const cartReducer = (cartState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
             return addToCart(cartState, action)
        case 'REMOVE_FROM_CART':
            return removeFromCart(cartState, action)
        case 'ADD_TO_WISHLIST':
            return  addToWishlist(cartState, action) 
        case 'REMOVE_FROM_WISHLIST':
            return removeFromWishlist(cartState, action)     
            default:
                return cartState;
    }
}



export {
    cartReducer
}