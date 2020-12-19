import {useSelector} from "react-redux";
import {isLoaded} from "react-redux-firebase";
import React from "react";
import MainAppLayout from "./common/layout/mainAppLayout";
import Navigation from "../presenter/navigation/Navigation";
import Sidebar from "../presenter/navigation/sidebar";
import {Route, Switch} from "react-router-dom";
import ProtectedRoute from "../routing/protectedRoute";
import Login from "../presenter/Login";
import Signup from "../presenter/Signup";
import App from "./App";
import {paths} from "../routing/routes"

export default function Main() {
    return (
        <AuthIsLoaded>
            <MainAppLayout>
                <Navigation/>
                <Switch>
                    <Route exact path={paths.login} component={Login}/>
                    <Route exact path={paths.signup} component={Signup}/>
                    <ProtectedRoute path="/">
                        <App/>
                    </ProtectedRoute>
                </Switch>
            </MainAppLayout>
        </AuthIsLoaded>
    );
}


function AuthIsLoaded({children}) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth))
        return <div>splash screen...</div>;
    else {
        return children
    }
}
