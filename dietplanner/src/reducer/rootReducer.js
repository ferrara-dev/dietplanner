import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from 'redux-firestore'
import {mealPlanReducer} from "./mealPlanReducer";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import locationReducer, {updateLocation} from "../config/location";

const rootReducer = combineReducers({
        nutrition: persistReducer({
            key: 'nutritionState',
            storage: storage,
            stateReconciler: hardSet
        }, mealPlanReducer),
        location: locationReducer,
        firebase: firebaseReducer,
        firestore: firestoreReducer
    },
);


const appReducer = (state, action) => {
    if(action.type === "LOGOUT"){
        state = {};
        localStorage.clear('persist:nutritionState:')
    }

    return rootReducer(state,action);
}

export default appReducer;