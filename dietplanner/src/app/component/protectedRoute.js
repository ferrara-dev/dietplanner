import React from "react";
import {Route, Redirect} from "react-router-dom";
import { isLoaded, isEmpty } from 'react-redux-firebase'
import useFirebaseAuth from "../../helpers/hooks/usefirebaseAuth";

function ProtectedRoute({ children,Component, ...rest }) {
    const auth = useFirebaseAuth();

    return (
        <Route
            {...rest}
            render={props =>

                isLoaded(auth) ? (
                    <div>
                        Loading...
                    </div>
                ) : isEmpty(auth) ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    );
}
export default ProtectedRoute;