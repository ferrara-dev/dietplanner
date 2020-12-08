import {mealActions} from "./ActionTypes";

function setMealTitleAction(title){
    return {type : mealActions.SET_TITLE, title : title};
}

function addIngredientAction(ingredient){
    return {type : mealActions.ADD_INGREDIENT, ingredient : ingredient}
};

function removeIngredientAction(ingredientID){
    return {type : mealActions.REMOVE_INGREDIENT, ingredientFdcId : ingredientID}
};

function resetCurrentMealAction(ingredientID){
    return {type : mealActions.RESET_CURRENT_MEAL}
};

export const setMealTitle = (mealTitle) => (dispatch) => {
    dispatch(setMealTitleAction(mealTitle));
};

export const addIngredient = (ingredient) => (dispatch, getState) => {
    dispatch(addIngredientAction(ingredient));
};

export const removeIngredient = (ingredientID) => (dispatch) => {
    dispatch(removeIngredientAction(ingredientID));
};

export const resetCurrentMeal = () => (dispatch) => {
    dispatch(resetCurrentMealAction());
}