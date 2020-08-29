import React,{ useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { orderProducts, getOrderedProducts } from '../../actions/order';
import { withRouter } from 'react-router-dom';
import AddressForm from './../forms/AddressForm';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const useStyles = makeStyles((theme) => ({
    ordersShippingContainer:{
        width: '100%',
        minHeight:'100%',
        display: 'flex',
        justifyContent: 'center',
    },
    orderShippingTitle:{
        fontSize: '1.5em',
        fontWeight: 'bold',
        width:'100%',
        borderBottom:'1px solid #dadce0',
        padding:'10px 0px'
    },
    displayShippingDetails:{
        margin: '20px 0px',
        width: '85%',
        minHeight:'100%',
        padding: '20px',
        minWidth: '300px',
        borderRadius: '10px',
    },
    formInput:{
        border: '0',
        margin: '0',
        padding: '0',
        position: 'relative',
        minWidth: '0',
        verticalAlign: 'top',
        display:'block',
        flex:'none',
        color:'black',
        marginBottom:'30px'
    },
    shippingAddress:{
        width:'45%',
        padding:'0px 2%',
        '@media(max-width:800px)':{
            order:'2',
            width:'100%',
            padding:'2% 0px',
            borderRight:'0px'
        }
    },
    customerAddress:{
        width:'45%',
        padding:'0px 2%',
        '@media(max-width:800px)':{
            order:'1',
            width:'100%',
            padding:'2% 0px',
            borderBottom:'1px solid #dadce0'
        }
    },
    customerAddressTitle:{
        fontSize:'1.2em',
        fontWeight:'bold'
    },
    shippingAddressTitle:{
        fontSize:'1.2em',
        fontWeight:'bold'
    },
    addressInformation:{
        display:'flex',
        flexWrap:'wrap'  
    },
}))

const ConfirmOrder = ({auth:{user},history,orderProducts,getOrderedProducts}) => {
    useEffect(()=>{
        const fromCookieGetProducts = async () =>{
            if(user){
                let orderedProducts = await getOrderedProducts();
                //check if the user has already selected products to buy if not then redirect them to cart page
                if(orderedProducts.length === 0){
                    history.push('/cart');
                }
            }
        }
        fromCookieGetProducts();    
    },[user])
    const [sameAsDefaultAddress, setSameAsDefaultAddress] = useState(false);

    const [shippingAddressForm,setShippingAddressForm] = useState({
        name:'',
        addrLine1:'',
        addrLine2:'',
        landmark:'',
        state:'',
        zipCode:'',
        phone:''
    })

    //set the address form state
    const onShippingInputChange = (e) => {
        setShippingAddressForm({...shippingAddressForm,[e.target.name]:e.target.value}); 
    }

    //set the shipping address as the user's default address
    const setShippingAsDefaultAddress = () => {
        let ifDefaultAddress = !sameAsDefaultAddress;
        setShippingAddress(ifDefaultAddress)
        setSameAsDefaultAddress(ifDefaultAddress);
    }

    //set the shipping address form state
    const setShippingAddress = (ifDefaultAddress) => {
            setShippingAddressForm({
                name:ifDefaultAddress ? user.defaultAddress.name : '',
                addrLine1:ifDefaultAddress ? user.defaultAddress.address_line_1 : '',
                addrLine2:ifDefaultAddress ? user.defaultAddress.address_line_2 : '',
                landmark:ifDefaultAddress ? user.defaultAddress.landmark : '',
                state:ifDefaultAddress ? user.defaultAddress.state : '',
                zipCode:ifDefaultAddress ? user.defaultAddress.zip_code : '',
                phone:ifDefaultAddress ? user.defaultAddress.phone : ''
            })
    }

    const orderConfirmed = async (e) => {
        e.preventDefault();
        let orderedProducts = await getOrderedProducts();
        orderProducts(orderedProducts,shippingAddressForm,sameAsDefaultAddress);
        history.push('/orders')
    }
    const {name,addrLine1, addrLine2, landmark, state, zipCode, phone} = shippingAddressForm;

    const classes = useStyles();
    return (
        <div className={classes.ordersShippingContainer}>
            <div className={classes.displayShippingDetails}>
                <div className={classes.orderShippingTitle}>
                    <span >Shipping Details</span>
                </div>
                <div className={classes.addressInformation}>
                    <div className={classes.shippingAddress}>
                        <p className={classes.shippingAddressTitle}>Shipping Address</p>
                        <form autoComplete="off" onSubmit={orderConfirmed}>
                            {user && user.defaultAddress && <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={setShippingAsDefaultAddress} name="defaultAddressCheckbox"/>}
                                label="Same as Current Address"/>
                            </FormGroup>}
                            <AddressForm formButtonText="Confirm Order" sameAsDefaultAddress={sameAsDefaultAddress} onChange={(e)=>onShippingInputChange(e)} address={shippingAddressForm}/>
                        </form>
                    </div>
                    <div className={classes.customerAddress}>
                        <p className={classes.customerAddressTitle}>Current Address</p>
                        {user && user.defaultAddress  ? 
                        <Fragment>
                            <p>Name:{user.name}</p>
                            <p>Phone: {user.defaultAddress.phone}</p>
                            <p>Addresss: {`${user.defaultAddress.name} ${user.defaultAddress.address_line_1} ${user.defaultAddress.address_line_2} ${user.defaultAddress.landmark && user.defaultAddress.landmark}`}</p>
                            <p>{`${user.defaultAddress.state} ${user.defaultAddress.zip_code}`}</p>
                         </Fragment>
                         :'No address'}
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

ConfirmOrder.propTypes = {
    orderProducts:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{orderProducts,getOrderedProducts})(withRouter(ConfirmOrder))
