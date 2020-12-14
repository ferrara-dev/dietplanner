import Sidebar from "../presenter/navigation/sidebar";
import UserProfile from "../presenter/Profile";
import IngredientSearch from "../presenter/dietplan/ingredientSearch";
import IngredientDetails from "../presenter/dietplan/ingredientDetails";
import {Route, Switch} from "react-router-dom";
import React from "react";
import DietPlan from "../presenter/dietplan/dietPlan";
import CreateMealCategory from "../presenter/dietplan/createMealCategory";
import EditMeal from "../presenter/dietplan/editMeal";
import MealDetails from "../presenter/dietplan/mealDetails";

export const routes = [
    {
        path: "/home",
        exact: true,
        sidebar: Sidebar,
        main: () => <UserProfile/>
    },
    {
        path: "/home/profile",
        exact: true,
        sidebar: () => <Sidebar/>,
        main: () => <UserProfile/>
    },
    {
        path: "/home/mealplan",
        exact: true,
        sidebar: () => <Sidebar/>,
        main: () => <DietPlan/>,
        nested : [
            {
                path: "/home/mealPlan/category/:description",
                exact : true,
                main: () => <CreateMealCategory/>
            },
            {
                path: "/:meal",
                exact : true,
                main: () => <MealDetails/>
            }
        ]
    },
    {
        path: "/home/mealplan/:category/edit",
        sidebar: () => <Sidebar/>,
        main: () => <EditMeal/>,
        exact: true,
        nested : [
            {
                path: "/home/mealplan/:category/edit/*/search",
                exact : true,
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
        main: () => <IngredientDetails/>
    }
]

export default function RenderRoutes(){
    return <React.Fragment>
        <Switch>
            {routes.map((route,index) => {
                return <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                />
            })}
        </Switch>
        <Switch>
            {routes.map((route,index) => {
                const nestedRoutes = route.nested
                if(nestedRoutes)
                    return nestedRoutes.map((route,index) => {
                        return <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main />}
                        />
                    })
            })}
        </Switch>
    </React.Fragment>
}