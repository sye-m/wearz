import { GET_PRODUCTS } from './types.js';

export const getProducts = (searchTerm="",brands="",types="",price="") => async dispatch => {
    try{
    let res = await axios.get(`/getProducts?searchTerm=${searchTerm}&brands=${brands}&types=${types}`)
    let products = res.data.filteredProducts;
    dispatch({
        type:GET_PRODUCTS,
        payload:products
    })
    }
    catch(err){
        console.log(err.response.data);
    }
}