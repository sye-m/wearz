import { SET_PRODUCTS } from './types.js';

export const getProducts = (searchTerm="",brands="",types="",price="") => async dispatch => {
    try{
    let res = await axios.get(`/getProducts?searchTerm=${searchTerm}&brands=${brands}&types=${types}`)
    let products = res.data.filteredProducts;
    dispatch({
        type:SET_PRODUCTS,
        payload:products
    })
    }
    catch(err){
        console.log(err.response.data);
    }
}