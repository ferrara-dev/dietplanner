import React from "react";
import {useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../../helpers/hooks/usefirebaseAuth";
import useFirestoreData from "../../../helpers/hooks/useFirebaseState";
import {useDispatch, useSelector} from "react-redux";
import DietSummaryView from "../../component/user/dietplan/dietSummaryView";
import {setCurrentCategory} from "../../../actions/mealCategory";
import {resetCurrentIngredient} from "../../../actions/ingredient";

export default function DietPlan() {
    const userUID = useFirebaseAuth().uid;
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(state);

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

    return (!mealPlan && <div>...</div> ||
        <DietSummaryView chooseMeal={chooseCurrentCategory} mealPlan={mealPlan.mealCategories}/>);
};