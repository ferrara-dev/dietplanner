import {Root} from "@mui-treasury/layout";
import {dailyShoppingTheme} from "@mui-treasury/mockup/brands/dailyShopping";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import cx from "clsx";
import {Switch,Route} from "react-router-dom";
import {
    Layout,
    Header,
    Content,
    Fullscreen,
    DrawerSidebar,
    InsetSidebar,
    InsetContainer
} from "./common/layout/styled"
import Close from "@material-ui/icons/Close";
import CreditCard from "@material-ui/icons/CreditCard";
import React from "react";
import {useLocation} from "react-router-dom";
import UserProfile from "../presenter/profile/Profile";
import {paths} from "../routing/routes";

import UserProgress from "../presenter/profile/userProgress";
import Update from "../presenter/profile/update";

import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(({palette, breakpoints}) => ({
    descr: {
        fontSize: 14,
        color: palette.text.secondary,
    },


    edgeSidebarBody: {
        padding: '24px 0 40px 24px !important',
        background: 'none',
        boxShadow: 'none',
        overflow: "visible",
        right: 0,
    },
    sidebarBody: {
        background: 'none',
        overflow: 'visible !important',
        backgroundColor: "#fff !important"
    },
    sidebarPaper: {
        maxWidth: 400,
        padding: 16,
        background: 'none',
        boxShadow: 'none',
        overflow: "visible"
    },
    container: {
        minHeight: 0,
        display: 'flex',
    },
    content: {
        overflow: 'auto',
    },
    footer: {
        border: 'unset',
        position: 'relative',
        backgroundColor: '#fff',
        '&:before': {
            content: '" "',
            position: 'absolute',
            width: '100%',
            height: 24,
            top: 0,
            left: 0,
            transform: 'translateY(-100%)',
            background: 'linear-gradient(to top, #ffffff, rgba(255,255,255,0))',
        },
        [breakpoints.only('sm')]: {
            paddingRight: 64,
        },
        [breakpoints.up('lg')]: {
            paddingBottom: 40,
        },
    },
    fab: {
        position: 'fixed',
        bottom: 16,
        right: 16,
        color: '#2E3B4D',
        '& svg': {
            fontSize: 32,
            color: '#fff',
        },
        zIndex: 1500,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    },
    fabClose: {
        top: 8,
        right: 8,
        width: 48,
        height: 48,
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(45deg, #191D29, #3c5981)',
        borderRadius: 12,
        height: '100vh',
        '& *': {
            color: '#fff',
        },
    },
    heading2: {
        fontWeight: 900,
        fontSize: '2.25rem',
    },
    divider: {
        backgroundColor: '#fff',
        opacity: 0.12,
        margin: '24px 0',
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 16,
        opacity: 0.87,
    },
    button: {
        minHeight: 48,
        borderRadius: 40,
        borderColor: 'rgba(255, 255, 255, 0.12)',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '100%',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
        },
    },
    buttonActive: {
        borderColor: '#fff',
    },
    creditCardLabel: {
        fontSize: 12,
        textTransform: 'initial',
    },
    paypalLabel: {
        fontSize: 20,
        textTransform: 'initial',
        fontStyle: 'italic',
        fontFamily:
            '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
        fontWeight: 'bold',
        lineHeight: 1,
    },
    textField: {
        '& label': {
            opacity: 0.87,
            fontWeight: 'bold',
        },
        '&:hover': {
            '& $inputBase:before': {
                borderColor: 'rgba(255, 255, 255, 0.38)',
            },
        },
    },
    inputBase: {
        '&:before': {
            borderColor: 'rgba(255, 255, 255, 0.12)',
        },
    },
    input: {
        padding: '16px 0',
    },
    select: {
        '& label': {
            opacity: 0.4,
        },
        '&:hover': {
            '& $inputBase:before': {
                borderColor: 'rgba(255, 255, 255, 0.38)',
            },
        },
    },
    checkoutBtn: {
        marginTop: 'auto',
        borderRadius: 40,
        width: '100%',
    },
}));

export default function ProfilePage() {
    const styles = useStyles();
    const scheme = Layout();
    const location = useLocation();

    scheme.configureEdgeSidebar(builder => {
        builder
            .create('edgeSidebar', {anchor: 'right'})
            .registerTemporaryConfig('xs', {
                width: "50%",
            });
    });


    return (
        <Root theme={dailyShoppingTheme} scheme={scheme}>
            {({setOpen, state: {sidebar}}) => {
                const {open} = sidebar.edgeSidebar;
                return (
                    <>
                        <CssBaseline/>
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
                           <UserProfile/>
                        </DrawerSidebar>
                        <Content>
                            <ProfileContent/>
                        </Content>
                    </>
                );
            }}
        </Root>
    );
};


function ProfileContent(){
    return <Switch>
        <Route exact path={paths.profile}>
            <UserProgress/>
        </Route>
        <Route  exact path={paths.profileUpdate}>
            <Update/>
        </Route>
    </Switch>
}
