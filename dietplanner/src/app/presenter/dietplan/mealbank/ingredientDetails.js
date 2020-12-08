import IngredientDetailsView from "../../../component/user/ingredientsearch/ingredientDetails";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../../component/common/modal/modal";
import {setIngredientQuantity} from "../../../../actions/ingredient";
import {addIngredient} from "../../../../actions/meal";


export default function IngredientDetails() {
    const currentIngredient = useSelector(state => state.currentIngredient);
    const state = useSelector(state =>state);
    console.log(state);

    const dispatch = useDispatch();

    function changeQuantity (quantity) {
        dispatch(setIngredientQuantity(quantity))
    }

    function addToMeal () {
        dispatch(addIngredient(currentIngredient));
    }

    return <Modal>
        {!currentIngredient && <div>loading...</div> || <IngredientDetailsView
            ingredientDescription={currentIngredient.ingredient.description}
            nutritionData={currentIngredient.ingredient.nutrients}
            quantity={currentIngredient.quantity}
            changeQuantity={changeQuantity}
            addIngredient={addToMeal}
        />}
    </Modal>

}