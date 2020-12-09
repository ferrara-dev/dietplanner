import './style/App.css';
import React from "react";
import {Switch, Route} from "react-router-dom";
import {isLoaded} from "react-redux-firebase";
import {useSelector} from "react-redux";
import Navigation from "./presenter/Navigation";


/// view presenters
import Login from "./presenter/Login";
import Home from "./component/user/home";
import Signup from "./presenter/Signup";
import ProtectedRoute from "./component/protectedRoute";

function App() {
    //const auth = useSelector(state => state);
    //console.log(auth);
    return (
        <AuthIsLoaded>
            <div className="App">
                <Navigation/>
                <Switch>
                    <ProtectedRoute path="/home" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </div>
        </AuthIsLoaded>
    );
};

function AuthIsLoaded({children}) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>splash screen...</div>;
    return children
}

export default App;
