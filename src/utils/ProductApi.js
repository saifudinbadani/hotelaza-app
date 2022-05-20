import axios from 'axios';


export const GetProductApiCall = async() => {

    try {
        const response = await axios.get('/api/products')

        if(response.status===200||response.status===201){

            return response.data.products
        }
    } catch (error) {
        console.log(error)
    } 
}
