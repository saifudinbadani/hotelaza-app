
const cartReducer = (cartState, action) => {
    
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return {...cartState, products: action.payload}
        case 'LOAD_CART':
            return {...cartState, cart: action.payload } 
        case 'LOAD_WISHLIST':
            return {...cartState, cart: action.payload }        
        case 'HANDLE_CART':
             return {...cartState, cart: [...action.payload ]}
        case 'HANDLE_WISHLIST':
            return  {...cartState, wishlist: [...action.payload]}      
            default:
                return cartState;
    }
}



export {
    cartReducer
}