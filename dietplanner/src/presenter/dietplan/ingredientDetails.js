import IngredientDetailsView from "../../view/user/ingredientsearch/ingredientDetails";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../view/common/modal/modal";
import {setIngredientQuantity} from "../../model/actions/ingredient";
import {addIngredient} from "../../model/actions/meal";
import {useHistory} from "react-router";
import {useReduxState} from "../../helpers/hooks/useFirebaseState";

export default function IngredientDetails() {
    const history = useHistory();
    const currentIngredient = useSelector(state => state.currentIngredient);
    const currentMeal = useReduxState(["currentMeal"]);
    const dispatch = useDispatch();
    console.log(currentMeal, currentIngredient);
    function changeQuantity (quantity) {
        dispatch(setIngredientQuantity(quantity))
    }

    function addToMeal () {
        dispatch(addIngredient(currentIngredient));
        history.goBack();
    }

    return (!currentIngredient || ! currentMeal) && <div>loading...</div> ||
        <IngredientDetailsView
            ingredientDescription={currentIngredient.ingredient.label}
            nutritionData={currentIngredient.ingredient.nutrients}
            quantity={currentIngredient.quantity}
            ingredientId={currentIngredient.ingredient.foodId}
            changeQuantity={changeQuantity}
            addIngredient={addToMeal}
            image = {currentIngredient.ingredient.image}
            currentMeal={currentMeal}
            goBack={history.goBack}
        />


}