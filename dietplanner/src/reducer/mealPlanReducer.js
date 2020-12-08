import {authActions, userActions, nutritionActions} from "../actions/ActionTypes";

const initialState = {
    currentMeal: {},
    constructedMeal : null
}

export function mealPlanReducer(state = initialState, action) {
    switch (action.type) {
        case userActions.CREATE_MEAL_PLAN :
            return {
                ...state,
                isInitiated: true,
                meals: action.mealPlan
            }
        case nutritionActions.SET_CURRENT_MEAL :
            return {
                ...state,
                currentMeal: action.payload
            }
        case nutritionActions.SET_CURRENT_INGREDIENT :
            return {
                ...state,
                currentIngredient: action.payload
            }
        case nutritionActions.SET_CONSTRUCTED_MEAL :
            return {
                ...state,
                constructedMeal: action.payload
            }
        default:
            return state;
    }
}