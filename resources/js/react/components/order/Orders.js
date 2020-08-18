import React,{ useEffect } from 'react'
import PropTypes from 'prop-types'
import { getOrders } from '../../actions/order';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import getSymbolFromCurrency from 'currency-symbol-map'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
    ordersContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
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
    orderActions:{
      gridRowStart:'3',
      gridColumnStart:'2',
      ['@media(max-width:600px)']:{
        gridRowStart: '3',
        gridColumnStart: '3'
    }
    }
}))

const Orders = ({orders,getOrders}) => {
    const classes = useStyles();
    useEffect(()=>{
        getOrders();
    },[])
    return (
        <div className={classes.ordersContainer}>
            <div className={classes.displayOrders}>
                <div className={classes.ordersDescription}>
                    <p className={classes.cartTitle}>Orders</p>
                </div>
                <div className={classes.orders}>
                    {orders.length > 0 && orders.map((order)=>(
                        order.map((product,index)=>(
                            <div className={classes.orderedProduct} key={index}>
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
                                    color="secondary"
                                    startIcon={<DeleteIcon />}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                        ))
                    
                    ))}
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
export default connect(mapStateToProps,{getOrders})(Orders)
