import React,{ useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import getSymbolFromCurrency from 'currency-symbol-map'
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { getCartItems,updateCartProduct, deleteCartProduct } from './../../actions/cart';
const useStyles = makeStyles((theme) => ({
    cartContainer:{
        width: '100%',
        display: 'flex',
        flexWrap:'wrap',
        justifyContent: 'center',
    },
    displayCart:{
        margin: '20px 0px',
        width: '85%',
        height:'100%',
        padding: '20px',
        minWidth: '300px',
        border: '1px solid lightgray',
        borderRadius: '10px',
    },
    cartDescription:{
        display:'flex',
        borderBottom: '1px solid lightgray',
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
            width:'70px'
        }
    },
    cartProducts:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cartProduct:{
        maxHeight: '300px',
        height: '40%',
        minHeight: '200px',
        display: 'grid',
        gap:'1em',
        padding:'10px 0px',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        borderBottom:'1px solid lightgray',
        
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
        minWidth: '100px',
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
        ['@media(max-width:600px)']:{
            gridRowStart: '3',
            gridColumnStart: '1',
            gridColumnEnd:'3',
        }
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
        width:'90%'
    }
  }))
  
const Cart = ({cart,getCartItems,updateCartProduct, deleteCartProduct}) => {
    useEffect(()=>{
        getCartItems()
    },[cart.length])
    const classes = useStyles();

    const onProductChange = (e,positionInCart) => {
        let option = {[e.target.name]:e.target.value}
        updateCartProduct(positionInCart,option)
    }

    const getCartTotalPrice = () => {
        let cartTotal = 0;
        cart && cart.forEach((cartProduct)=>{
            cartTotal = cartTotal + cartProduct.product.price*cartProduct.pivot.quantity
        })
        return cartTotal;
    }

    const getCartTotalItems = () => {
        let cartTotalItems = 0;
        cart && cart.forEach((cartProduct)=>{
            cartTotalItems = cartTotalItems + cartProduct.pivot.quantity
        })
        return cartTotalItems;
    }
    return (
        <div className={classes.cartContainer} >
            <div className={classes.orderButton}>
                <Link to="/orders">
                <Button color="primary" variant="contained">
                    {`Order Total(${getCartTotalItems()}) items`}
                </Button>
                </Link>      
            </div>
            <div className={classes.displayCart}>
                <div className={classes.cartDescription}>
                    <p className={classes.cartTitle}>Shopping Cart</p>
                    <p className={classes.cartTotal}>Total = {`${getSymbolFromCurrency('INR')} ${Math.round(getCartTotalPrice())}`}</p>
                </div>
                <div className={classes.cartProducts}>
                    {cart && cart.length > 0 && cart.map((cartProduct, index)=>(
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
                                    onClick={()=>deleteCartProduct(cartProduct.product.id,index)}
                                >
                                    Delete
                                </Button>
                            </div>
                            <div className={classes.productPrice}>
                                {`${getSymbolFromCurrency('INR')} ${cartProduct.product.price}`}
                            </div>
                        </div>):''
                    ))}
                </div>
            </div>
        </div>
    )
}

Cart.propTypes = {
    cart:PropTypes.array.isRequired,
    getCartItems:PropTypes.func.isRequired,
    updateCartProduct:PropTypes.func.isRequired,
    deleteCartProduct:PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    cart:state.cart
})
export default connect(mapStateToProps,{ getCartItems,updateCartProduct,deleteCartProduct })(Cart)
