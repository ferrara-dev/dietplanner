import React,{useEffect} from "react";
import TopbarView from "../../view/navigation/TopbarView";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../model/actions/user";
import {isEmpty, useFirebase} from "react-redux-firebase";
import useFirebaseAuth from "../../helpers/hooks/usefirebaseAuth";

export default function Navigation(){
    const dispatch = useDispatch();
    const auth = useFirebaseAuth();

    function logout(event){
        event.preventDefault();
        dispatch(logoutUser());

    }

    return <TopbarView onLogout={logout} isAuthenticated={!isEmpty(auth)}/>
}