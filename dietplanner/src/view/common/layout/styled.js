import Layout, {
    Root,
    getHeader,
    getContent,
    getFullscreen,
    getDrawerSidebar,
    getInsetContainer,
    getInsetSidebar,
    getInsetFooter,
} from '@mui-treasury/layout';


import styled from 'styled-components';

const Header = getHeader(styled);
const Content = getContent(styled);
const Fullscreen = getFullscreen(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const InsetSidebar = getInsetSidebar(styled);
const InsetFooter = getInsetFooter(styled);
const InsetContainer = getInsetContainer(styled);

export {Layout, Header, Content,Fullscreen,DrawerSidebar,InsetSidebar,InsetFooter,InsetContainer};

