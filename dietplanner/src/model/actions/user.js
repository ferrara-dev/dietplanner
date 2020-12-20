import { userActions} from "./ActionTypes";

function logout() {
    return {
        type: userActions.LOGOUT_USER
    }
}

export const registerUser = (email, password, userProfile) => (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const {firstName, lastName, email, dob, gender, weight, height, activityLevel} = userProfile;
    const profileData = {firstName, lastName, email, dob, gender, weight, height, activityLevel, newUser : true};

    firebase.createUser({email, password}, profileData).then(userData => {
        const userUID = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('mealPlans').doc(`${userUID}`).set({
            owner : userUID,
            mealCategories : []
        });
        const date = new Date();
        firestore.collection('updates').doc(`${userUID}`).set({
            updates : [{
                timeStamp : {
                    date : date.getTime(),
                    iso : date.toISOString(),
                    string : date.toString(),
                    dateString : date.toDateString(),
                    json : date.toJSON()
                },
                profile : userData
            }],
        });
    }).catch(error => {

    });
};

export const logoutUser = () => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.logout().then(userData => {
            dispatch(logout());
            dispatch({type : "LOGOUT"})
        }
    ).catch(error => {

    });
};


export const submitUpdate = (profileUpdate) => (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    firebase.updateProfile(profileUpdate).then(res => {
        const userUID = getState().firebase.auth.uid;
        const updates = getState().firestore.data.updates;
        const profile = getState().firestore.data.user;
        const firestore = getFirestore();
        debugger;
        const date = new Date();
        firestore.collection('updates').doc(`${userUID}`).set({
                updates : updates.updates.concat({
                    timeStamp : {
                        date : date.getTime(),
                        iso : date.toISOString(),
                        string : date.toString(),
                        dateString : date.toDateString(),
                        json : date.toJSON()
                    },
                    profile : profile
                })
        });
    });
};
