import './style/css/App.css';
import React from "react";
import {Switch, Route} from "react-router-dom";

/// view presenters
import AppContent from "./appContent";
import DietPlan from "../presenter/dietplan/mealplan/dietPlan";
import MealEdit from "../presenter/dietplan/meal/mealEdit";
import Profile from "./Profile";

function App() {
    return (
            <AppContent>
                <Switch>
                    <Route exact path={["/meal-plan", "/meal-plan/create-category"]}>
                        <DietPlan/>
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
