import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


const VillasViews = ()=> {
    return(
        <div className="w-full">
            <h1>Admin Views</h1>
        </div>
    )
}
VillasViews.propTypes = {}
VillasViews.defaultProps = {}

const mapStateToProps = (state)=> ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(VillasViews)