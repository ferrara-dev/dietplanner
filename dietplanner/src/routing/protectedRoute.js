import React from "react";
import {Redirect} from "react-router-dom";
import { isLoaded, isEmpty } from 'react-redux-firebase'
import {useSelector} from "react-redux";

function ProtectedRoute({ children,component : Component, ...rest }) {
    const auth = useSelector(state => state.firebase.auth);
    const isVerifying = !isLoaded(auth) && isEmpty(auth);
    const isAuthenticated = !isEmpty(auth) && isLoaded(auth);
    return (
        <React.Fragment>
            {
                (isVerifying && <div>loading...</div>)
            || (!isAuthenticated && <Redirect to={{pathname: "/login", state: {from: rest.location}}}/>)
            ||  children
            }
        </React.Fragment>
    );

}


export default ProtectedRoute;