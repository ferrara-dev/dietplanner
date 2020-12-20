import Sidebar from "../presenter/navigation/sidebar";
import UserDetails from "../presenter/profile/userDetails";
import IngredientSearch from "../presenter/dietplan/ingredient/ingredientSearch";
import IngredientDetails from "../presenter/dietplan/ingredientDetails";
import {Route, Switch} from "react-router-dom";
import React from "react";
import DietPlan from "../presenter/dietplan/mealplan/dietPlan";
import CreateMealCategory from "../presenter/dietplan/createMealCategory";
import MealDetails from "../presenter/dietplan/meal/mealDetails";
import Update from "../presenter/profile/update";
import ProtectedRoute from "./protectedRoute";
import PageLayout from "../view/common/content/contentLayout";
import MealPlanSummary from "../presenter/dietplan/mealplan/mealPlanSummary";
import MealEdit from "../presenter/dietplan/meal/mealEdit";

export const paths = {
    mealPlan : "/meal-plan",
    createCategory : "/meal-plan/create-category",
    signup : "/signup",
    login : "/login",
    profile : "/profile",
    profileUpdate : "/profile/update",
}

export const routes = [
    {
        path: ["/profile", "/"],
        exact: true,
        main: () => <UserDetails/>,
    },
    {
        path: "/update",
        exact: true,
        main: () => <Update/>,
    },
    {
        path: "/meal-plan",
        main: () => <DietPlan/>,
        sidebar:  [
            {
                path: "/meal-plan",
                exact: true,
                main: () => <MealPlanSummary/>
            },
            {
                path: "/meal-plan/create-category",
                exact: true,
                main: () => <CreateMealCategory/>
            },
        ],
    },
];

export function RenderContentSidebar() {
    return <React.Fragment>
        <Switch>
        {routes.map((route, index) => {
            const sidebar = route.sidebar
            if (sidebar)
                return sidebar.map((route, index) => {
                    return <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main/>}
                    />
                })
        })}
    </Switch>
    </React.Fragment>
};

export function RenderRoutes() {
    return <React.Fragment>
        <Switch>
            {routes.map((route, index) => {
                return <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main/>}
                />
            })}
        </Switch>
    </React.Fragment>
}