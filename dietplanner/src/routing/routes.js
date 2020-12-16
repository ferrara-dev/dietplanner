import Sidebar from "../presenter/navigation/sidebar";
import UserProfile from "../presenter/Profile";
import IngredientSearch from "../presenter/dietplan/ingredientSearch";
import IngredientDetails from "../presenter/dietplan/ingredientDetails";
import {Route, Switch} from "react-router-dom";
import React from "react";
import DietPlan from "../presenter/dietplan/meal/dietPlan";
import CreateMealCategory from "../presenter/dietplan/createMealCategory";
import MealDetails from "../presenter/dietplan/meal/mealDetails";
import Update from "../presenter/update";
import ProtectedRoute from "./protectedRoute";
import PageLayout from "../view/common/content/pageRoot";
import MealPlanSummary from "../presenter/dietplan/meal/mealPlanSummary";

export const routes = [
    {
        path: "/home",
        exact: true,
        main: () => <UserProfile/>,
    },
    {
        path: "/home/profile",
        exact: true,
        main: () => <UserProfile/>,
    },
    {
        path: "/home/update",
        exact: true,
        main: () => <Update/>,
    },
    {
        path: "/home/meal-plan",
        main: () => <DietPlan/>,
        sidebar:  [
            {
                path: "/home/meal-plan",
                exact: true,
                main: () => <MealPlanSummary/>
            },
            {
                path: "/home/meal-plan/create-category",
                exact: true,
                main: () => <CreateMealCategory/>
            },
        ],
    },
    {
        path: "/home/mealplan/:category/edit",
        main: () => <MealDetails/>,
        exact: true,
        nested: [
            {
                path: "/home/mealplan/:category/edit/*/search",
                exact: true,
                main: () => <IngredientSearch/>
            },
            {
                path: "/home/**/ingredient/:fdcId",
                main: () => <IngredientDetails/>
            }
        ]
    },
    {
        path: "/home/**/ingredient/:fdcId",
        main: () => <IngredientDetails/>,
    }
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

export default function RenderRoutes() {
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