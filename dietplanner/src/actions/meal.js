import {mealActions} from "./ActionTypes";

function setMealTitleAction(title){
    return {type : mealActions.SET_TITLE, title : title};
};

function resetCurrentMealAction(ingredientID){
    return {type : mealActions.RESET_CURRENT_MEAL}
};

function updateIngredientsAction(ingredients){
    return {type : mealActions.UPDATE_INGREDIENTS, ingredients : ingredients}
};

export const setMealTitle = (mealTitle) => (dispatch) => {
    dispatch(setMealTitleAction(mealTitle));
};

export const addIngredient = (ingredient) => (dispatch, getState) => {
    const updatedIngredients = getState().currentMeal.ingredients
        .filter((_ingr) => _ingr.ingredient.foodId !== ingredient.ingredient.foodId)
        .concat(ingredient);
    dispatch(updateIngredientsAction(updatedIngredients));
};

export const removeIngredient = (ingredientID) => (dispatch, getState) => {
    const updatedIngredients = getState().currentMeal.ingredients.filter((ingr, i) => (ingr.ingredient.foodId !== ingredientID))
    dispatch(updateIngredientsAction(updatedIngredients));
};

export const resetCurrentMeal = () => (dispatch) => {
    dispatch(resetCurrentMealAction());
};