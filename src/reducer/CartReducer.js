
import { addToCart, removeFromCart } from '../utils/cartFunctions';


const cartReducer = (cartState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
             return addToCart(cartState, action)
        case 'REMOVE_FROM_CART':
            return removeFromCart(cartState, action)
            default:
                return cartState;
    }
}



export {
    cartReducer
}