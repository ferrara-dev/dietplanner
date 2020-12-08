import React, {useState} from "react";
import MealBankView from "../../../component/user/dietplan/mealBankView";
import {useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../../../helpers/hooks/usefirebaseAuth";
import {useDispatch, useSelector} from "react-redux";
import useFirestoreData from "../../../../helpers/hooks/useFirebaseState";
import LoadingSpinner from "../../../component/common/loadingSpinner";
import {setMeal} from "../../../../actions/nutrition";

export default function MealBank() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const userUID = useFirebaseAuth().uid;

    useFirestoreConnect({
        collection: "mealBank",
        doc: userUID,
        storeAs: "mealBank"
    });

    const mealBank = useFirestoreData("mealBank");

    const addMealToBank = (meal) => {

    }

    const currentMeal = useSelector(state => state.nutrition);


    const createNewMeal = (meal) => {
        dispatch(setMeal({
            id: '',
            category: '',
            title: '',
            ingredients: []
        }));
    }

    return <React.Fragment>
        {!mealBank && <LoadingSpinner/> || <MealBankView createMeal={createNewMeal} data={mealBank.meals}/>}
    </React.Fragment>
}