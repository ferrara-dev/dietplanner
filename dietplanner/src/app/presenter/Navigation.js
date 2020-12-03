import React,{useEffect} from "react";
import TopbarView from "../component/navigation/topnav/TopbarView";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../actions/user";
import {useFirebase} from "react-redux-firebase";

export default function Navigation(){
    const firebase = useFirebase();
    function logout(event){
        debugger
        event.preventDefault();
        firebase.logout();
    }

    return <TopbarView onLogout={logout}/>
}