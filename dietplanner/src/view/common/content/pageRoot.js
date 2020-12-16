import {Root} from "@mui-treasury/layout";
import {dailyShoppingTheme} from "@mui-treasury/mockup/brands/dailyShopping";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import cx from "clsx";
import {
    Layout,
    Header,
    Content,
    Fullscreen,
    DrawerSidebar,
    InsetSidebar,
    InsetFooter,
    InsetContainer
} from "../layout/styled"
import Close from "@material-ui/icons/Close";
import CreditCard from "@material-ui/icons/CreditCard";
import React from "react";
import useStyles from "../../style/mui/mealEditStyle";
import {useLocation} from "react-router-dom"


export default function PageLayout(props) {
    const styles = useStyles();
    const [EdgeSidebarWidth, setWidth] = React.useState(400);
    const scheme = Layout();
    const location = useLocation();
    scheme.configureInsetSidebar(builder => {
        builder
            .create('insetSidebar', {anchor: 'right'})
            .registerAbsoluteConfig('lg', {
                width: '40%'
            });
    });

    scheme.configureEdgeSidebar(builder => {
        builder
            .create('edgeSidebar', {anchor: 'right'})
            .registerTemporaryConfig('md', {
                width: "50%",
            })
            .registerTemporaryConfig('xs', {
                width: "77%",
            });
    });

    return (

        <Root theme={dailyShoppingTheme} scheme={scheme}>
            {({setOpen, state: {sidebar}}) => {
                const {open} = sidebar.edgeSidebar;
                return (
                    <>
                        <Fab
                            className={cx(styles.fab, open && styles.fabClose)}
                            color={'primary'}
                            onClick={() => setOpen('edgeSidebar', !open)}
                        >
                            {open ? <Close/> : <CreditCard/>}
                        </Fab>
                        <DrawerSidebar
                            PaperProps={{className: styles.edgeSidebarBody}}
                            sidebarId={'edgeSidebar'}
                        >
                            {props.children && props.children[0]}
                        </DrawerSidebar>
                        <Content>
                            <InsetContainer
                                rightSidebar={
                                    <InsetSidebar
                                        sidebarId={'insetSidebar'}
                                        classes={{
                                            paper: styles.sidebarBody,
                                            root: styles.sidebarBody
                                        }}
                                    >
                                        {props.children && props.children[0]}
                                    </InsetSidebar>
                                }
                            >
                                {props.children && props.children[1]}
                            </InsetContainer>
                        </Content>
                    </>
                );
            }}
        </Root>
    );
}
