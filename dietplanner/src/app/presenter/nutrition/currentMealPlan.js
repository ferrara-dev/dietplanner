
import CurrentMealPlanView from "../../component/user/nutrition/CurrentMealPlanView";
import {setCurrentMeal} from "../../../actions/nutrition";
import {useDispatch, useSelector} from "react-redux";
import {useFirestore} from "react-redux-firebase";
import useFirestoreData from "../../../helpers/hooks/useFirebaseState";
import useFirebaseAuth from "../../../helpers/hooks/usefirebaseAuth";

export default function CurrentMealPlan(){
    const dispatch = useDispatch();
    const firestore = useFirestore();
    const currentMealPlan = useFirestoreData("mealPlan");
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

    const chooseAlternative = () => {

    }

    const createAlternative = (meal) => {
        dispatch(setCurrentMeal(meal));
    }

    return !currentMealPlan && <div>loading...</div> || <CurrentMealPlanView meals={currentMealPlan.mealPlan} chooseMeal={chooseMeal} addMeal={addMeal}/>;
};