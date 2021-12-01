import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const WisataPages = ()=> {
    return(
        <div className="w-full">
            <h1>Wisata Pages</h1>
        </div>
    )
}

WisataPages.propTypes = {}
WisataPages.defaultProps = {}

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(WisataPages)