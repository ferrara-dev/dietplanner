import React from "react";
import {Switch, Route} from "react-router-dom"
import UserProfile from "../../presenter/Profile";
import Sidebar from "../navigation/sidebar";
import MealPlan from "../../presenter/mealPlan";

import "../style/home.css"


export default function Home() {
    return (
        <div className="flex-container">
            <Sidebar/>
            <div className="user-page-container bg-danger">
                <Switch>
                    <Route exact path="/home/profile" component={UserProfile}></Route>
                    <Route exact path="/home/mealplan" component={MealPlan}></Route>
                </Switch>
            </div>
        </div>
    );
}