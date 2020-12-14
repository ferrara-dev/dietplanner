import React, {useEffect} from "react";
import SidebarView from "../../view/navigation/sidebar";

export default function Sidebar(){
    const nav = [
        navFactory("profile", "/home/profile"),
        navFactory("submit update", "/home/update"),
        navFactory("meal plan", "/home/mealplan"),
    ];

    const [state, setState] = React.useState({
        sideDrawerOpen: false,
    });

    useEffect(() => {

    }, [state]);

    const toggleDrawer = (event, open) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, sideDrawerOpen: open });
    };

    return <SidebarView nav={nav} open={state.sideDrawerOpen} toggle={toggleDrawer}/>
}

function navFactory(label, link, icon){
    return {label, link, icon}
}