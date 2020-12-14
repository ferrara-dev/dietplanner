import Modal from "../../view/common/modal/modal";
import MealDetailsView from "../../view/user/dietplan/meal/mealDetailsView";
import {useReduxState} from "../../helpers/hooks/useFirebaseState";
import MealPlanSummaryView from "../../view/user/dietplan/mealplan/mealPlanSummaryView";
import MealPlanTableView from "../../view/user/dietplan/mealplan/mealPlanTable";
import PageLayout from "../../view/common/layout/pageRoot";
import React from "react";


export default function MealDetails() {
    const currentMealTitle = useReduxState(['currentMeal', "title"]);
    const currentMealIngredients = useReduxState(['currentMeal', 'ingredients']);
    const currentCategoryDescription = useReduxState(['currentMealCategory', 'description']);
    console.log(currentMealIngredients);

    return <Modal>
        <MealDetailsView
            categoryDescription={currentCategoryDescription}
            title={currentMealTitle}
            ingredients={currentMealIngredients}
        />
    </Modal>
}