import IngredientDetailsView from "../../../component/user/ingredientsearch/ingredientDetails";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../../component/common/modal/modal";
import {addIngredientToMeal, setQuantity} from "../../../../actions/nutrition";

const nutrientTypes = [
   "Total lipid (fat)", "Protein",
];

export default function IngredientDetails() {
    const currentIngredient = useSelector(state => state.nutrition.currentIngredient);
    const state = useSelector(state =>state);
    console.log(state)
    const dispatch = useDispatch();

    function changeQuantity (quantity) {
        dispatch(setQuantity(quantity));
    }

    function addToMeal () {
        dispatch(addIngredientToMeal(currentIngredient));
    }

    return <Modal>
        {!currentIngredient && <div>loading...</div> || <IngredientDetailsView
            ingredientDescription={currentIngredient.ingredient.description}
            nutritionData={currentIngredient.ingredient.foodNutrients}
            quantity={currentIngredient.quantity}
            changeQuantity={changeQuantity}
            addIngredient={addToMeal}
        />}
    </Modal>

}