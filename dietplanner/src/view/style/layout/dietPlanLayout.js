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

export const SidebarTrigger = getSidebarTrigger(styled)
export const MainAppHeader = getHeader(styled);
export const Fullscreen = getFullscreen(styled);
export const MainAppSidebar = getDrawerSidebar(styled);
export const MainAppContent = getContent(styled);
export const InsetContainer = getInsetContainer(styled);
const dietPlanScheme = Layout();

dietPlanScheme.configureHeader(builder => {
    builder.create("header")
        .registerConfig('xs', {
            position: 'sticky',
        })
});

dietPlanScheme.configureInsetSidebar(builder => {

});

dietPlanScheme.configureEdgeSidebar(builder => {
    builder
        .create('main-app-sidebar', {anchor: 'left'})
        .registerTemporaryConfig('xs', {
            width: 'auto', // 'auto' is only valid for temporary variant
        });
});


export default function DietPlanLayout(props) {
    return <Root scheme={mainAppScheme}>
        <CssBaseline></CssBaseline>
        <MainAppContent>
            {props.children[2]}
        </MainAppContent>
    </Root>
}