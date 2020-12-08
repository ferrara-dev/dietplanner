
import {useLocation} from "react-router";
import {Route} from "react-router-dom"
import {useSelector} from "react-redux";
import {isEmpty, isLoaded} from "react-redux-firebase";

export default function PrivateRoute({children,...rest}){
    const auth = useSelector(state => state.firebase.auth);
    const isVerifying = !isLoaded(auth) && isEmpty(auth);
    const isAuthenticated = !isEmpty(auth) && isLoaded(auth);

}