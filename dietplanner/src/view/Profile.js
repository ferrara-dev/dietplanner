import React from "react";
import UserProfileNav from "../presenter/profile/userProfileNav";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import UserDetails from "../presenter/profile/userDetails";
import Update from "../presenter/profile/update";
import UserProgress from "../presenter/profile/userProgress";

export default function Profile() {
    return <React.Fragment>
        <UserProfileNav/>
        <ProfileContent/>
    </React.Fragment>
};

function ProfileContent() {
    return <Switch>
        <Route exact path={["/profile", "/profile/personal"]}>
            <UserDetails/>
        </Route>
        <Route exact path={["/profile/update"]}>
            <Update/>
        </Route>
        <Route exact path={["/profile/progress"]}>
            <UserProgress/>
        </Route>
    </Switch>
}