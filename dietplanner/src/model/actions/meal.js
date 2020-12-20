import {mealActions} from "./ActionTypes";
import {options, randomID} from "../../helpers/random";

function setMealTitleAction(title){
    return {type : mealActions.SET_TITLE, title : title};
};

function resetCurrentMealAction(ingredientID){
    return {type : mealActions.RESET_CURRENT_MEAL}
};

function updateIngredientsAction(ingredients){
    return {type : mealActions.UPDATE_INGREDIENTS, ingredients : ingredients}
};

function setCurrentMealAction(meal){
    return {type : mealActions.SET_CURRENT_MEAL, meal : meal};
};

function createNewMealAction(mealID){
    return {type : mealActions.CREATE_NEW_MEAL, mealId : mealID};
};

export const setMealTitle = (mealTitle) => (dispatch) => {
    dispatch(setMealTitleAction(mealTitle));
};

export const setCurrentMeal = (meal) => (dispatch) => {
    dispatch(setCurrentMealAction(meal))
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

export const createNewMeal = (mealTitle) => (dispatch, getState) => {
    const mealID = randomID(64, options.alphanumeric);
    const meal = {
        title: mealTitle,
        mealId: mealID,
        ingredients: []
    };

    dispatch(setCurrentMeal(meal));
};

export const resetCurrentMeal = () => (dispatch) => {
    dispatch(resetCurrentMealAction());
};