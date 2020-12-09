import { userActions} from "../actions/ActionTypes";

function logout() {
    return {
        type: userActions.LOGOUT_USER
    }
}

export const registerUser = (email, password, userProfile) => (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    firebase.createUser({email, password}, userProfile).then(userData => {
        const userUID = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('mealPlans').doc(`${userUID}`).set({
            owner : userUID,
            mealCategories : []
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