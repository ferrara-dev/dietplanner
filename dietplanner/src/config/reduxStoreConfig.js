import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from "../reducer/rootReducer";
import {getFirebase} from "react-redux-firebase";
import thunk from "redux-thunk";
import {firebaseConfig} from "./firebaseConfig"
/**
 * called on app startup
 */
export default function configureStore(persistedState = {}) {

    const store = createStore(
        rootReducer,
        persistedState,
        compose(
            applyMiddleware(thunk.withExtraArgument(getFirebase)),
        )
    );
    return store;
}