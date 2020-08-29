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
import CircularLoader from './../loaders/CircularLoader';
const useStyles = makeStyles((theme) => ({
    ordersContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    orderTitle:{
        fontSize: '1.5em',
        fontWeight: 'bold',
        width:'40%'
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
        textAlign:'end',
        gridColumnStart:'4',
        ['@media(max-width:600px)']:{
            gridRowStart: '2',
            gridColumnStart: '3',
            textAlign:'start'
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

const Orders = ({auth:{user},orders:{products,loading},getOrders,cancelOrder}) => {
    const classes = useStyles();
    useEffect(()=>{
        getOrders();
    },[user])
    return (
        <div className={classes.ordersContainer}>
            <div className={classes.displayOrders}>
                <div className={classes.ordersDescription}>
                    <p className={classes.orderTitle}>Orders</p>
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
                    
                    )):!loading && (<div>
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
    orders:PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    orders:state.orders,
    auth:state.auth

})
export default connect(mapStateToProps,{getOrders, cancelOrder})(Orders)
