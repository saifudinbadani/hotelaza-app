
import axios from 'axios';


export const getCartApiCall = async (encodedToken) => {
    try {
        const response = await axios.get('/api/user/cart', {
            headers: {
                authorization: encodedToken
            }
        })

        if (response.status === 200 || response.status === 201) {
            return response.data.cart;
        }

    } catch (error) {
        console.log(error)
    }
}

export const addToCartApiCall = async (product, encodedToken) => {

    try {
        const response = await axios.post('/api/user/cart', {
            product
        }, {
            headers: {
                authorization: encodedToken
            }
        })

        if (response.status === 200 || response.status === 201) {
            return response.data.cart;
        }
    } catch (error) {
        console.log(error)
    }
}

export const removeFromCartApiCall = async (id, encodedToken) => {
    try {
        const response = await axios.delete(`/api/user/cart/${id}`, {
            headers: {
                authorization: encodedToken
            }
        })

        if (response.status === 200 || response.status === 201) {
            return response.data.cart;
        }

    } catch (error) {
        console.log(error)
    }
}

export const cartQtyHandlerApiCall = async (id, encodedToken, cartAction) => {

    try {
        const response = await axios.post(`/api/user/cart/${id}`, {
            action: {
                type: `${cartAction}`
            }
        },{
            headers: {
                authorization: encodedToken
            }
        })
        if (response.status === 200 || response.status === 201) {
            return response.data.cart;
        }

    } catch (error) {
        console.log(error)
    }
}






// FUNCTIONS DONE ON FRONTEND

// export const addToCart = (cartState, action) => {
//     if (cartState.cart.includes(action.payload)) {
//         return {
//             ...cartState,
//             cart: [...cartState.cart]
//         }
//     } else {
//         return {
//             ...cartState,
//             cart: [...cartState.cart, ...products.filter(item => {
//                 return action.payload._id === item._id
//             })]
//         }
//     }
// }

// export const removeFromCart = (cartState, action) => {

//     return {
//         ...cartState,
//         cart: [...cartState.cart.filter(item => {
//             return action.payload._id !== item._id
//         })]
//     }
// }

// export const cartQtyHandler = (cartState, action) => {
//     if (cartState.cart.findIndex((item) => item._id === action.payload._id) !== -1) {
//         if (action.type === 'INCREMENT_CART') {

//             return {
//                 ...cartState,
//                 cart: cartState.cart.map((item) => item._id === action.payload._id ? {
//                     ...item,
//                     itemQty: item.itemQty + 1
//                 } : {
//                     ...item
//                 })
//             }

//         } else {
//             return {
//                 ...cartState,
//                 cart: cartState.cart.map((item) => item._id === action.payload._id && item.itemQty > 1 ? {
//                     ...item,
//                     itemQty: item.itemQty - 1
//                 } : {
//                     ...item
//                 })
//             }
//         }

//     }
// }