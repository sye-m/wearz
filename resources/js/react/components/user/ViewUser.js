import React,{ useEffect,useState,Fragment } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { editDefaultAddress,loadUser,deleteAddress } from './../../actions/auth';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles((theme) => ({
    viewUserContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    displayUser:{
        margin: '20px 0px',
        width: '85%',
        minHeight:'100%',
        minWidth: '300px',
        borderRadius: '10px',
    },
    userDescription:{
        display:'flex',
        fontWeight:'bold',
        padding:'10px 0px',
        borderBottom: '1px solid #dadce0',
    },
    userTitle:{
        fontSize:'1.5em',
        fontWeight:'bold',
    },
    userDetails:{
        minHeight:'100%',
        display:'flex',
        flexDirection:'column',
    },
    defaultAddressContainer:{
        border:'1px solid #dadce0',
        padding:'10px',
        margin:'10px',
        display:'flex',
        flexDirection:'column'
    },
    manageAddressContainer:{
        border:'1px solid #dadce0',
        padding:'0px 10px 10px 10px',
        margin:'10px',
        borderRadius:'8px',
        minWidth:'350px'

    },
    defaultAddressContainer:{
        border:'1px solid #dadce0',
        padding:'0px 10px 10px 10px',
        margin:'10px',
        borderRadius:'8px',
        '& span':{
            display:'block'
        }
    },
    contactInfoContainer:{
        border:'1px solid #dadce0',
        padding:'0px 10px 10px 10px',
        margin:'10px',
        borderRadius:'8px',
        '& span':{
            display:'block'
        }
    },
    addressOptionContainer:{
        display:'flex',
        margin:'10px 0px',
        '& label':{
            marginRight:'0px',
            width:'70%'
        }
    },
    addressOptions:{
        '& span':{
            display: '-webkit-box',
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        }  
    },
    editAddressButton:{
        width:'40px',
        height:'40px',
        backgroundColor:theme.palette.secondary.main,
        color:'#fff',
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
          },
        '& svg':{
            width:'0.8em',
            height:'0.9em'
        },
        borderRadius:'50%',
        margin:'5px',
        alignItems:'center',
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
    },
    deleteAddressButton:{
        width:'12%',
        minWidth:'20px',
        minHeight:'20px',
        maxWidth:'40px',
        maxHeight:'40px',
        backgroundColor:theme.palette.error.main,
        color:'#fff',
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
          },
        margin:'5px',
    },
    addAddressLink:{
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
    },
    addressSelectionHelperText:{
        marginBottom:'10px',
        '& svg':{
            top:'6px',
            position:'relative'
        }
    }

}))
const ViewUser = ({auth:{user,loading},editDefaultAddress, deleteAddress,loadUser}) => {
    useEffect(()=>{
        loadUser();
    },[])
    const [value, setValue] = useState(user && user.defaultAddress && user.defaultAddress.id);

    const classes = useStyles();

    const onAddressChange = (e)=>{
        let newValue = parseInt(e.target.value)
        setValue(newValue);
        editDefaultAddress(newValue);
    }
    return (
        <div className={classes.viewUserContainer}>
            {user && 
            <div className={classes.displayUser}>
                <div className={classes.userDescription}>
                    <span className={classes.userTitle}>User Details</span>
                </div>
                <div className={classes.userDetails}>
                    <div className={classes.contactInfoContainer}>
                        <h3>Contact Info</h3>
                        <span><b>Name</b>:{user.name}</span>
                        <span><b>Email-Id</b>: {user.email}</span>
                    </div>
                    <div className={classes.defaultAddressContainer}>
                        <h3>Default Address</h3>
                        {user.defaultAddress && 
                        <Fragment>
                        <span><b>Residence Name</b>: {user.defaultAddress.name}</span>
                        <br/>
                        <span><b>Addresss</b>: {`${user.defaultAddress.name} ${user.defaultAddress.address_line_1} ${user.defaultAddress.address_line_2} ${user.defaultAddress.landmark && user.defaultAddress.landmark} ${user.defaultAddress.state} ${user.defaultAddress.zip_code}`}</span>
                        <br/>
                        <span><b>Phone</b>: {user.defaultAddress.phone}</span>
                        </Fragment>}
                    </div>
                    <div className={classes.manageAddressContainer}>
                        <h3>
                        Manage Addresses
                        </h3>
                        <div className={classes.addressSelectionHelperText}><InfoIcon/><span>Select an address to set it as default address</span></div>
                        <div>
                            <RadioGroup aria-label="addresses" name="addressses" value={value} onChange={onAddressChange} >
                                {user.addresses.length > 0 && user.addresses.map((address,index)=>(
                                    <div className={classes.addressOptionContainer} key={index} >
                                        <FormControlLabel className={classes.addressOptions} value={address.id} control={<Radio />} label={`${address.name} ${address.address_line_1} ${address.address_line_2 } ${address.landmark && address.landmark} ${address.state} ${address.zip_code} ${address.phone}`} />
                                        <Link className={classes.editAddressButton} title="Edit" to={`${user.name}/address?a=${address.id}`}>
                                            <EditIcon/>
                                        </Link>
                                        
                                        {//if this is user's default address don't show the delete button 
                                        user.defaultAddress && user.defaultAddress.id != address.id && 
                                        <IconButton title="Delete" className={classes.deleteAddressButton} aria-label="delete" onClick={()=>deleteAddress(address.id)}><DeleteIcon/></IconButton>
                                        }
                                    </div>
                                ))}
                            </RadioGroup> 
                            <Link className={classes.addAddressLink} to={`${user.name}/new_address`} title="Add Address">
                                <AddIcon/>
                               <span>Add Address</span>
                            </Link>
                        </div>
                        
                    </div>

                </div>
            </div>
}
        </div>
    )
}

ViewUser.propTypes = {
    auth:PropTypes.object.isRequired,
    editDefaultAddress:PropTypes.func.isRequired,
    loadUser:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{editDefaultAddress, loadUser,deleteAddress })(ViewUser)
