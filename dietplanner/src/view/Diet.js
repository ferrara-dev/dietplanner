import React from "react";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import DietNav from "../presenter/diet/DietNav";
import MealDetails from "../presenter/dietplan/meal/mealDetails";
import CreateMealCategory from "../presenter/dietplan/createMealCategory";
import DietFooter from "./user/dietplan/mealplan/dietFooter";
import MealPlanTable from "./user/dietplan/mealplan/mealPlanTable"
import CurrentCategory from "./user/diet/currentCategoryView";
import CurrentCategoryDetails from "./user/diet/currentCategoryDetailsView";
import MealPlanSummary from "./user/dietplan/mealplan/mealPlanSummaryView";
import MealEdit from "../presenter/dietplan/meal/mealEdit";
import IngredientSearch from "../presenter/dietplan/ingredient/ingredientSearch";
import IngredientDetails from "../presenter/dietplan/ingredientDetails";

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
            <MealPlanTable/>
        </Route>
        <Route path={"/diet/category/:description/meal/:mealId"}>
            <MealEdit/>
        </Route>
        <Route path={"/diet/category/:description"}>
            <CurrentCategory/>
        </Route>
    </Switch>
}


function DietSidebar() {
    return <Switch>
        <Route exact path={"/diet/meal-plan"}>
            <MealPlanSummary/>
        </Route>
        <Route exact path={"/diet/meal-plan/create-category"}>
            <CreateMealCategory/>
        </Route>
        <Route exact path={"/diet/category/:description/meal/:mealId/search/ingredient/:foodId"}>
            <IngredientDetails/>
        </Route>
        <Route exact path={"/diet/category/:description/meal/:mealId/search"}>
            <IngredientSearch/>
        </Route>
        <Route exact path={"/diet/category/:description/meal/:mealId"}>
            <MealDetails/>
        </Route>

        <Route exact path={"/diet/category/:description"}>
            <CurrentCategoryDetails/>
        </Route>
    </Switch>
}