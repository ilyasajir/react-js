import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Layout } from "antd";

const { Header } = Layout;
const AppHero = ()=> {
    return(
        <Header className={`w-full fixed top-0 left-0 h-20 bg-white`}>

        </Header>
    )
}
AppHero.propTypes = {}
AppHero.defaultProps = {}

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(AppHero)