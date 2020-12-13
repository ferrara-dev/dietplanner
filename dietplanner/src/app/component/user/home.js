import React from "react";
import {Switch, Route, useRouteMatch} from "react-router-dom"
import Sidebar from "../../../presenter/navigation/sidebar";
import "../../../view/style/css/home.css"
import {useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../../helpers/hooks/usefirebaseAuth";
import RenderRoutes from "../../../routing/routes";

export default function Home() {
    const {url, path} = useRouteMatch();

    const userUID = useFirebaseAuth().uid;

    useFirestoreConnect({
        collection : "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    });

    return (
        <div className="flex-container">
            <Sidebar/>
            <div className="user-page-container bg-danger">
                <RenderRoutes/>
            </div>
        </div>
    );
}