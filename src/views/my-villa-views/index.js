import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


const MyVillaViews = ()=> {
    return(
        <div className="w-full">
            <h1>My Villa Views</h1>
        </div>
    )
}
MyVillaViews.propTypes = {}
MyVillaViews.defaultProps = {}

const mapStateToProps = (state)=> ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(MyVillaViews)