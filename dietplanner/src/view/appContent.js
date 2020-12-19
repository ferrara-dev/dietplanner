import LayoutBuilder, {Root, useLayoutCtx} from "@mui-treasury/layout";
import {dailyShoppingTheme} from "@mui-treasury/mockup/brands/dailyShopping";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Switch, Route} from "react-router-dom";
import React from "react";
import MealPlanSummary from "../presenter/dietplan/mealplan/mealPlanSummary";
import {paths} from "../routing/routes"
import CreateMealCategory from "../presenter/dietplan/createMealCategory";
import SchemeProvider, {AppLayoutContext, useSchemeContext} from "./appLayoutProvider";
import {Layout} from "./common/layout/styled";
import AppLayoutProvider from "./appLayoutProvider";
import {useLocation, useRouteMatch, matchPath} from "react-router-dom";


export default function AppContent({children}) {
    const location = useLocation();
    const scheme = defaultScheme(location);

    return (
        <Root theme={dailyShoppingTheme} scheme={scheme}>
            <>
                <CssBaseline/>
                <AppLayoutProvider>
                {children}
                </AppLayoutProvider>
            </>
        </Root>
    );
};


function defaultScheme(location){

    let reg = /\/meal(\/\w+)\/edit(?!\/\w+)/
    let reg2 = /\/meal(\/\w+)\/edit\/search(?=w*)/
    const scheme = LayoutBuilder();

    if(location.pathname === "/meal-plan"){
        scheme.configureHeader((builder => {
            builder
                .create('appHeader')
                .registerConfig('xs', {
                    position: 'relative',
                    clipped: true,
                    initialHeight: 56,
                })
        }))
        scheme.configureEdgeSidebar((builder) => {
            builder
                .create('edgeSidebar', {anchor: 'right'})
                .registerTemporaryConfig('xs', {
                    width: "55%",
                })
                .registerPermanentConfig('md', {
                    width: "55%", // recommended width
                    collapsible: false,
                    collapsedWidth: 64,
                    headerMagnetEnabled: true,
                });
        });
        return scheme;
    }

    else if(location.pathname==="/meal-plan/create-category"){
        scheme.configureEdgeSidebar((builder) => {
            scheme.configureHeader((builder => {
                builder
                    .create('appHeader')
                    .registerConfig('xs', {
                        position: 'relative',
                        clipped: false,
                        initialHeight: 56,
                    })
            }))

            builder
                .create('edgeSidebar', {anchor: 'right'})
                .registerTemporaryConfig('xs', {
                    width: "45%", // recommended width
                })
                .registerPermanentConfig('md', {
                    width: "35%", // recommended width
                    collapsible: false,
                    collapsedWidth: 64,
                    headerMagnetEnabled: true,
                });
        });
        return scheme;
    }

    else if(reg.test(location.pathname)){
        scheme.configureEdgeSidebar((builder) => {
            scheme.configureHeader((builder => {
                builder
                    .create('appHeader')
                    .registerConfig('xs', {
                        position: 'relative',
                        clipped: true,
                        initialHeight: 56,
                    })
            }))

            builder
                .create('edgeSidebar', {anchor: 'right'})
                .registerTemporaryConfig('xs', {
                    width: "70%",
                })
                .registerPermanentConfig('md', {
                    width: "45%",
                    collapsible: false,
                    collapsedWidth: 64,
                    headerMagnetEnabled: true,
                });
        });
        return scheme;
    }

    else if(reg2.test(location.pathname)){
        scheme.configureEdgeSidebar((builder) => {
            scheme.configureHeader((builder => {
                builder
                    .create('appHeader')
                    .registerConfig('xs', {
                        position: 'relative',
                        clipped: true,
                        initialHeight: 56,
                    })
            }))

            builder
                .create('edgeSidebar', {anchor: 'right'})
                .registerTemporaryConfig('xs', {
                    width: "70%",
                })
                .registerPermanentConfig('md', {
                    width: "45%",
                    collapsible: false,
                    collapsedWidth: 64,
                    headerMagnetEnabled: true,
                });
        });
        return scheme;
    }
    else {
        scheme.configureEdgeSidebar((builder) => {
            builder
                .create('edgeSidebar', {anchor: 'right'})
                .registerTemporaryConfig('xs', {
                    width: "1%",
                });
        });
    }
    return scheme;
}


function MealPlanSidebar() {
    return <Switch>
        <Route exact path={paths.mealPlan}>
            <MealPlanSummary/>
        </Route>
        <Route exact path={paths.createCategory}>
            <CreateMealCategory/>
        </Route>
    </Switch>
}