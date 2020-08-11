import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';

const AlertBar = ({alerts}) => {
    return (
        <Fragment>
            {alerts != null && alerts.length > 0 && alerts.map((alert,index)=>(
            <Alert style={{marginBottom:'0.5em'}}  key={index} severity={alert.severity}>{alert.msg}</Alert>
            
            ))}
        </Fragment>

    )
}
const mapStateToProps = state => ({
    alerts:state.alert
})
export default connect(mapStateToProps,{})(AlertBar)
