import Modal from "../../component/common/modal/modal";
import MealDetailsView from "../../component/user/dietplan/mealDetailsView";
import {useReduxState} from "../../../helpers/hooks/useFirebaseState";


export default function MealDetails() {
    const currentMeal = useReduxState(['currentMeal']);
    console.log(currentMeal);
    return <Modal>
        <MealDetailsView title={currentMeal.title} ingredients={currentMeal.ingredients}></MealDetailsView>
    </Modal>
}