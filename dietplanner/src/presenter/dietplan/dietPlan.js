import React from "react";
import {useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../helpers/hooks/usefirebaseAuth";
import useFirestoreData from "../../helpers/hooks/useFirebaseState";
import {useDispatch, useSelector} from "react-redux";
import DietSummaryView from "../../view/user/dietplan/mealplan/dietSummaryView";
import {setCurrentCategory, removeCategory} from "../../model/actions/mealCategory";
import {resetCurrentIngredient} from "../../model/actions/ingredient";
import {resetCurrentMeal, setCurrentMeal} from "../../model/actions/meal";

export default function DietPlan() {
    const userUID = useFirebaseAuth().uid;
    const dispatch = useDispatch();

    useFirestoreConnect({
        collection: "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    });

    React.useEffect(() => {
        dispatch(resetCurrentIngredient());
    }, []);

    const mealPlan = useFirestoreData("mealPlan");

    const chooseCurrentCategory = (index) => {
        dispatch(setCurrentCategory(mealPlan.mealCategories[index]))
    };

    const chooseMealAlternative = (meal) => {
        dispatch(setCurrentMeal(meal));
    };

    const addMealToCategory = (index) => {
        dispatch(setCurrentCategory(mealPlan.mealCategories[index]));
        dispatch(resetCurrentMeal());
    }

    const removeMealCategory = (index) => {
        const categoryToRemove = mealPlan.mealCategories[index];
        dispatch(removeCategory(categoryToRemove));
    };

    return (!mealPlan && <div>...</div> || <DietSummaryView chooseMeal={chooseMealAlternative} deleteCategory={removeMealCategory} chooseCategory={chooseCurrentCategory}
                         mealPlan={mealPlan.mealCategories}
                                                            addMealToCategory={addMealToCategory}
    />);
};