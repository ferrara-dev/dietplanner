import React,{useEffect} from "react";
import TopbarView from "../../view/navigation/TopbarView";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../model/actions/user";
import {isEmpty, useFirebase} from "react-redux-firebase";
import useFirebaseAuth from "../../helpers/hooks/usefirebaseAuth";
import {useHistory} from "react-router-dom";

export default function Navigation(){
    const dispatch = useDispatch();
    const auth = useFirebaseAuth();
    const history = useHistory();

    const handleChoice = (action) => (e) => {
        e.preventDefault();
        action();
    };

    function logout(){
        dispatch(logoutUser());

    }

    return <TopbarView onLogout={logout} isAuthenticated={!isEmpty(auth)} handleMenuChoice={handleChoice}/>
}


function navFactory(label, action, icon){
    return {label, action, icon}
}