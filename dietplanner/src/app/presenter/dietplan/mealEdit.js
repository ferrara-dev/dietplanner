
import MealEditView from "../../component/user/nutrition/mealEditView";
import {useSelector} from "react-redux";
import {Grid} from "@material-ui/core"

export default function MealEdit() {
    const currentMeal = useSelector(state => state.nutrition.currentMeal);
    console.log(currentMeal);
    return <MealEditView currentMeal={currentMeal}></MealEditView>

}