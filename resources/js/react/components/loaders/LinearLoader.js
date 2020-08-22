import React,{ Fragment } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress';
const LinearLoader = ({loading}) => {
    return (
        <Fragment>
            {loading && <LinearProgress />}
        </Fragment>
    )
}

LinearLoader.propTypes = {
    loading:PropTypes.bool.isRequired,
}

export default LinearLoader
