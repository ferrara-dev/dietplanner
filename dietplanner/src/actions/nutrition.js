import {getFirebase} from "react-redux-firebase";


export const createMeal = (meal) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        dispatch( {type : 'CREATE_MEAL', payload : meal})
    }
}