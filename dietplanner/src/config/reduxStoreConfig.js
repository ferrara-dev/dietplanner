import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from "../reducer/rootReducer";
import {getFirebase} from "react-redux-firebase";
import {reduxFirestore,getFirestore} from "redux-firestore";
import thunk from "redux-thunk";
import firebase ,{firebaseConfig} from "./firebaseConfig";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import reduxReset from "redux-reset"

const persistConfig = {
    key: 'root',
    storage: storage
}
/**
 * Function called to setup the redux store on application startup,
 *
 */
export default function configureStore(persistedState = {}, history) {
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = createStore(
        persistedReducer,
        persistedState,
        compose(
            applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
            reduxFirestore(firebase),
            reduxReset()
        )
    );

    const persistor = persistStore(store)
    return {persistor, store};
}