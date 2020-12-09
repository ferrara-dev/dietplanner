import IngredientDetailsView from "../../component/user/ingredientsearch/ingredientDetails";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../component/common/modal/modal";
import {resetCurrentIngredient, setIngredientQuantity} from "../../../actions/ingredient";
import {addIngredient} from "../../../actions/meal";
import {useHistory} from "react-router";

export default function IngredientDetails() {
    const history = useHistory();
    const currentIngredient = useSelector(state => state.currentIngredient);
    const state = useSelector(state =>state);
    console.log(state);

    const dispatch = useDispatch();

    function changeQuantity (quantity) {
        dispatch(setIngredientQuantity(quantity))
    }

    function addToMeal () {
        dispatch(addIngredient(currentIngredient));
        history.goBack();
    }

    return <Modal>
        {!currentIngredient && <div>loading...</div> || <IngredientDetailsView
            ingredientDescription={currentIngredient.ingredient.label}
            nutritionData={currentIngredient.ingredient.nutrients}
            quantity={currentIngredient.quantity}
            changeQuantity={changeQuantity}
            addIngredient={addToMeal}
        />}
    </Modal>

}