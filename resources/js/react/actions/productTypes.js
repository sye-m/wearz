import { SET_PRODUCT_TYPES } from './types.js';

export const getProductTypes = () => async dispatch => {
    try{
    let res = await axios.get('/getProductTypes')
    let productTypes = res.data.productTypes;
    dispatch({
        type:SET_PRODUCT_TYPES,
        payload:productTypes
    })
    }
    catch(err){
        console.log(err);
    }
}