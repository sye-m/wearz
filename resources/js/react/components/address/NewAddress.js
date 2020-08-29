import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AddressForm from './../forms/AddressForm';
import { addAddress } from '../../actions/auth';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    addAddressContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    displayAddress:{
        width: '85%',
        minHeight:'100%',
        minWidth: '300px',
    },
    addressDescription:{
        display:'flex',
        fontWeight:'bold',
        borderBottom: '1px solid #dadce0',
    },
    addressForm:{
        marginTop:'15px',
    }
    }))
const NewAddress = ({auth:{user},history,addAddress}) => {
    const [address,setAddress] = useState({
        id:'',
        name:'',
        addrLine1:'',
        addrLine2:'',
        landmark:'',
        state:'',
        zipCode:'',
        phone:''
    });
    const onAddressInputChange = (e) => {
        setAddress({...address,[e.target.name]:e.target.value}); 
    }

    const newAddress = (e) =>{
        e.preventDefault();
        addAddress(address);
        history.push(`/user/${user.name}`)
    }
    const classes = useStyles();
    return (
        <div className={classes.addAddressContainer}>
        <div className={classes.displayAddress}>
            <div className={classes.addressDescription}>
                <h2>Add Address</h2>
            </div>
            <div className={classes.addressForm}>
            <form onSubmit={newAddress}>
                <AddressForm formButtonText="Add address" address={address} sameAsDefaultAddress={null} onChange={(e)=>onAddressInputChange(e)}/ >
            </form>
            </div>
        </div>
        </div>
    )
}

NewAddress.propTypes = {
    auth:PropTypes.object.isRequired,
    addAddress:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps,{addAddress})(withRouter(NewAddress))
