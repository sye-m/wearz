import React,{ Fragment } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
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
        marginBottom:'15px'
    },
}))
const AddressForm = ({formButtonText,address,onChange,sameAsDefaultAddress}) => {
    const classes = useStyles();
    return (
            <Fragment>
                <TextField inputProps={{maxLength:60}} disabled={sameAsDefaultAddress} fullWidth={true} className={classes.formInput} required name="name" label="Building Name" variant="outlined" onChange={onChange} value={address.name}/>
                <TextField inputProps={{maxLength:60}} disabled={sameAsDefaultAddress} type="text" fullWidth={true} className={classes.formInput}  required name="addrLine1" label="Address Line 1" variant="outlined" onChange={onChange} value={address.addrLine1} autoComplete="shipping address-line1"/>
                <TextField inputProps={{maxLength:60}} disabled={sameAsDefaultAddress} type="text" fullWidth={true} className={classes.formInput} required name="addrLine2" label="Address Line 2" variant="outlined" onChange={onChange} value={address.addrLine2} autoComplete="shipping address-line2"/>
                <TextField inputProps={{maxLength:60}} disabled={sameAsDefaultAddress} type="text" fullWidth={true} className={classes.formInput}  name="landmark" label="Landmark" variant="outlined" onChange={onChange} value={address.landmark} />
                <TextField inputProps={{maxLength:60}} disabled={sameAsDefaultAddress} type="text" fullWidth={true} className={classes.formInput} required name="state" label="State" variant="outlined" onChange={onChange} value={address.state} autoComplete="shipping address-level1" />
                <TextField inputProps={{maxLength:6}} disabled={sameAsDefaultAddress} type="text" fullWidth={true} className={classes.formInput} required name="zipCode" label="Zip Code" variant="outlined" onChange={onChange} value={address.zipCode} placeholder="6 digits [0-9] PIN code" autoComplete="shipping postal-code"/>
                <TextField inputProps={{maxLength:10}} disabled={sameAsDefaultAddress} type="tel" fullWidth={true}  className={classes.formInput} name="phone" required variant="outlined" label="Phone No." onChange={onChange} value={address.phone} placeholder="10 digits number without prefixes" autoComplete="tel"/>    
                <Button variant="contained" color="primary" type="submit">{formButtonText}</Button> &nbsp;
            </Fragment>

    )
}

AddressForm.propTypes = {
    address:PropTypes.object.isRequired,
}

export default AddressForm
