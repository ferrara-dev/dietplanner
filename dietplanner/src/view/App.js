import './style/css/App.css';
import React from "react";
import {Switch, Route} from "react-router-dom";


import AppContent from "./appContent";
import MealEdit from "../presenter/dietplan/meal/mealEdit";
import Profile from "./Profile";
import Diet from "./Diet";

function App() {
    return (
            <AppContent>
                <Switch>
                    <Route path={"/diet"}>
                        <Diet/>
                    </Route>
                    <Route path={"/meal/*/edit"}>
                        <MealEdit/>
                    </Route>
                    <Route path={"/profile"}>
                        <Profile/>
                    </Route>
                </Switch>
            </AppContent>
    );
}

export default App;
