import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {mealPlanReducer} from "./mealPlanReducer";

const rootReducer = combineReducers({
        nutrition : mealPlanReducer,
        firebase: firebaseReducer
    }
);

export default rootReducer;