
import axios from 'axios';


export const getWishlistApiCall = async (encodedToken) => {
    try {
        const response = await axios.get('/api/user/wishlist', {
            headers : {
                authorization: encodedToken
            }
        })
        if (response.status === 200 || response.status === 201) {
            return response.data.wishlist;
        }
    } catch (error) {
        console.log(error)
    } 
}


export const addToWishlistApiCall = async (product, encodedToken) => {

    try {
        const response = await axios.post('/api/user/wishlist', {
            product
        },{
            headers : {
                authorization: encodedToken
            }
        })
        if (response.status === 200 || response.status === 201) {
            return response.data.wishlist;
        }
    } catch (error) {
        console.log(error)
    }
}



export const removeFromWishlistApiCall = async (id, encodedToken) => {

    try {
        const response = await axios.delete(`/api/user/wishlist/${id}`,{
            headers: {
                authorization: encodedToken
            }
        })
        if (response.status === 200 || response.status === 201) {
            return response.data.wishlist;
        }
    } catch (error) {
        console.log(error)
    }
}



// export const addToWishlist = (cartState, action) => {
//     if (cartState.wishlist.includes(action.payload)) {
//         return {
//             ...cartState,
//             wishlist: [...cartState.wishlist]
//         }
//     } else {
//         return {
//             ...cartState,
//             wishlist: [...cartState.wishlist, ...products.filter(item => {
//                 return action.payload._id === item._id
//             })]
//         }
//     }
// }

// export const  removeFromWishlist = (cartState, action) => {
   
//     return {
//         ...cartState,
//         wishlist: [...cartState.wishlist.filter(item => {
//             return action.payload._id !== item._id
//         })]
//     }
// }
