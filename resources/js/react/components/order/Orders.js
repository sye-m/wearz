import React,{ useEffect } from 'react'
import PropTypes from 'prop-types'
import { getOrders,cancelOrder } from '../../actions/orders';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import getSymbolFromCurrency from 'currency-symbol-map'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CircularLoader from './../loaders/CircularLoader';
const useStyles = makeStyles((theme) => ({
    ordersContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    displayOrders:{
        width: '85%',
        minHeight:'100%',
        padding: '20px',
        minWidth: '300px',
        borderRadius: '10px',
    },
    ordersDescription:{
        display:'flex',
        fontWeight:'bold',
        borderBottom: '1px solid #dadce0',
    },
    orders:{
        minHeight:'100%',
        display:'flex',
        flexDirection:'column',
        marginTop:'10px'
    },
    orderedProduct:{
        border: '1px solid #dadce0',
        padding:'10px',
        margin:'10px 0px',
        borderRadius:'8px',
        maxHeight: '270px',
        height: '30%',
        minHeight: '200px',
        display: 'grid',
        gap:'1em',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        borderBottom:'1px solid lightgray',
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
        ['@media(max-width:650px)']:{
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
    productDetails:{
        gridRowStart: '2',
        gridColumnStart: '2',
        ['@media(max-width:650px)']:{
            gridRowStart: '3',
            gridColumnStart: '1',
            gridColumnEnd:'3',
        },
        '& p':{
            display:'inline',
            marginRight:'5px'
        }
    },
    productPrice:{
        fontWeight:'bold',
        fontSize:'1.2em',
        textAlign:'end',
        gridColumnStart:'4',
        ['@media(max-width:650px)']:{
            gridRowStart: '2',
            gridColumnStart: '3',
            textAlign:'start'
        }
    },
    orderActions:{
      gridRowStart:'3',
      gridColumnStart:'2',
      gridColumnEnd:'4',
      display:'flex',
      ['@media(max-width:650px)']:{
        gridRowStart: '3',
        gridColumnStart: '3',
        display:'block',
    }
    },
    cancelOrderButton:{
        backgroundColor:theme.palette.error.main,
        width: '100px',
        height:'40px',
        color:'#fff',
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
          },
    },
    viewOrderDetails:{
        padding: '10px',
        display: 'flex',
        width: '80px',
        height:'20px',
        whiteSpace:'nowrap',
        borderRadius: '4px',
        textDecoration: 'none',
        border: '1px solid #6a1b9a',
        color:'#000000',
        margin:'0px 10px 10px 0px',
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

const Orders = ({auth:{user},orders:{products,loading},getOrders,cancelOrder}) => {
    const classes = useStyles();
    useEffect(()=>{
        getOrders();
    },[user])
    return (
        <div className={classes.ordersContainer}>
            <div className={classes.displayOrders}>
                <div className={classes.ordersDescription}>
                    <h2>Orders</h2>
                </div>
                <div className={classes.orders}>
                    <CircularLoader loading={loading}/> 
                    {products.length > 0 ? products.map((order,orderIndex)=>(
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
                                <Link className={classes.viewOrderDetails} to={`/orders/view_order?order_id=${product.pivot.order_id}&ordered_product_id=${product.pivot.id}`}>
                                    View Order
                                </Link>
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
                                {`${getSymbolFromCurrency('INR')} ${Math.round(product.pivot.price*product.pivot.quantity)}`}
                            </div>
                        </div>
                        ))
                    
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

Orders.propTypes = {
    orders:PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    orders:state.orders,
    auth:state.auth

})
export default connect(mapStateToProps,{getOrders, cancelOrder})(Orders)
