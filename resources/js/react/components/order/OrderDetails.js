import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
const OrderDetails = ({ order, getOrderDetails }) => {
    return (
        <div>
            
        </div>
    )
}

OrderDetails.propTypes = {

}

const mapStateToProps = state => ({
    order:state.order
})
export default connect(mapStateToProps,{getOrderDetails})(OrderDetails)
