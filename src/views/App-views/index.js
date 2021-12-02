import React, {lazy, Suspense, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter,Switch,Route} from 'react-router-dom';
import AppHero from "../../components/layouts/header/AppHero";

import { Layout } from 'antd';
import {getToken} from "../../redux/actions/auth";

const { Header, Footer, Sider, Content } = Layout;


const AppViews = ({getToken})=> {
    useEffect(()=> {
        getToken()
    },[getToken])
    return(
        <Layout>
            <AppHero/>

            <Content style={{minHeight:"100vh"}} className={'container mx-auto w-full max-w-6xl px-4 py-6'}>
                <Suspense fallback={<div/>}>
                    <Switch>
                        <Route path="/product/:id" component={lazy(()=> import('./product/single'))}/>
                        <Route path="/product" component={lazy(()=> import('./product'))}/>
                        <Route path="/cart" component={lazy(()=> import('./cart'))}/>
                        <Route path="/checkout" component={lazy(()=> import('./checkout'))}/>
                        <Route path="/login" component={lazy(()=> import('./login'))}/>
                        <Route path="/register" component={lazy(()=> import('./register'))}/>
                        <Route path="/" component={lazy(()=> import('./home'))}/>
                    </Switch>
                </Suspense>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}
AppViews.propTypes = {
    getToken:PropTypes.func.isRequired
}
AppViews.defaultProps = {}

const mapStateToProps = (state)=> ({})
const mapDispatchToProps = {
    getToken
}

export default React.memo(withRouter(connect(mapStateToProps,mapDispatchToProps)(AppViews)));