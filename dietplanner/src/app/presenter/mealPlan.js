import MealPlanView from "../component/user/mealPlanView";
import {useFirestore, useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../helpers/hooks/usefirebaseAuth";
import {useEffect} from "react";
import useFirestoreData from "../../helpers/hooks/useFirebaseState";


export default function MealPlan(){
    const userUID = useFirebaseAuth().uid;


    useFirestoreConnect({
        collection : "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    });

    const currentMealPlan = useFirestoreData("mealPlan");
    console.log(currentMealPlan);

    const firestore = useFirestore();

    const addMeal = (name) => {
        console.log(name);
    }

    return !currentMealPlan && <div>loading....</div> || <MealPlanView
        mealPlan={currentMealPlan.mealPlan} addMeal={addMeal}
    />
}
