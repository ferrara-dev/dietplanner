import {useSelector} from "react-redux";
import {useFirestoreConnect} from "react-redux-firebase";
import {Redirect} from "react-router-dom";

export default function MealCategoryDetails() {
    const currentMealCategory = useSelector(state => state.currentMealCategory);

    return <div>Meal category details</div>
}