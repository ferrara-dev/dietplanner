import './style/css/App.css';
import React from "react";
import {Switch, Route} from "react-router-dom";
import {isLoaded} from "react-redux-firebase";
import {useSelector} from "react-redux";
import Navigation from "../presenter/navigation/Navigation";


/// view presenters
import Login from "../presenter/Login";
import Signup from "../presenter/Signup";
import ProtectedRoute from "../routing/protectedRoute";
import Sidebar from "../presenter/navigation/sidebar";
import RenderRoutes from "../routing/routes";
import MainAppLayout from "./style/mainAppLayout";


function App() {
    const state = useSelector(state => state);
    console.log(state);

    return (
        <AuthIsLoaded>
            <MainAppLayout>
                <Navigation/>
                <Sidebar/>
                <Switch>
                    <ProtectedRoute path="/home">
                        <RenderRoutes/>
                    </ProtectedRoute>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                </Switch>
            </MainAppLayout>
        </AuthIsLoaded>
    );
}
;

function AuthIsLoaded({children}) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth))
        return <div>splash screen...</div>;
    else {
        return children
    }
}

export default App;
