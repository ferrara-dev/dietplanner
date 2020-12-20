import UserProfileNavView from "../../view/user/profile/userProfileNav";
import React from "react";
import {useHistory, location} from "react-router-dom"
import DietNavView from "../../view/user/diet/DietNav";
import {useReduxState} from "../../helpers/hooks/useFirebaseState";
const routes = ["/diet/meal-plan", "/diet/category/:description", "/diet/category/:description/meal/:mealId"];

function route(index,param){
    switch (index){
        case 0 :
            return "/diet/meal-plan";
        case 1:
            return `/diet/category/${param[0]}`
        case 2:
            return `/diet/category/${param[0]}/meal/${param[1]}`
    }
}
export default function DietNav(){

    const [activeIndex, setActiveIndex] = React.useState(0);
    const history = useHistory();
    const currentCategory = useReduxState(["currentMealCategory"]);
    const currentMeal = useReduxState(["currentMeal"]);
    debugger;
    React.useEffect(() => {
        history.push(routes[activeIndex]);
    }, []);

    history.listen((location) => {
        if(location.pathname === routes[0]){
            setActiveIndex(0);
        }
        else if(location.pathname === routes[1])
            setActiveIndex(1);
        else if(location.pathname === routes[2])
            setActiveIndex(2);
    });

    function onTabIndexChange(index) {
        if(index == 1 && !currentCategory.description)
            return;
        if(index == 2 && !currentMeal.mealId)
            return;
        history.push(route(index, [currentCategory.description,currentMeal.mealId]));
    };

    return <DietNavView onIndexChange={onTabIndexChange} activeIndex={activeIndex}/>
};
