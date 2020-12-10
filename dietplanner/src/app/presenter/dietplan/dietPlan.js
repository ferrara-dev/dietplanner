import React from "react";
import {useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../../helpers/hooks/usefirebaseAuth";
import useFirestoreData from "../../../helpers/hooks/useFirebaseState";
import {useDispatch, useSelector} from "react-redux";
import DietSummaryView from "../../component/user/dietplan/dietSummaryView";
import {setCurrentCategory, removeCategory} from "../../../actions/mealCategory";
import {resetCurrentIngredient} from "../../../actions/ingredient";
import {setCurrentMeal} from "../../../actions/meal";

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
    }

    const removeMealCategory = (index) => {
        const categoryToRemove = mealPlan.mealCategories[index];
        dispatch(removeCategory(categoryToRemove))
    };

    return (!mealPlan && <div>...</div> || <DietSummaryView chooseMeal={chooseMealAlternative} deleteCategory={removeMealCategory} chooseCategory={chooseCurrentCategory}
                         mealPlan={mealPlan.mealCategories}/>);
};