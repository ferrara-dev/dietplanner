import UserProgressView from "../../view/user/profile/userProgressView";
import useFirebaseAuth from "../../helpers/hooks/usefirebaseAuth";
import {useFirestoreConnect} from "react-redux-firebase";
import {useReduxState} from "../../helpers/hooks/useFirebaseState";
import LoadingSpinner from "../../view/common/loadingSpinner";
import React from "react";


export default function UserProgress() {
    const userUID = useFirebaseAuth().uid;


    useFirestoreConnect([{
        collection: "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    }, {
        collection: "users",
        doc: userUID,
        storeAs: "user"
    },
        {
            collection: "updates",
            doc: userUID,
            storeAs: "updates"
        },
    ]);

    const data = useReduxState(["firestore", "data"]);
    const updates = useReduxState(["firestore", "data", "updates"]);
    const user = data.user;
    const mealPlan = data.mealPlan;

    console.log(user);

    return  (!user || !mealPlan || !updates) && <LoadingSpinner></LoadingSpinner>  || <UserProgressView
        userProfile={user}
        mealPlan={mealPlan.mealCategories}
        updates={updates.updates}
    />
};