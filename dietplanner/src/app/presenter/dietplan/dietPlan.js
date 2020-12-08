import Sidebar from "../../component/navigation/sidebar";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import UserProfile from "../Profile";
import MealPlan from "../nutrition/mealPlan";
import React from "react";
import MealPlanSummary from "./mealPlanSummary";
import MealEdit from "./mealEdit";
import {useSelector} from "react-redux";
import {useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../../helpers/hooks/usefirebaseAuth";

export default function DietPlan(){
    const {url, path} = useRouteMatch();
    const userUID = useFirebaseAuth().uid;

    useFirestoreConnect({
        collection : "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    });

    console.log(path);

    return (
        <div className="flex-container">

            <div className="user-page-container bg-danger">
                    <MealPlanSummary/>
            </div>
        </div>
    )
}