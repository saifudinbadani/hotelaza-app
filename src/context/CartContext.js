import {
    useReducer, useContext, createContext
} from 'react';

import { cartReducer } from '../reducer/CartReducer';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        cart: [],
        wishlist: [],
    })

    return <CartContext.Provider value={{cartState, cartDispatch}}>
        {children}
    </CartContext.Provider>
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart }

