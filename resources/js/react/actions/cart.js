import { SET_CART,CART_ERROR } from './types.js';
import { setAlert } from './alert';

//create new User cart when the user first registers successfully
export const newCart = (customerId) => async dispatch => {
    try{
        const res = await axios.post('/newUserCart',{'customerId':customerId});
        console.log(res);
        let cart =  res.data.cart;
        console.log(cart)
        dispatch({
            type:SET_CART,
            payload:cart
        })
    }
    catch(err){
        dispatch({
            type:CART_ERROR,
        })
        dispatch(setAlert('Error with retreiving items', 'error'));

    }
}

//add new product to cart
export const addProductToCart = (productData) => async (dispatch,getState) => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let cart = getState().cart;
        //check if the product is already in the cart 
        let productIndex = cart.findIndex((cartProduct)=> 
        //check if existing product is of the same size if it is not of the same size add the product as a new product
        (cartProduct.product.id == productData.product.id && cartProduct.pivot.size == productData.pivot.size )|| 
        (cartProduct.product == productData.product.id && cartProduct.pivot.size == productData.pivot.size));
        console.log(productIndex)
        if(productIndex < 0 ){
            const res = await axios.post(`/addToCart`,{'productId':productData.pivot.product_id,'size':productData.pivot.size,'quantity':productData.pivot.quantity},config);
            console.log(res);
            cart.unshift(productData);
            dispatch({
                type:SET_CART,
                payload:cart
            })
        }
       else {
           //if product already exists in the cart just update the quantity of the product
           let product_id = productData.product.id;
           let size = productData.pivot.size;
           let quantity = productData.pivot.quantity + cart[productIndex].pivot.quantity;
           dispatch(updateCartProduct(productIndex,{product_id,size,quantity}))
       }
    }
    catch(err){
        dispatch({
            type:CART_ERROR,
        })
        dispatch(setAlert('Error with adding items', 'error'));
    }
}
 
//get the ids of all the products in the user's carts
export const getCart = () => async (dispatch,getState) => {
    try{
        if(getState().auth.user){
            let res = await axios.get('/getUserCart');
            console.log(res)

            let cart = res.data.cart;
            dispatch({
                type:SET_CART,
                payload:cart
            })
        }
       
    }
    catch(err){
        dispatch({
            type:CART_ERROR,
        })
        dispatch(setAlert('Error with retreiving items', 'error'));
    }
}

//get full details of the products in the cart
export const getCartItems = () => async (dispatch,getState) =>{
    //as we are adding the products directly to the cart state when the user clicks on add cart
    //we should only get details from the backend if the details are already not present in the cart
    let productIds = getState().cart.map((cartItems)=>{
        if(typeof cartItems.product !== 'object'){//check to see if the product details are already present
            return cartItems.product
        }
    })  //get only the products ids
    if(productIds.length >0){
    try{
        let products = [];
        let res = await axios.post('/getCartItems',{'productIds':productIds});
        products = res.data.products
        //replace the items with the just the product id with the complete details of the products
        let cart = getState().cart.map((cartItem,index)=>{
            let productItem = products.findIndex((product)=>product.id == cartItem.product);
            if(productItem >=0){
            return {...cartItem,product:products[productItem]}
            }
            else{
                return cartItem
            }
        })
        console.log(cart)
        dispatch({
            type:SET_CART,
            payload:cart
        })
    }
    catch(err){
        dispatch({
            type:CART_ERROR,
        })
        dispatch(setAlert('Error with retreiving items', 'error'));
    }
}
}

export const updateCartProduct = (positionInCart,option) => async (dispatch,getState) => {
    try{
    let cart = getState().cart;
    let productItem = cart[positionInCart];//get the cart item
    productItem = {...productItem,pivot:{...productItem.pivot,...option}};
    cart[positionInCart] = productItem;//update the cart state locally
    let res = await axios.put(`/updateUserCart`,{'cartProduct':productItem.pivot});
    dispatch({
        type:SET_CART,
        payload:cart
    })
}
catch(err){
    console.log(err.response)
}
}

export const deleteCartProduct = (productId,positionInCart) => async (dispatch,getState) =>{
    let cart = getState().cart;
    cart.splice(positionInCart,1);
    const res = await axios.delete(`/deleteProductFromCart/${productId}`);
    console.log(cart)
    dispatch({
        type:SET_CART,
        payload:cart
    })
} 