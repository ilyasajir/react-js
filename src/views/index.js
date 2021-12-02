import React,{Suspense} from "react";
import { connect } from "react-redux";
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import Constants from "../constants";
import TheLayout from '../components/layouts/TheLayouts'
import AdminViews from "./Admin-views";
import VillasViews from "./Villas-views";
import MyVillaViews from "./my-villa-views";
import AppViews from "./App-views";


const Views = (props)=> {
    let {language} = props
    return(
        <TheLayout>
            <Suspense fallback={<div>loading....</div>}>
                <Switch>
                    {/*<Route path={Constants.ADMIN_PREFIX_PATH}>*/}
                    {/*    <AdminViews/>*/}
                    {/*</Route>*/}
                    <Route path={Constants.APP_PREFIX_PATH}>
                        <AppViews/>
                    </Route>
                </Switch>
            </Suspense>
        </TheLayout>
    )
}

const mapStateToProps = ({Theme})=> {
    const {language} = Theme
    return {language}
}
export default withRouter(connect(mapStateToProps)(Views));