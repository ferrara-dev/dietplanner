import Modal from "../../view/common/modal/modal";
import MealDetailsView from "../../view/user/dietplan/meal/mealDetailsView";
import {useReduxState} from "../../helpers/hooks/useFirebaseState";


export default function MealDetails() {
    const currentMealTitle = useReduxState(['currentMeal', "title"]);
    const currentMealIngredients = useReduxState(['currentMeal', 'ingredients']);
    const currentCategoryDescription = useReduxState(['currentMealCategory', 'description']);
    console.log(currentMealIngredients);

    const editMeal = () => {

    };

    return <Modal>
        <MealDetailsView
            categoryDescription={currentCategoryDescription}
            title={currentMealTitle}
            ingredients={currentMealIngredients}
        />
    </Modal>
}