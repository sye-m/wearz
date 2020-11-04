import React,{ useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import getSymbolFromCurrency from 'currency-symbol-map'
import { getCartItems,updateCartProduct, deleteCartProduct } from './../../actions/cart';
import { setOrderedProducts } from './../../actions/orders';
import { Link,withRouter } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CircularLoader from './../loaders/CircularLoader';
const useStyles = makeStyles((theme) => ({
    cartContainer:{
        width: '100%',
        display: 'flex',
        flexWrap:'wrap',
        justifyContent: 'center',
    },
    displayCart:{
        width: '85%',
        minHeight:'100%',
        minWidth: '200px',
    },
    cartDescription:{
        display:'flex',
        borderBottom: '1px solid #dadce0',
    },
    cartTotal:{
        fontSize:'1.3em',
        fontWeight:'bold',
        width:'60%',
        textAlign:'end',
        alignSelf:'center',
        color:[theme.palette.error.light]
    },
    productInput:{
        width:'80px',
        marginRight:'10px',
        ['@media(max-width:700px)']:{
            width:'60px'
        }
    },
    cartProducts:{
        minHeight:'100%',
        display:'flex',
        flexDirection:'column',
        marginTop:'10px'
    },
    cartProduct:{
        border: '1px solid #dadce0',
        padding:'10px',
        margin:'10px 0px',
        borderRadius:'8px',
        maxHeight: '270px',
        minHeight: '200px',
        display: 'grid',
        gap:'1em',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        
    },
    cartTitle:{
        fontSize: '1.5em',
        fontWeight: 'bold',
        width:'40%'
    },
    productDetails:{
        width:'60%'
    },
    productPrice:{
        fontWeight:'bold',
        fontSize:'1.2em',
        gridColumnStart:'4',
        ['@media(max-width:700px)']:{
            gridRowStart: '2',
            gridColumnStart: '3',
        }
    },
    productImage:{
        width: '100%',
        minWidth: '200px',
        maxWidth: '300px',
        maxHeight:'200px',
        height: '100%',
        gridColumnStart: '1',
        gridColumnEnd: '1',
        gridRowStart: '1',
        gridRowEnd: '4',
        '& img':{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            borderRadius:'10px'
        },
        ['@media(max-width:600px)']:{
            minWidth:'100px',
            gridRowEnd: '3',
            gridRowStart: '1',
            gridColumnStart: '1',
            gridColumnEnd: '3',
        }

    },
    productName:{
        fontSize:'1.2em',
        textDecoration:'none',
        color:'black'
    },
    productActions:{
        gridRowStart: '2',
        gridColumnStart: '2',
        gridColumnEnd:'4',
        ['@media(max-width:600px)']:{
            gridRowStart: '3',
            gridColumnStart: '1',
            gridColumnEnd:'3',
        },
        
    },
    cartActions:{
      gridRowStart:'3',
      gridColumnStart:'2',
      ['@media(max-width:600px)']:{
        gridRowStart: '3',
        gridColumnStart: '3'
    }
    },
    orderButton:{
        marginTop:'10px',
        width:'90%',
        '& a':{
            textDecoration:'none',
            color:'#000000'
        }
    },
    productsLink:{
        padding: '10px',
        display: 'flex',
        width: 'fit-content',
        borderRadius: '4px',
        textDecoration: 'none',
        backgroundColor:theme.palette.primary.main,
        color:'#fff',
        margin:'10px 0px',
        '& svg':{
            fontSize:'1.2rem'
        }
    }
  }))
  
const Cart = ({auth,cart:{products,loading},history,getCartItems,updateCartProduct, deleteCartProduct,orderProducts,setOrderedProducts}) => {
    useEffect(()=>{
        getCartItems()
    },[products.length])
    const classes = useStyles();

    const onProductChange = (e,positionInCart) => {
        let option = {[e.target.name]:e.target.value}
        updateCartProduct(positionInCart,option)
    }

    const getCartTotalPrice = () => {
        let cartTotal = 0;
        if(products.length > 0){
        products.forEach((cartProduct)=>{
            cartTotal = cartTotal + cartProduct.product.price*cartProduct.pivot.quantity
        })
    }
        return cartTotal;
    }

    const getCartTotalItems = () => {
        let cartTotalItems = 0;
        products && products.forEach((cartProduct)=>{
            cartTotalItems = cartTotalItems + cartProduct.pivot.quantity
        })
        return cartTotalItems;
    }

    const orderCartProducts = () =>{
        //if user has logged in order the products and redirect the user
        if(auth.user && products.length > 0){
        setOrderedProducts();
        history.push('/confirm_order');
        }
        //if user has not logged in 
        else if(!auth.user && products.length > 0){
            history.push('/login?confirm_order=true');
        }
    }
    return (
        <div className={classes.cartContainer} >
            <div className={classes.orderButton}>
                <Button color="primary" variant="contained" onClick={orderCartProducts}>
                    {`Order Total(${getCartTotalItems()}) items`}
                </Button>
             
            </div>
            <div className={classes.displayCart}>
            <CircularLoader loading={loading}/>
                <div className={classes.cartDescription}>
                    <p className={classes.cartTitle}>Cart</p>
                    <p className={classes.cartTotal}>Total = {`${getSymbolFromCurrency('INR')} ${Math.round(getCartTotalPrice())}`}</p>
                </div>
                <div className={classes.cartProducts}>
                    {!loading && products.length > 0 ? products.map((cartProduct, index)=>(
                        typeof cartProduct.product =='object'?   //if the product does not exist do not display it
                        (<div className={classes.cartProduct} key={index}>
                            <div className={classes.productImage}>
                                <img src={cartProduct.product.image} alt={cartProduct.product.name}/>
                            </div>
                            <Link to={`/product/${cartProduct.product.id}`} className={classes.productName}>
                                {cartProduct.product.name}
                            </Link>
                           
                            <div className={classes.productActions}>
                                <FormControl className={classes.productInput}>
                                            <InputLabel id="productSize">Size</InputLabel>
                                            <Select
                                            name="size"
                                            labelId="productSize"
                                            value={cartProduct.pivot.size || ''}
                                            onChange={(e)=>onProductChange(e,index)}
                                            >
                                            {cartProduct.product && cartProduct.product.size && cartProduct.product.size.split(',').map((size,index)=>(
                                            <MenuItem key={index} value={size}>{size}</MenuItem>
                                            ))}
                                            </Select>
                                        </FormControl> 

                                    <FormControl className={classes.productInput}>
                                        <InputLabel id="productQuantity">Quantity</InputLabel>
                                        <Select
                                        name="quantity"
                                        labelId="productQuantiy"
                                        value={cartProduct.pivot.quantity || ''}
                                        onChange={(e)=>onProductChange(e,index)}
                                        >
                                        {cartProduct.product && Array.from(Array(10), (_, i) => i + 1).map((quantity,index)=>(
                                        <MenuItem key={index} value={quantity}>{quantity}</MenuItem>
                                        ))}
                                        </Select>
                                </FormControl>

                            </div>
                            <div className={classes.cartActions}>

                            <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<DeleteIcon />}
                                    onClick={()=>deleteCartProduct(cartProduct.pivot,index)}
                                >
                                    Delete
                                </Button>
                            </div>
                            <div className={classes.productPrice}>
                                {`${getSymbolFromCurrency('INR')} ${cartProduct.product.price}`}
                            </div>
                        </div>):''
                    )):!loading && (<div>
                            No Products here. 
                            <Link to="/products" className={classes.productsLink}>
                                <AddShoppingCartIcon/>
                                <span>Shop Now</span>
                            </Link>
                      
                    </div>)}
                </div>
            </div>
        </div>
    )
}

Cart.propTypes = {
    cart:PropTypes.object.isRequired,
    getCartItems:PropTypes.func.isRequired,
    updateCartProduct:PropTypes.func.isRequired,
    deleteCartProduct:PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    cart:state.cart,
    auth:state.auth,
})
export default connect(mapStateToProps,{ getCartItems,updateCartProduct,deleteCartProduct,setOrderedProducts })(withRouter(Cart))