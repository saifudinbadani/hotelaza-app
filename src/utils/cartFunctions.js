import { products } from "../backend/db/products";



export const addToCart = (cartState, action) => {
    if (cartState.cart.includes(action.payload)) {
        return {
            ...cartState,
            cart: [...cartState.cart]
        }
    } else {
        return {
            ...cartState,
            cart: [...cartState.cart, ...products.filter(item => {
                return action.payload._id === item._id
            })]
        }
    }
}

export const removeFromCart = (cartState, action) => {
   
        return {
            ...cartState,
            cart: [...cartState.cart.filter(item => {
                return action.payload._id !== item._id
            })]
        }
}

export const cartQtyHandler = (cartState, action) => {
   if(cartState.cart.findIndex((item) => item._id === action.payload._id) !== -1){
    if(action.type === 'INCREMENT_CART'){
        
        return {
            ...cartState,
            cart: cartState.cart.map((item) => item._id === action.payload._id ? {...item, itemQty: item.itemQty + 1} : {...item})
        }
       
    } else{
        return {
            ...cartState,
            cart: cartState.cart.map((item) => item._id === action.payload._id && item.itemQty > 1 ? {...item, itemQty: item.itemQty - 1} : {...item})
        }
    }

   }


    
}



