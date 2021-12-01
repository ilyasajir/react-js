import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


const AdminViews = ()=> {
    return(
        <div className="w-full">
            <h1>Admin Views</h1>
        </div>
    )
}
AdminViews.propTypes = {}
AdminViews.defaultProps = {}

const mapStateToProps = (state)=> ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(AdminViews)