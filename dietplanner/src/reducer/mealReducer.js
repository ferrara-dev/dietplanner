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
        case mealActions.UPDATE_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients
            }
        case mealActions.RESET_CURRENT_MEAL :
            return {
                ...initialState
            };
        case mealActions.SET_CURRENT_MEAL :
            return {
                ...state,
                title: action.meal.title,
                ingredients: action.meal.ingredients
            }
        default :
            return state;
    }
}