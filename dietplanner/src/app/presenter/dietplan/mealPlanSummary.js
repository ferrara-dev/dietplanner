import {useDispatch, useSelector} from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, Container, Grid, Paper} from "@material-ui/core";
import CurrentMealPlanView from "../../component/user/nutrition/CurrentMealPlanView";
import FormDialog from "../../component/common/FormDialog";
import {Link, useRouteMatch} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useFirestore} from "react-redux-firebase";
import useFirestoreData from "../../../helpers/hooks/useFirebaseState";
import useFirebaseAuth from "../../../helpers/hooks/usefirebaseAuth";
import {setCurrentMeal} from "../../../actions/nutrition";
import DietSummaryView from "../../component/user/dietplan/dietSummaryView";

export default function MealPlanSummary(){
    const dispatch = useDispatch();
    const firestore = useFirestore();
    const currentMealPlan = useFirestoreData("mealPlan");
    const userUID = useFirebaseAuth().uid;
    const mealPlan = useSelector(state => state.nutrition.currentMeal);

    const addMeal = (name) => {
        const newMeal = {meal: name, alternatives: []}
        const updatedPlan = currentMealPlan.mealPlan.concat(newMeal);
        const payload = {...currentMealPlan, mealPlan: updatedPlan};
        firestore.collection('mealPlans').doc(`${userUID}`).set(payload);
        console.log(name);
    };

    const chooseMeal = (meal) => {
        dispatch(setCurrentMeal(meal));
    };

    return !currentMealPlan && <div></div> || <DietSummaryView mealPlan={currentMealPlan.mealPlan} addMeal={addMeal} chooseMeal={chooseMeal}/>
}