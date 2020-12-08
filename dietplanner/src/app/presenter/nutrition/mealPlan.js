import MealPlanView from "../../component/user/nutrition/mealPlanView";
import {useFirestore, useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../../helpers/hooks/usefirebaseAuth";
import useFirestoreData from "../../../helpers/hooks/useFirebaseState";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentMeal} from "../../../actions/nutrition";
import {Link, Route} from "react-router-dom"
import CurrentMealPlan from "./currentMealPlan";
import React from "react";
import {useRouteMatch, Switch} from "react-router-dom";
import MealEdit from "./mealEdit";

export default function MealPlan({match}) {
    const {url, path} = useRouteMatch();
    const dispatch = useDispatch();
    const firestore = useFirestore();
    const currentMealPlan = useFirestoreData("mealPlan");
    const nutrition = useSelector(state => state.nutrition);
    const userUID = useFirebaseAuth().uid;

    const addMeal = (name) => {
        const newMeal = {meal: name, alternatives: []}
        const updatedPlan = currentMealPlan.mealPlan.concat(newMeal);
        const payload = {...currentMealPlan, mealPlan: updatedPlan};
        firestore.collection('mealPlans').doc(`${userUID}`).set(payload);
        console.log(name);
    }

    const chooseMeal = (meal) => {
        dispatch(setCurrentMeal(meal));
    }

    const addAlternative = (meal => {
    })

    return <div>
        <Switch>
            <Route path={`${path}/editMealPlan`}>
                <MealEdit/>
            </Route>
            <Route path={`${url}/:mealAlternative`}>
                <MealEdit/>
            </Route>
        </Switch>
    </div>
    /*
    return !currentMealPlan && <div>loading....</div> || <MealPlanView
        mealPlan={currentMealPlan.mealPlan}
        addMeal={addMeal}
        chooseMeal={chooseMeal}
        currentMeal={nutrition.currentMeal}
    />
     */
}
