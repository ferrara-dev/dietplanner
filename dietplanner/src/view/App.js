import './style/css/App.css';
import React from "react";
import {Switch, Route} from "react-router-dom";
import {isLoaded} from "react-redux-firebase";
import {useSelector} from "react-redux";
import {paths, RenderContentSidebar, RenderRoutes} from "../routing/routes"


/// view presenters

import AppContent from "./appContent";
import SchemeProvider from "./appLayoutProvider";
import {Layout} from "./common/layout/styled";
import LayoutBuilder, {Root} from "@mui-treasury/layout";
import DietPlan from "../presenter/dietplan/mealplan/dietPlan";
import MealPlanSummary from "../presenter/dietplan/mealplan/mealPlanSummary";
import CreateMealCategory from "../presenter/dietplan/createMealCategory";
import MealEdit from "../presenter/dietplan/meal/mealEdit";
import MealDetails from "../presenter/dietplan/meal/mealDetails";
import IngredientSearch from "../presenter/dietplan/ingredient/ingredientSearch";
import IngredientDetails from "../presenter/dietplan/ingredientDetails";



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
                </Switch>
                <Switch>
                    <Route exact path={"/meal-plan"}>
                        <MealPlanSummary/>
                    </Route>
                    <Route exact path={"/meal-plan/create-category"}>
                        <CreateMealCategory/>
                    </Route>
                    <Route exact path={"/meal/:description/edit"}>
                        <MealDetails/>
                    </Route>
                    <Route exact path={"/meal/:description/edit/search"}>
                        <IngredientSearch/>
                    </Route>
                    <Route exact path={"/meal/:description/edit/search/ingredient/:foodId"}>
                        <IngredientDetails/>
                    </Route>
                </Switch>
            </AppContent>
    );
}

export default App;
