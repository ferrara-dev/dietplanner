import React from "react"
import UserProfileView from "../../view/user/profile/profile";
import {useFirestoreConnect} from "react-redux-firebase";
import {useReduxState} from "../../helpers/hooks/useFirebaseState";
import LoadingSpinner from "../../view/common/loadingSpinner";
import useFirebaseAuth from "../../helpers/hooks/usefirebaseAuth";

export default function UserDetails(){
    const userUID = useFirebaseAuth().uid;


    useFirestoreConnect([{
        collection : "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    },{
        collection : "users",
        doc: userUID,
        storeAs: "user"
    },
    ]);

    const data = useReduxState(["firestore","data"]);
    const user = data.user;
    const mealPlan = data.mealPlan;

    console.log(user);

    return (!user || !mealPlan) && <LoadingSpinner></LoadingSpinner> || <UserProfileView userProfile={user} mealPlan={mealPlan.mealCategories}/>
};

function ShowData({mealPlan, user}){
        return !mealPlan || !user && <LoadingSpinner/>
}