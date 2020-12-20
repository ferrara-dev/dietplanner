import {useReduxState} from "../helpers/hooks/useFirebaseState";
import {addNewMeal, deleteMealFromCategory, getCategoryById, setCurrentCategory} from "../model/actions/mealCategory";
import {createNewMeal, resetCurrentMeal, setCurrentMeal, setMealTitle} from "../model/actions/meal";
import {useDispatch} from "react-redux";
import React from "react";

export default function withCurrentCategory(WrappedChild) {
    return (props) => {
        const currentCategory = useReduxState(["currentMealCategory"]);
        const dispatch = useDispatch();

        const addMealToCategory = (mealTitle) => {
            dispatch(addNewMeal(mealTitle));
        };

        const chooseMealAlternative = (meal) => {
            dispatch(setCurrentMeal(meal));
        };

        const removeMealFromCategory = (meal) => {
            dispatch(deleteMealFromCategory(meal));

        };

        const childProps = {
            addMeal : addMealToCategory,
            chooseMeal : chooseMealAlternative,
            removeMeal : removeMealFromCategory,
            description: currentCategory.description,
            id: currentCategory.id,
            priority: currentCategory.priority,
            meals: currentCategory.meals,
            ...props
        };

        return <WrappedChild {...childProps}/>
    };
};
