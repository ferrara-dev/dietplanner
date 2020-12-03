import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from "../reducer/rootReducer";
import {getFirebase} from "react-redux-firebase";
import {reduxFirestore,getFirestore} from "redux-firestore";
import thunk from "redux-thunk";
import firebase ,{firebaseConfig} from "./firebaseConfig";
/**
 * Function called to setup the redux store on application startup,
 *
 */
export default function configureStore(persistedState = {}) {
    const store = createStore(
        rootReducer,
        persistedState,
        compose(
            applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
            reduxFirestore(firebase),
        )
    );
    return store;
}