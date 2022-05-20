import {
    useReducer, useContext, createContext, useEffect
} from 'react';
import { GetProductApiCall } from '../utils/ProductApi';
import { cartReducer } from '../reducer/CartReducer';


const CartContext = createContext();

const CartProvider = ({children}) => {
    useEffect(async () => {
        const res = await GetProductApiCall();
        cartDispatch({type:'LOAD_PRODUCTS', payload: res})
    },[])
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        cart: [],
        wishlist: [],
        products: []
    }, )

    return <CartContext.Provider value={{cartState, cartDispatch}}>
        {children}
    </CartContext.Provider>
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart }

