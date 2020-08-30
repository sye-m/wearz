import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string';
import { withRouter, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularLoader from './../loaders/CircularLoader';
import Moment from 'react-moment';
import { setAlert } from './../../actions/alert';
import { connect } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const useStyles = makeStyles((theme) => ({
    orderDetailsContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    displayOrder:{
        width: '85%',
        minHeight:'100%',
        padding: '20px',
        minWidth: '300px',
        borderRadius: '10px',
    },
    orderDetailsDescription:{
        display:'flex',
        fontWeight:'bold',
        borderBottom: '1px solid #dadce0',
    },
    orderDetails:{
        display:'flex',
        flexDirection:'column',
        marginTop:'10px',
    },
    orderInformation:{
        display: 'flex',
        borderRadius: '8px',
        border: '1px solid #dadce0',
        padding: '10px',
        margin: '10px 0px',
        '& div':{
            width:'50%',
            '& span':{
                display:'block'
            }
        }
    },
    productInformation:{
        border: '1px solid #dadce0',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px 0px',
        height: '300px',
        display:'flex'
    },
    productImage:{
        height: '100%',
        width: '40%',
        '& img':{
            height: '100%',
            borderRadius: '4px',
            objectFit: 'cover',
            width: '100%',
        }
    },
    orderedProductDetails:{
        display:'flex',
        flexDirection:'column',
        '& span':{
            display:'block',
            margin:'10px'
        }
    },
    ordersLink:{
        textDecoration: 'none',
        display: 'block',
        borderRadius: '4px',
        width: '100px',
        color:'#000000',
        height: '20px',
        padding: '10px',
        border: '1px solid #dadce0',
        whiteSpace: 'nowrap',
    }  

}))
const OrderDetails = ({setAlert}) => {
    useEffect(()=>{
        const getOrderDetails = async (orderId, orderedProductId) =>{
            try{
                const res = await axios.get(`/getOrderDetails?orderId=${orderId}&orderedProductId=${orderedProductId}`);
                console.log(res)
                setOrder(res.data.order)
            }
            catch(err){
                setAlert('Error fetching order details try reloading the page','error');
            }
        }
        let query = queryString.parse(location.search)
        let orderId = query.order_id;
        let orderedProductId = query.ordered_product_id;
        getOrderDetails(orderId,orderedProductId);
    },[]);

    const [order,setOrder] = useState();

    const classes = useStyles();

    return (
        <div className={classes.orderDetailsContainer}>
            <div className={classes.displayOrder}>
                <div className={classes.orderDetailsDescription}>
                    <h2>Order Details</h2>
                </div>
                {order ?  
                    <div className={classes.orderDetails}>
                        <div className={classes.orderInformation}>
                            <div>
                                <span><b>Shipping Address</b></span> 
                                <p>{`${order.shipping_address.name} 
                                    ${order.shipping_address.address_line_1} 
                                    ${order.shipping_address.address_line_2} 
                                    ${order.shipping_address.landmark} 
                                    ${order.shipping_address.state} 
                                    ${order.shipping_address.zip_code}`}
                                </p>
                            </div>

                            <div>
                                <span><b>Order Summary</b></span>
                                <span>Product Price: {order.product.price}</span>
                                <span>Total Items: {order.product.quantity}</span>
                                <span>Total Price: {order.product.price * order.product.quantity}</span>
                            </div>
                        </div>
                        <div className={classes.productInformation}>
                            <div className={classes.productImage}>
                                <img src={order.product.image} alt={order.product.name}/>
                            </div>
                            <div className={classes.orderedProductDetails}>
                                <span><b>Size</b>: {order.product.size}</span>
                                <span><b>Quantity</b>: {order.product.size}</span>
                                <span><b>Price</b>:{order.product.price}</span>
                                <span><b>Ordered on</b>: <Moment date={order.ordered_at} format="DD MMM YYYY" withTitle/> </span>
                            </div>
                        </div>
                    </div> : <CircularLoader loading={true}/>}
                    <Link to="/orders" className={classes.ordersLink}>
                        <ArrowBackIcon/>
                        <span>Back to orders</span>
                    </Link>
            </div>
        </div>
    )
}

export default connect(null,{setAlert})(withRouter(OrderDetails))
