import styled from 'styled-components';
import Layout, {
    Root,
    getHeader,
    getDrawerSidebar,
    getFullscreen,
    getInsetContainer,
    getContent,
    getSidebarTrigger
} from '@mui-treasury/layout';
import {CssBaseline} from "@material-ui/core";
import React from "react";
import {dailyShoppingTheme} from "@mui-treasury/mockup/brands/dailyShopping";
export const SidebarTrigger = getSidebarTrigger(styled)
export const MainAppHeader = getHeader(styled);
export const Fullscreen = getFullscreen(styled);
export const MainAppSidebar = getDrawerSidebar(styled);
export const MainAppContent = getContent(styled);
export const InsetContainer = getInsetContainer(styled);
const mainAppScheme = Layout();

mainAppScheme.configureHeader(builder => {
    builder.create("header")
        .registerConfig('xs', {
            position: 'fixed',
            clipped : true,
        })
});

mainAppScheme.configureEdgeSidebar(builder => {
    builder
        .create('main-app-sidebar', {anchor: 'left'})
        .registerTemporaryConfig('xs', {
            width: 'auto', // 'auto' is only valid for temporary variant
        });
});


export default function MainAppLayout(props) {
    return <Root scheme={mainAppScheme} theme={dailyShoppingTheme}>
        <CssBaseline></CssBaseline>
        <MainAppHeader>
            {props.children[0]}
        </MainAppHeader>
        <MainAppSidebar sidebarId={"main-app-sidebar"}>
            {props.children[1]}
        </MainAppSidebar>
        <MainAppContent>
            {props.children[2]}
        </MainAppContent>
    </Root>
}