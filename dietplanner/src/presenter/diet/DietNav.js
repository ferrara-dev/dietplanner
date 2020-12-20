import UserProfileNavView from "../../view/user/profile/userProfileNav";
import React from "react";
import {useHistory, location} from "react-router-dom"
import DietNavView from "../../view/user/diet/DietNav";
import {useReduxState} from "../../helpers/hooks/useFirebaseState";

const routes = ["/diet/meal-plan", "/diet/category/:description", "/diet/category/:description/meal/:mealId"];

function route(index, param) {
    switch (index) {
        case 0 :
            return "/diet/meal-plan";
        case 1:
            return `/diet/category/${param[0]}`
        case 2:
            return `/diet/category/${param[0]}/meal/${param[1]}`
    }
}

export default function DietNav() {

    const [activeIndex, setActiveIndex] = React.useState(0);
    const history = useHistory();
    const currentCategory = useReduxState(["currentMealCategory"]);
    const currentMeal = useReduxState(["currentMeal"]);

    React.useEffect(() => {
        history.push(routes[activeIndex]);
        const a = history.listen((location) => {
            if (location.pathname === route(0)) {
                setActiveIndex(0);
            } else if (location.pathname === route(1, [currentCategory.description]))
                setActiveIndex(1);
            else if (location.pathname === route(2, [currentCategory.description, currentMeal.mealId]))
                setActiveIndex(2);
        });
        return a;
    }, []);


    React.useEffect(() => {
        if (activeIndex === 0)
            history.push(route(0))
        else if (activeIndex === 1)
            history.push(route(1, [currentCategory.description]))
        else if (activeIndex === 2)
            history.push(route(2, [currentCategory.description, currentMeal.mealId]))
        history.push(routes[activeIndex]);
    }, [activeIndex]);

    function onTabIndexChange(index) {
        if (index == 1 && !currentCategory.description)
            return;
        if (index == 2 && !currentMeal.mealId)
            return;
        else {
            setActiveIndex(index);
        }
    };

    return <DietNavView onIndexChange={onTabIndexChange} activeIndex={activeIndex}/>
};
