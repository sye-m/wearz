import { SET_CART,CART_ERROR,LOADING_CART } from './types.js';
import { setAlert } from './alert';
import { setCookie,getCookie } from './../cookie';
//create new User cart when the user first registers successfully
export const newCart = (customerId) => async dispatch => {
    try{
        const res = await axios.post('/newUserCart',{'customerId':customerId});
        let cart =  []
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

export const newGuestCart = () =>{
    let cart = JSON.stringify([])
    setCookie('guestCart',cart)
}
//add new product to cart

const updateGuestCart = (cart) => {
    let guestCart = cart.map((product)=>({product:product.product.id,pivot:{size:product.pivot.size,quantity:product.pivot.quantity}}));
    guestCart = JSON.stringify(guestCart)
    setCookie('guestCart',guestCart);
}

//get the ids of all the products in the user's carts
export const getCart = () => async (dispatch,getState) => {
    try{
        if(getState().auth.user){
            let res = await axios.get('/getUserCart');
            let cart = res.data.cart;
            if(cart === null){
                dispatch(newCart(getState().auth.user.id))
            }
            else{
                dispatch({
                    type:SET_CART,
                    payload:cart
                })
            }
            
        }
        else{
            let guestCart = getCookie('guestCart');
            guestCart = JSON.parse(guestCart)
            dispatch({
                type:SET_CART,
                payload:guestCart
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

export const transferGuestCartProducts = () => async (dispatch) => {
    
}

export const addProductToCart = (productData) => async (dispatch,getState) => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let cart = getState().cart.products;
        //check if the product is already in the cart 
        let productIndex = cart.findIndex((cartProduct)=> 
        //check if existing product is of the same size if it is not of the same size add the product as a new product
        (cartProduct.product.id == productData.product.id && cartProduct.pivot.size == productData.pivot.size )|| 
        (cartProduct.product == productData.product.id && cartProduct.pivot.size == productData.pivot.size));
        if(productIndex < 0 ){
            if(getState().auth.user){
                const res = await axios.post(`/addToCart`,{'productId':productData.pivot.product_id,'size':productData.pivot.size,'quantity':productData.pivot.quantity},config);
                cart.unshift({...productData,pivot:{...productData.pivot,id:res.data.id,cart_id:res.data.cart_id}});
            }
            else{
                cart.unshift({...productData,pivot:{...productData.pivot}});
                
                updateGuestCart(cart);
            }
            dispatch({
                type:SET_CART,
                payload:cart
            })
        }
       else {
           //if product already exists in the cart just update the quantity of the product
           if(getState().auth.user){

           let id = cart[productIndex].pivot.id;
           let product_id = productData.product.id;
           let size = productData.pivot.size;
           let quantity = productData.pivot.quantity + cart[productIndex].pivot.quantity;
           dispatch(updateCartProduct(productIndex,{id,product_id,size,quantity}))
           }
           else {
            let product_id = productData.product.id;
            let size = productData.pivot.size;
            let quantity = productData.pivot.quantity + cart[productIndex].pivot.quantity;
            dispatch(updateCartProduct(productIndex,{product_id,size,quantity}))
           }
       }
    }
    catch(err){
        dispatch({
            type:CART_ERROR,
        })
        dispatch(setAlert('Error with adding items', 'error'));
    }
}

 
//get full details of the products in the cart
export const getCartItems = () => async (dispatch,getState) =>{
    try{
        let cart = getState().cart.products;
        //as we are adding the products directly to the cart state when the user clicks on add cart
        //we should only get details from the backend if the details are already not present in the cart
        let productIds = cart.map((cartItems)=>{
            if(typeof cartItems.product !== 'object'){//check to see if the product details are already present
                return cartItems.product
            }
        })  //get only the products ids
        if(productIds.length >0){
            dispatch({type:LOADING_CART});
            let products = [];
            let res = await axios.post('/getCartItems',{'productIds':productIds});
            products = res.data.products
            //replace the items with the just the product id with the complete details of the products
            cart = cart.map((cartItem,index)=>{
                let productItem = products.findIndex((product)=>product.id == cartItem.product);
                if(productItem >=0){
                return {...cartItem,product:products[productItem]}
                }
                else{
                    return cartItem
                }
            })
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


//update the product's size or quantity in the cart
export const updateCartProduct = (positionInCart,option) => async (dispatch,getState) => {
    try{
    let cart = getState().cart.products;
    let productItem = cart[positionInCart];//get the cart item
    productItem = {...productItem,pivot:{...productItem.pivot,...option}};
    cart[positionInCart] = productItem;//update the cart state locally
    if(getState().auth.user){
    await axios.put(`/updateUserCart`,{'cartProduct':productItem.pivot});
    }
    else{
        updateGuestCart(cart);
    }
    dispatch({
        type:SET_CART,
        payload:cart
        })
    }
    catch(err){
        dispatch({
            type:CART_ERROR,
        })
        dispatch(setAlert('Error with updating cart', 'error'));
    }
}

//delete the product in the cart
export const deleteCartProduct = (productDetails,positionInCart) => async (dispatch,getState) =>{
    try{
    let cart = getState().cart.products;
    cart.splice(positionInCart,1);
    dispatch({type:LOADING_CART});
    if(getState().auth.user){
    const res = await axios.delete(`/deleteProductFromCart`,{data:{productDetails}});
    }
    updateGuestCart(cart);
    dispatch({
        type:SET_CART,
        payload:cart
    })
    }
    catch(err){
        dispatch({
            type:CART_ERROR,
        })
        dispatch(setAlert('Error with removing product from cart', 'error'));
    }
} 