import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Home = ()=> {
    return(
        <div className="w-full">
            <h1>Home</h1>
        </div>
    )
}

Home.propTypes = {}
Home.defaultProps = {}

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(Home)