import React from "react";
import {useLayoutCtx, useScreen, useSidebarCtx} from "@mui-treasury/layout";




export default function withContentLayout(WrappedChild){
    return (props) => {
        const sidebar = useSidebarCtx();
        const layout = useLayoutCtx();
        const screen = useScreen();
        const childProps = {layout, sidebar, ...props};
        return  <WrappedChild {...childProps}></WrappedChild>
    };
}