import Sidebar from "../presenter/navigation/sidebar";
import UserProfile from "../presenter/Profile";
import MealPlan from "../presenter/nutrition/mealPlan";
import MealBank from "../presenter/dietplan/mealbank/mealBank";
import EditMeal from "../presenter/dietplan/mealbank/editMeal";
import IngredientSearch from "../presenter/nutrition/ingredientSearch";
import IngredientDetails from "../presenter/dietplan/mealbank/ingredientDetails";
import {Route, Switch} from "react-router-dom";
import React from "react";
import Modal from "../component/common/modal/modal";
import DietPlan from "../presenter/dietplan/dietPlan";
import CreateMealForm from "../component/form/createMealForm";
import CreateMealCategory from "../presenter/dietplan/createMealCategory";
import AddMeal from "../presenter/dietplan/addMeal";
import MealCategoryDetails from "../presenter/nutrition/mealCategoryDetails";
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
                path: "/home/mealPlan/createMealCategory",
                sidebar: () => <Sidebar/>,
                exact : true,
                main: () => <CreateMealCategory/>
            }
        ]
    },
    {
        path: "/home/mealplan/:category",
        exact: true,
        sidebar: () => <Sidebar/>,
        main: () => <MealCategoryDetails/>,
    },
    {
        path: "/home/mealplan/:category/add",
        sidebar: () => <Sidebar/>,
        main: () => <AddMeal/>,
        nested : [
            {
                path: "/home/mealplan/:category/add/search",
                sidebar: () => <Sidebar/>,
                exact : true,
                main: () => <IngredientSearch/>
            },
            {
                path: "/home/**/ingredient/:fdcId",
                sidebar: () => <Sidebar/>,
                main: () => <IngredientDetails/>
            }
        ]
    },
    {
        path: "/home/mealbank/createMeal",
        sidebar: () => <Sidebar/>,
        main: () => <EditMeal/>,
        nested : [
            {
                path: "/home/mealbank/createMeal/search",
                sidebar: () => <Sidebar/>,
                exact : true,
                main: () => <IngredientSearch/>
            },
            {
                path: "/home/**/ingredient/:fdcId",
                sidebar: () => <Sidebar/>,
                main: () => <IngredientDetails/>
            }
        ]
    },
    {
        path: "/home/**/ingredient/:fdcId",
        sidebar: () => <Sidebar/>,
        main: () => <IngredientDetails/>
    }

]
/*
 {
                path: "/home/mealbank/createMeal/:fdcId",
                sidebar: () => <Sidebar/>,
                main: () => <IngredientDetails/>
            },
            {
                path: "/home/mealbank/createMeal",
                sidebar: () => <Sidebar/>,
                exact : true,
                main: () => <IngredientSearch/>
            },
 */
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