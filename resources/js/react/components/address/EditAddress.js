import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AddressForm from './../forms/AddressForm';
import queryString  from 'query-string';
import { withRouter } from 'react-router-dom';
import { updateAddress } from '../../actions/auth';
const useStyles = makeStyles((theme) => ({
    editAddressContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    displayAddress:{
        width: '85%',
        minHeight:'100%',
        minWidth: '300px',
        borderRadius: '10px',
    },
    addressDescription:{
        display:'flex',
        fontWeight:'bold',
        borderBottom: '1px solid lightgray',
    },
    addressForm:{
        marginTop:'15px',
    }
    }))
const EditAddress = ({auth:{user},history,location,updateAddress}) => {
    useEffect(()=>{
        const getAddress = async (addressId)=>{
            const res = await axios.get(`/getAddress/${addressId}`);
            const address = res.data.address;
            setAddress({
                id:address.id,
                name:address ? address.name : '',
                addrLine1:address ? address.address_line_1 : '',
                addrLine2:address ? address.address_line_2 : '',
                landmark:address ? address.landmark : '',
                state:address ? address.state : '',
                zipCode:address ? address.zip_code : '',
                phone:address ? address.phone : ''
            })
        }
        let query = queryString.parse(location.search);
        console.log(query)
        getAddress(query.a);
    },[])

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

    const editAddress = (e) =>{
        e.preventDefault();
        updateAddress(address)
        history.push(`/user/${user.name}`)

    }

    const classes = useStyles();
    
    return (
        <div className={classes.editAddressContainer}>
        <div className={classes.displayAddress}>
            <div className={classes.addressDescription}>
                <h2>Edit Address</h2>
            </div>
            <div className={classes.addressForm}>
            <form onSubmit={editAddress}>
                <AddressForm formButtonText="Save changes" address={address} sameAsDefaultAddress={null} onChange={(e)=>onAddressInputChange(e)}/ >
            </form>
            </div>
        </div>
        </div>
    )
}

EditAddress.propTypes = {
    updateAddress:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps,{updateAddress})(withRouter(EditAddress))
