import React,{useEffect} from "react";
import TopbarView from "../component/navigation/topnav/TopbarView";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../actions/user";

export default function Navigation(){
    const dispatch = useDispatch();

    function logout(event){
        debugger
        event.preventDefault();
        dispatch(logoutUser());
    }

    return <TopbarView onLogout={logout}/>
}