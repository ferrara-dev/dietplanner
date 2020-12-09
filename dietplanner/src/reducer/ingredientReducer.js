import {ingredientActions} from "../actions/ActionTypes";

const initialState = {
    ingredient: null,
    quantity: 100
};

export default function ingredientReducer(state = initialState, action) {
    switch (action.type) {
        case ingredientActions.SET_CURRENT_INGREDIENT :
            return {
                ...state,
                ingredient: action.ingredient
            };
        case ingredientActions.SET_INGREDIENT_QUANTITY :
            return {
                ...state,
                quantity: action.quantity
            };
        case ingredientActions.RESET_CURRENT_INGREDIENT:
            return {
                ...initialState
            };

        default :
            return state;
    }
}