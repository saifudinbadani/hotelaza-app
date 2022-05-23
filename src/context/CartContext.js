import {
    useReducer,
    useContext,
    createContext,
    useEffect
} from 'react';
import {
    GetProductApiCall
} from '../utils/ProductApi';
import {
    cartReducer
} from '../reducer/CartReducer';
import {
    getCartApiCall
} from '../utils/cartFunctions';
import { getWishlistApiCall } from '../utils/wishlistFunctions';
import {
    useAuth
} from './AuthContext';


const CartContext = createContext();

const CartProvider = ({
    children
}) => {
    const {
        initialAuth: {
            token
        }
    } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            const products = await GetProductApiCall();
            console.log(products)
            cartDispatch({
                type: 'LOAD_PRODUCTS',
                payload: products
            })
        }
        fetchData();

    }, [])

    useEffect(() => {
        if (token) {
            const fetchData = async () => {
                const cart = await getCartApiCall(token);
                cartDispatch({
                    type: 'LOAD_CART',
                    payload: cart
                })
                const wishlist = await getWishlistApiCall(token);
                cartDispatch({
                    type: 'LOAD_WISHLIST',
                    payload: wishlist
                })
            }
            fetchData();
        }

    }, [token])

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

export {
    CartProvider,
    useCart
}