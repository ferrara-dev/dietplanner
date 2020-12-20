import React from "react";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import DietNav from "../presenter/diet/DietNav";
import MealPlanSummary from "../presenter/dietplan/mealplan/mealPlanSummary";
import MealDetails from "../presenter/dietplan/meal/mealDetails";
import CreateMealCategory from "../presenter/dietplan/createMealCategory";
import DietPlan from "../presenter/dietplan/mealplan/dietPlan";
import DietFooter from "./user/dietplan/mealplan/dietFooter";
import MealPlanTableView from "./user/dietplan/mealplan/mealPlanTable"
export default function Diet() {
    return <React.Fragment>
        <DietNav/>
        <DietContent/>
        <DietSidebar/>
        <DietFooter></DietFooter>
    </React.Fragment>
}


function DietContent() {
    return <Switch>
        <Route exact path={["/diet/meal-plan", "/diet/meal-plan/create-category"]}>
            <MealPlanTableView/>
        </Route>
        <Route exact path={["/diet/meal-plan", "/diet/meal-plan/create-category"]}>
            <DietPlan/>
        </Route>
    </Switch>
}
/*
<Route exact path={"/meal/:description/edit/search"}>
    <IngredientSearch/>
</Route>
<Route exact path={"/meal/:description/edit/search/ingredient/:foodId"}>
    <IngredientDetails/>
</Route>
 */

function DietSidebar() {
    return <Switch>
        <Route exact path={"/diet/meal-plan"}>
            <MealPlanSummary/>
        </Route>
        <Route exact path={"/diet/meal-plan/create-category"}>
            <CreateMealCategory/>
        </Route>
        <Route exact path={"/diet/category/:description/meal/:mealId"}>
            <MealDetails/>
        </Route>

    </Switch>
}