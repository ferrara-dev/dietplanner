import React from "react"
import UserProfileView from "../component/user/profile";
import {useFirestoreConnect} from "react-redux-firebase";
import {useReduxState} from "../../helpers/hooks/useFirebaseState";
import LoadingSpinner from "../component/common/loadingSpinner";

export default function UserProfile(){
    const userUID = useReduxState(["firebase", "auth","uid"]);

    useFirestoreConnect({
        collection: "users",
        doc: userUID,
        storeAs: "user"
    });

    useFirestoreConnect({
        collection: "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    });


    const data = useReduxState(["firestore","data"]);
    const user = data.user;
    const mealPlan = data.mealPlan;
    console.log(user);

    return (!user || !mealPlan) && <LoadingSpinner></LoadingSpinner> || <UserProfileView userProfile={user} mealPlan={mealPlan.mealCategories}/>
};

function ShowData({mealPlan, user}){
        return !mealPlan || !user && <LoadingSpinner/>
}