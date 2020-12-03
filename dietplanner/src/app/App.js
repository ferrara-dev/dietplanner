import './style/App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import {getFirebase} from "react-redux-firebase";
import {useDispatch, useSelector} from "react-redux";
import Navigation from "./presenter/Navigation";
/// view presenters
import Login from "./presenter/Login";
import Home from "./component/user/home";
import Signup from "./presenter/Signup";
import StickyFooter from "./component/navigation/footer";
import {createMealPlan} from "../actions/user";
import ProtectedRoute from "./component/protectedRoute";
import {getFirestore} from "redux-firestore";

function App() {
    const appState = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(appState)

    return (
        <div className="App">
            <Navigation/>
            <Switch>
                <ProtectedRoute path="/home" component={Home}>

                </ProtectedRoute>

                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route path="/home" component={Home}/>
            </Switch>
            <StickyFooter/>
        </div>
    );
}

export default App;
