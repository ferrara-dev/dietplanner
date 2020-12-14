import React from "react"
import UserProfileView from "../view/user/profile";
import {useFirestoreConnect} from "react-redux-firebase";
import {useReduxState} from "../helpers/hooks/useFirebaseState";
import LoadingSpinner from "../view/common/loadingSpinner";
import useFirebaseAuth from "../helpers/hooks/usefirebaseAuth";
import UserProfileSidebar from "../view/user/userProfileSidebar";
import PageLayout from "../view/common/layout/pageRoot";

export default function UserProfile(){
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

    return (!user || !mealPlan) && <LoadingSpinner></LoadingSpinner> || <PageLayout>
        <div></div>
        {/*<UserProfileSidebar userProfile={user} mealPlan={mealPlan.mealCategories}/>*/}

        <UserProfileView userProfile={user} mealPlan={mealPlan.mealCategories}/>
    </PageLayout>
};

function ShowData({mealPlan, user}){
        return !mealPlan || !user && <LoadingSpinner/>
}