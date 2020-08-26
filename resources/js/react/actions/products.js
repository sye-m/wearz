import { SET_PRODUCTS,LOADING_PRODUCTS } from './types.js';
import { setAlert } from './alert';

export const getProducts = (searchTerm="",brands="",types="",price="") => async dispatch => {
    try{
        dispatch({type:LOADING_PRODUCTS})
        let res = await axios.get(`/getProducts?searchTerm=${searchTerm}&brands=${brands}&types=${types}`)
        let products = res.data.filteredProducts;
        dispatch({
            type:SET_PRODUCTS,
            payload:products
        })
    }
    catch(err){
        dispatch(setAlert('Error displaying the products','error'));
    }
}