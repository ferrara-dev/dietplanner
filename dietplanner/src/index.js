import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/App';
import reportWebVitals from './reportWebVitals';
import reduxStoreConfig from "./config/reduxStoreConfig";
import {Provider} from 'react-redux'

import firebase from "./config/firebaseConfig";
import {reactReduxFirebaseConfig} from "./config/reactReduxFirebaseConfig";
import {createFirebaseInstance, ReactReduxFirebaseProvider} from "react-redux-firebase";
import {BrowserRouter as Router} from "react-router-dom";
import {createFirestoreInstance} from "redux-firestore";
import {createBrowserHistory} from 'history'
import {PersistGate} from 'redux-persist/integration/react'

const initialState = {}

const {store, persistor} = reduxStoreConfig(initialState, createBrowserHistory());

const rrfProps = {
    firebase: firebase,
    config: reactReduxFirebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <App/>
                </Router>
            </PersistGate>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('app-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
