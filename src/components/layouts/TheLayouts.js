import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import i18next from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import resource from '../../assets/lang/resource'


const TheLayout = (props) => {
    let {
        Theme,
        children
    } = props
    useEffect(()=>{
        i18next
            .use(Backend)
            .use(LanguageDetector)
            .use(initReactI18next)
            .init({
                lng: Theme.language,
                debug: false,
                resources: resource,
                interpolation: {
                    escapeValue: false
                }
            });
    },[])
    return(
        <div className={'w-full block relative'}>
            {children}
        </div>
    )
}

TheLayout.propTypes = {}
TheLayout.defaultProps = {}

const mapStateToProps = state => ({
    Theme: state.Theme
})
const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(TheLayout)