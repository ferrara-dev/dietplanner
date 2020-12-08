import MealEditView from "../../component/user/nutrition/mealEditView";
import {Redirect} from "react-router";
import {useSelector} from "react-redux";

export default function MealEdit(){
    const nutrition = useSelector(state => state.nutrition);
    return <MealEditView currentMeal={nutrition.currentMeal}></MealEditView>
}