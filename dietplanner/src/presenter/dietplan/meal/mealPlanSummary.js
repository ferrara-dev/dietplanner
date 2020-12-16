import React from 'react'
import useFirebaseAuth from "../../../helpers/hooks/usefirebaseAuth";
import {useFirestoreConnect} from "react-redux-firebase";
import MealPlanSummaryView from "../../../view/user/dietplan/mealplan/mealPlanSummaryView";
import {resetCurrentMealCategory} from "../../../model/actions/mealCategory";
import {useDispatch} from "react-redux";
import {useReduxState} from "../../../helpers/hooks/useFirebaseState";
import PageLayout from "../../../view/common/content/pageRoot";

export default function MealPlanSummary(){
    const userUID = useFirebaseAuth().uid;
    const dispatch = useDispatch();

    useFirestoreConnect([{
        collection : "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    },{
        collection : "users",
        doc: userUID,
        storeAs: "user"
    },
    ]);

    const mealPlan = useReduxState(["firestore", "data", "mealPlan"]);
    const resetMealCategory = () => {
        dispatch(resetCurrentMealCategory());
    };

    return    !mealPlan && <div>...</div> || <MealPlanSummaryView
        mealPlan={mealPlan.mealCategories}
        resetCurrentMealCategory={resetMealCategory}
    />

}