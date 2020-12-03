import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore'
import {mealPlanReducer} from "./mealPlanReducer";

const rootReducer = combineReducers({
        nutrition : mealPlanReducer,
        firebase: firebaseReducer,
        firestore: firestoreReducer
    }
);

export default rootReducer;