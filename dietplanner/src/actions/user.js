import { userActions} from "../actions/ActionTypes";

function logout() {
    return {
        type: userActions.LOGOUT_USER
    }
}

function setMealPlan(mealPlan){
    return {
        type: userActions.SET_MEAL_PLAN,
        mealPlan : mealPlan
    }
}

export const createMealPlan = (mealPlan) => (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const path = `mealPlans/${userUID}`;
    const userUID = getState().firebase.auth.uid;
    console.log(userUID);
    dispatch({type: "user/CREATE_MEAL_PLAN", mealPlan: mealPlan.meals})
    firebase
        .ref(path)
        .push({...mealPlan, userID : userUID})
        .then((data) => {
            console.log(data)
        })
        .catch(error => {
            console.log(error);
        })
}

export const registerUser = (email, password, userProfile) => (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    firebase.createUser({email, password}, userProfile).then(userData => {
        const userUID = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('mealPlans').doc(`${userUID}`).set({
            owner : userUID,
            mealPlan : []
        });

        firestore.collection('mealBank').doc(`${userUID}`).set({
            owner : userUID,
            meals : []
        });

        console.log(userData);
    }).catch(error => {
        console.log(error)
    });
}

export const logoutUser = () => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.logout().then(userData => {
            dispatch(logout());
            dispatch({type : "LOGOUT"})
        }
    ).catch(error => {
        console.log(error);
    });
};

export const loginUser = (email, password) => (dispatch, getState, getFirebase) => {

}

export const fetchMealPlan =  () => (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const userUID = getState().firebase.auth.uid;
    const firestore = getFirestore();
    console.log(firebase, firestore)
    firestore.setListener({
        collection : "mealPlans",
        doc : userUID
    })
}