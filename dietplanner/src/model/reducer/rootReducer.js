import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from 'redux-firestore'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import locationReducer, {updateLocation} from "../../config/location";
import mealReducer from "./mealReducer";
import ingredientReducer from "./ingredientReducer";
import mealCategoryReducer from "./mealCategoryReducer";

const rootReducer = combineReducers({
        currentMeal: persistReducer({
            key: 'mealState',
            storage: storage,
            stateReconciler: hardSet
        }, mealReducer),
        currentIngredient: persistReducer({
            key: 'ingredientState',
            storage: storage,
            stateReconciler: hardSet
        }, ingredientReducer),
        currentMealCategory: persistReducer({
            key: 'mealCategoryState',
            storage: storage,
            stateReconciler: hardSet
        }, mealCategoryReducer),
        location: locationReducer,
        firebase: firebaseReducer,
        firestore: firestoreReducer
    },
);


const appReducer = (state, action) => {
    if (action.type === "LOGOUT") {
        state = {};
        localStorage.clear('persist:mealState:')
        localStorage.clear('persist:ingredientState:')
        localStorage.clear('persist:mealCategoryState:')
    }

    return rootReducer(state, action);
}

export default appReducer;