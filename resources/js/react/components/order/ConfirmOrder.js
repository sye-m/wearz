import React,{ useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { orderProducts, getOrderedProducts } from '../../actions/order';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
        borderBottom:'1px solid lightgray'
    },
    displayShippingDetails:{
        margin: '20px 0px',
        width: '85%',
        minHeight:'100%',
        padding: '20px',
        minWidth: '300px',
        border: '1px solid lightgray',
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
        borderRight:'1px solid lightgray',
        '@media(max-width:800px)':{
            order:'1',
            width:'100%',
            padding:'2% 0px',
            borderRight:'0px'
        }
    },
    customerAddress:{
        width:'45%',
        padding:'0px 2%',
        '@media(max-width:800px)':{
            order:'2',
            width:'100%',
            padding:'2% 0px',
            borderBottom:'1px solid lightgray'
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
                <p className={classes.orderShippingTitle}>Shipping Details</p>
                <div className={classes.addressInformation}>
                    <div className={classes.shippingAddress}>
                        <p className={classes.shippingAddressTitle}>Shipping Address</p>
                        <form autoComplete="off" onSubmit={orderConfirmed}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={setShippingAsDefaultAddress} name="defaultAddressCheckbox"/>}
                                label="Same as Current Address"/>
                            </FormGroup>
                            <TextField disabled={sameAsDefaultAddress} fullWidth={true} className={classes.formInput} required name="name" label="Building Name" variant="outlined" onChange={(e)=>onShippingInputChange(e)} value={name}/>
                            <TextField disabled={sameAsDefaultAddress} type="text" fullWidth={true} className={classes.formInput}  required name="addrLine1" label="Address Line 1" variant="outlined" onChange={(e)=>onShippingInputChange(e)} value={addrLine1} autoComplete="shipping address-line1"/>
                            <TextField disabled={sameAsDefaultAddress} type="text" fullWidth={true} className={classes.formInput} required name="addrLine2" label="Address Line 2" variant="outlined" onChange={(e)=>onShippingInputChange(e)} value={addrLine2} autoComplete="shipping address-line2"/>
                            <TextField disabled={sameAsDefaultAddress} type="text" fullWidth={true} className={classes.formInput}  name="landmark" label="Landmark" variant="outlined" onChange={(e)=>onShippingInputChange(e)} value={landmark} />
                            <TextField disabled={sameAsDefaultAddress} type="text" fullWidth={true} className={classes.formInput} required name="state" label="State" variant="outlined" onChange={(e)=>onShippingInputChange(e)} value={state} autoComplete="shipping address-level1" />
                            <TextField disabled={sameAsDefaultAddress} type="text" fullWidth={true} className={classes.formInput} required name="zipCode" label="Zip Code" variant="outlined" onChange={(e)=>onShippingInputChange(e)} value={zipCode} autoComplete="shipping postal-code"/>
                            <TextField disabled={sameAsDefaultAddress} type="tel" fullWidth={true}  className={classes.formInput} name="phone" label="Phone No." placeholder="888 888 8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxLength="12"  title="Ten digits code" required variant="outlined" onChange={(e)=>onShippingInputChange(e)} value={phone} autoComplete="tel"/>    
                            <Button variant="contained" color="primary" type="submit">Confirm Order</Button> &nbsp;
                            <Button variant="contained" color="default" type="reset" disabled={sameAsDefaultAddress}>Clear Form</Button>
                        </form>
                    </div>
                    <div className={classes.customerAddress}>
                        <p className={classes.customerAddressTitle}>Current Address</p>
                        <p>Name:{user && user.name}</p>
                        <p>Phone: {user && user.defaultAddress.phone}</p>
                        <p>Addresss: {user && `${user.defaultAddress.name} ${user.defaultAddress.address_line_1} ${user.defaultAddress.address_line_2}`}</p>
                        <p>{user && `${user.defaultAddress.state} ${user.defaultAddress.zip_code}`}</p>
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
