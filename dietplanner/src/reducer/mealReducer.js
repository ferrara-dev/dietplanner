import {mealActions} from "../actions/ActionTypes";

const initialState = {
    title: null,
    ingredients: [],
}

export default function mealReducer(state = initialState, action) {
    switch (action.type) {
        case mealActions.SET_TITLE:
            return {
                ...state,
                title: action.title
            };
        case mealActions.ADD_INGREDIENT :
            return {
                ...state,
                ingredients: [...state.ingredients.filter((_ingr) => _ingr.ingredient.foodId !== action.ingredient.ingredient.foodId),action.ingredient]
            };
        case mealActions.REMOVE_INGREDIENT :
            return {
                ...state,
                ingredients: state.ingredients.filter((ingr, i) => (ingr.ingredient.fdcId !== action.ingredientFdcId))
            };
        case mealActions.RESET_CURRENT_MEAL :
            return {
                ...initialState
            };
        default :
            return state;
    }
}