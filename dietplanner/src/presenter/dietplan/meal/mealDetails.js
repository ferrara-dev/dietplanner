import {useRouteMatch} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {setMealTitle, removeIngredient, resetCurrentMeal} from "../../../model/actions/meal";

import {useFirestore, useFirestoreConnect} from "react-redux-firebase";
import {setCurrentIngredient, setIngredientQuantity} from "../../../model/actions/ingredient";

import {addMealToCategory} from "../../../model/actions/mealCategory";

import {useReduxState} from "../../../helpers/hooks/useFirebaseState";
import MealDetailsSummary from "../../../view/user/dietplan/mealedit/mealDetailsSummary";
import MealEditView from "../../../view/user/dietplan/mealedit/mealEditView";
import PageLayout from "../../../view/common/content/contentLayout";
import useFirebaseAuth from "../../../helpers/hooks/usefirebaseAuth";
import LoadingSpinner from "../../../view/common/loadingSpinner";


export default function MealDetails() {
    let isMounted = false;

    React.useEffect(() => {
        isMounted = true;
        return () => {
            isMounted = false
        };
    }, []);

    const userUID = useFirebaseAuth().uid;

    useFirestoreConnect([{
        collection: "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    }, {
        collection: "users",
        doc: userUID,
        storeAs: "user"
    },
    ]);

    const {url} = useRouteMatch();
    const dispatch = useDispatch();
    const history = useHistory();
    const currentMeal = useReduxState(["currentMeal"])
    const currentCategory = useReduxState(["currentMealCategory"]);
    const mealPlan = useReduxState(["firestore", "data", "mealPlan"])
    console.log(currentMeal, mealPlan);

    function addMeal() {
        dispatch(addMealToCategory(currentMeal));
        history.push(`/meal-plan`);
    };

    return (!currentMeal || !mealPlan) && <div></div> || <MealDetailsSummary
        mealTitle={currentMeal.title}
        submitMeal={addMeal}
        currentMealPlan={mealPlan.mealCategories}
        goBack={history.goBack}
        ingredients={currentMeal.ingredients}
        mealPlan={mealPlan.mealCategories}
        categoryDescription={currentCategory.description}
    />
}