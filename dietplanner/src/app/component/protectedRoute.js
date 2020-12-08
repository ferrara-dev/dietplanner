import React from "react";
import {Route, Redirect} from "react-router-dom";
import { isLoaded, isEmpty } from 'react-redux-firebase'
import {useSelector} from "react-redux";

function ProtectedRoute({ children,component : Component, ...rest }) {
    const auth = useSelector(state => state.firebase.auth);
    const isVerifying = !isLoaded(auth) && isEmpty(auth);
    const isAuthenticated = !isEmpty(auth) && isLoaded(auth);
    return (
        <Route
            {...rest}
            render={props =>   (isVerifying && <div>loading...</div>)
                || (!isAuthenticated && <Redirect to={{pathname: "/login", state: {from: props.location}}}/>)
                || <Component {...props}/>
            }
        />
    );
}


export default ProtectedRoute;