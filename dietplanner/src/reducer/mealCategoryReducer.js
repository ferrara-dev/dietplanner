import {mealCategoryActions} from "../actions/ActionTypes";

const initialState = {
    id : null,
    description: null,
    meals: []
}

export default function mealCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case mealCategoryActions.SET_MEAL_CATEGORY_DESCRIPTION :
            return {
                ...state,
                description: action.description
            }

        case mealCategoryActions.ADD_MEAL_TO_CATEGORY :
            return {
                ...state,
                alternatives: [...state.mealAlternatives, action.alternative]
            }

        case mealCategoryActions.REMOVE_MEAL_FROM_CATEGORY :
            return {
                ...state,
                alternatives: state.mealAlternatives.filter((meal, i) => (meal !== action.meal))
            }
        case mealCategoryActions.SET_CURRENT_CATEGORY :
            return {
               ...state,
                id : action.payload.id,
                description: action.payload.description,
                meals : [...action.payload.meals]
            };
        case mealCategoryActions.RESET_CURRENT_CATEGORY :
            return {
                ...initialState,
            }
        default :
            return state;
    }
}