import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    circularLoader:{
        top:'40%',
        left:'50%',
        position:'absolute'
    }
}))
const CircularLoader = ({loading}) => {
    const classes = useStyles();
    return (
        <Fragment>
            {loading && <CircularProgress className={classes.circularLoader} />}
        </Fragment>
    )
}

CircularLoader.propTypes = {
    loading:PropTypes.bool.isRequired,
}

export default CircularLoader
