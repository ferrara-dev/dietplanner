import MealEditView from "../../../view/user/dietplan/mealedit/mealEditView";
import React from "react";
import {useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../../helpers/hooks/usefirebaseAuth";
import {useRouteMatch, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useReduxState} from "../../../helpers/hooks/useFirebaseState";
import {setCurrentIngredient, setIngredientQuantity} from "../../../model/actions/ingredient";
import {removeIngredient, setMealTitle} from "../../../model/actions/meal";
import LoadingSpinner from "../../../view/common/loadingSpinner";
import MealDetailsSummary from "../../../view/user/dietplan/mealedit/mealDetailsSummary";


export default function MealEdit() {
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
    const currentMeal = useReduxState(["currentMeal"]);
    const mealPlan = useReduxState(["firestore", "data", "mealPlan"]);

    function editIngredient(ingredient, quantity) {
        dispatch(setCurrentIngredient(ingredient));
        dispatch(setIngredientQuantity(quantity));
        history.push(`${url}/ingredient/${ingredient.foodId}`);
    };

    function deleteIngredient(ingredient) {
        dispatch(removeIngredient(ingredient.foodId))
    };

    function setMealName(name) {
        dispatch(setMealTitle(name));
    }
    return (!currentMeal || !mealPlan) && <LoadingSpinner/> || <MealEditView
        mealTitle={currentMeal.title}
        mealPlan={mealPlan.mealCategories}
        editIngredient={editIngredient}
        ingredients={currentMeal.ingredients}
        deleteIngredient={deleteIngredient}
        setMealTitle={setMealName}
        goBack={history.goBack}
    />
}