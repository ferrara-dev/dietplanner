import React, {useEffect} from "react";
import SidebarView from "../../component/navigation/sidebar";

export default function Sidebar(){

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

    return <SidebarView open={state.sideDrawerOpen} toggle={toggleDrawer}/>
}