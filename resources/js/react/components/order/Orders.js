import React,{ useEffect } from 'react'
import PropTypes from 'prop-types'
import { getOrders,cancelOrder } from '../../actions/order';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import getSymbolFromCurrency from 'currency-symbol-map'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    ordersContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    orderTotal:{
        fontSize:'1.3em',
        fontWeight:'bold',
        width:'60%',
        textAlign:'end',
        alignSelf:'center',
        color:[theme.palette.error.light]
    },
    orderTitle:{
        fontSize: '1.5em',
        fontWeight: 'bold',
        width:'40%'
    },
    displayOrders:{
        margin: '20px 0px',
        width: '85%',
        height:'100%',
        padding: '20px',
        minWidth: '300px',
        border: '1px solid lightgray',
        borderRadius: '10px',
    },
    ordersDescription:{
        display:'flex',
        fontSize:'1.5em',
        fontWeight:'bold',
        borderBottom: '1px solid lightgray',
    },
    orders:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    orderedProduct:{
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
    productDetails:{
        gridRowStart: '2',
        gridColumnStart: '2',
        ['@media(max-width:600px)']:{
            gridRowStart: '3',
            gridColumnStart: '1',
            gridColumnEnd:'3',
        },
        '& p':{
            display:'inline-block',
            marginRight:'5px'
        }
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
    orderActions:{
      gridRowStart:'3',
      gridColumnStart:'2',
      ['@media(max-width:600px)']:{
        gridRowStart: '3',
        gridColumnStart: '3'
    }
    },
    cancelOrderButton:{
        backgroundColor:theme.palette.error.main,
        color:'#fff',
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
          },
    }
}))

const Orders = ({orders,getOrders,cancelOrder}) => {
    const classes = useStyles();
    useEffect(()=>{
        getOrders();
    },[])
    return (
        <div className={classes.ordersContainer}>
            <div className={classes.displayOrders}>
                <div className={classes.ordersDescription}>
                    <p className={classes.orderTitle}>Orders</p>
                    <p className={classes.orderTotal}>Total Price</p>

                </div>
                <div className={classes.orders}>
                    {orders.length > 0 ? orders.map((order,orderIndex)=>(
                        order.map((product,productIndex)=>(
                            <div className={classes.orderedProduct} key={productIndex}>
                            <div className={classes.productImage}>
                                <img src={product.image} alt=""/>
                            </div>
                            <Link to={`/product/${product.id}`} className={classes.productName}>
                                {product.name}
                            </Link>
                            <div className={classes.productDetails}>
                                <p>
                                    Size:{product.pivot.size}
                                </p>
                                <p>
                                    Quantity:{product.pivot.quantity}
                                </p>
                            </div>
                            <div className={classes.orderActions}>
                                <Button
                                    variant="contained"
                                    className={classes.cancelOrderButton}
                                    startIcon={<DeleteIcon />}
                                    onClick={()=>cancelOrder(orderIndex,productIndex,product.pivot)}
                                >
                                    Cancel
                                </Button>
                            </div>
                            <div className={classes.productPrice}>
                                {`${getSymbolFromCurrency('INR')} ${Math.round(product.price*product.pivot.quantity)}`}
                            </div>
                        </div>
                        ))
                    
                    )):(<div>
                        No Products here. 
                        <Link to="/products">
                            <Button
                            variant="contained"
                            color="primary"
                            startIcon={<AddShoppingCartIcon/>}>Shop Now</Button>
                        </Link>
                  
                </div>)}
                </div>
            </div>
        </div>
    )
}

Orders.propTypes = {
    orders:PropTypes.array.isRequired,
}

const mapStateToProps = state =>({
    orders:state.orders
})
export default connect(mapStateToProps,{getOrders, cancelOrder})(Orders)
