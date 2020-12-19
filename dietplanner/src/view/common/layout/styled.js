import Layout, {
    Root,
    getHeader,
    getContent,
    getFullscreen,
    getDrawerSidebar,
    getInsetContainer,
    getInsetSidebar,
    getInsetFooter, getCollapseBtn, getSidebarTrigger,
} from '@mui-treasury/layout';

import styled from 'styled-components';
import { useSidebarCollapse } from '@mui-treasury/layout';

const StyledButton = styled('button')(({ styles }) => ({
    ...styles,
}));

const CustomCollapse = ({ sidebarId }) => {
    const { id, hiddenStyles, setCollapsed, state } = useSidebarCollapse(
        sidebarId,
        'CustomCollapse'
    );
    // hook will get the state of sidebarId you provided, not state of every sidebar
    return (
        <StyledButton
            styles={hiddenStyles}
            onClick={() => setCollapsed(id, !state.collapsed)}
        >
            {state.collapsed ? 'show' : 'hide'}
        </StyledButton>
    );
};

const Trigger = getSidebarTrigger(styled);
const Header = getHeader(styled);
const Content = getContent(styled);
const Fullscreen = getFullscreen(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const InsetSidebar = getInsetSidebar(styled);
const InsetFooter = getInsetFooter(styled);
const InsetContainer = getInsetContainer(styled);
const CollapseButton = getCollapseBtn(styled);

export {CustomCollapse,Trigger, Layout, Header, Content,Fullscreen,DrawerSidebar,InsetSidebar,InsetFooter,InsetContainer, CollapseButton};

