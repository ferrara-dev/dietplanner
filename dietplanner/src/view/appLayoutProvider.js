import React, {createContext, useCallback} from "react";
import Layout, {useLayoutCtx, useSidebarCtx, useScreen, useWindowCtx} from "@mui-treasury/layout";

import {useSidebar, useSidebarTrigger, useSidebarCollapse,} from "@mui-treasury/layout/hooks"
export const AppLayoutContext = createContext(null);

export default function AppLayoutProvider({children}) {
    const layout = useLayoutCtx();
    const sidebar = useSidebarCtx();
    const screen = useScreen();

    return <AppLayoutContext.Provider value={{layout, sidebar, screen}}>
        <React.Fragment>
            {children}
        </React.Fragment>
    </AppLayoutContext.Provider>

};


export function useSchemeContext() {
    const scheme = React.useContext(AppLayoutContext);
    return scheme;
};