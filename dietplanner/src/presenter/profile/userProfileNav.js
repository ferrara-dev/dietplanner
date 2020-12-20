import UserProfileNavView from "../../view/user/profile/userProfileNav";
import React from "react";
import {useHistory, location} from "react-router-dom"
export default function UserProfileNav(){
    const routes = ["/profile/personal", "/profile/progress", "/profile/update"];
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [activeRoute, setActiveRoute] = React.useState("/profile/personal");
    const history = useHistory();

    React.useEffect(() => {
        history.push(routes[activeIndex]);
    }, []);
    history.listen((location) => {
        if(location.pathname === routes[0]){
            setActiveIndex(0);
        }
        else if(location.pathname === routes[1])
            setActiveIndex(1);
        else if(location.pathname === routes[2])
            setActiveIndex(2);
    });

    function onTabIndexChange(index) {
        history.push(routes[index]);
    };

    return <UserProfileNavView onIndexChange={onTabIndexChange} activeIndex={activeIndex}/>
};
