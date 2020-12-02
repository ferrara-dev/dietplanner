import {authActions, userActions} from "../actions/ActionTypes";

const initialState = {
    isInitiated : false,
}

export function mealPlanReducer(state = initialState, action){
    switch (action.type) {
        case userActions.CREATE_MEAL_PLAN :
            return {
                ...state,
                isInitiated : true,
                meals: action.mealPlan
            }
        default:
            return state;
    }
}