import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Checkout = ()=> {
    return(
        <div className="w-full border border-red-500">
            <h1>Checkout</h1>
        </div>
    )
}

Checkout.propTypes = {}
Checkout.defaultProps = {}

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)