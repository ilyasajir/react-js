import React,{lazy,Suspense} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter,Switch,Route} from 'react-router-dom';
import AppHero from "../../components/layouts/header/AppHero";


const AppViews = ()=> {
    return(
        <div className="w-full">
            <AppHero/>
            <div className="w-full min-h-screen mt-20">
                <Suspense fallback={<div className={'h-screen w-screen bg-red-500 bg-opacity-50 fixed top-0 left-0'}/>}>
                    <Switch>

                        <Route path="/wisata" component={lazy(()=> import('./wisata'))}/>
                        <Route path="/" component={lazy(()=> import('./home'))}/>
                    </Switch>
                </Suspense>
            </div>
        </div>
    )
}
AppViews.propTypes = {}
AppViews.defaultProps = {}

const mapStateToProps = (state)=> ({})
const mapDispatchToProps = {}

export default React.memo(withRouter(connect(mapStateToProps,mapDispatchToProps)(AppViews)));