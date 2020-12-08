import {ingredientActions} from "./ActionTypes";

function setQuantityAction(quantity){
    return {type : ingredientActions.SET_INGREDIENT_QUANTITY, quantity : quantity};
}

function setIngredientAction(ingredient){
    return {type : ingredientActions.SET_CURRENT_INGREDIENT, ingredient : ingredient}
}

export const setIngredientQuantity = (quantity) => (dispatch) => {
    dispatch(setQuantityAction(quantity));
};

export const setCurrentIngredient = (ingredient) => (dispatch) => {
    dispatch(setIngredientAction(ingredient));
};
