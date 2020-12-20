
import {Route, Switch} from "react-router-dom";
import React from "react";


export const paths = {
    mealPlan : "/meal-plan",
    createCategory : "/meal-plan/create-category",
    signup : "/signup",
    login : "/login",
    profile : "/profile",
    profileUpdate : "/profile/update",
}

export const routes = [

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