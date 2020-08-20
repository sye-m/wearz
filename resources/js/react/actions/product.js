import { SET_PRODUCT,LOADING_PRODUCT } from './types.js';

export const getProduct = (productId) => async dispatch => {
    try{
        dispatch({type:LOADING_PRODUCT});
        let res = await axios.get(`/getProduct/${productId}`);
        console.log(res)
        let product = res.data.product[0];
        product = product;
        dispatch({
            type:SET_PRODUCT,
            payload:product
        })
    }
    catch(err){
        console.log(err.response.data);
    }
   
}