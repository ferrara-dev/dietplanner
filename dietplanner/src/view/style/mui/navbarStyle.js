import {makeStyles} from "@material-ui/core";
import styled from 'styled-components';

export const useNavbarStyle = makeStyles((theme) => ({
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    },
    buttonLink : {
        textTransform : "capitalize",
        fontSize : "1.2rem",
        "&.active": {
            textDecoration:'underline',
        },
    },
    heading: {
        flexGrow: 1,
        fontWeight: 900,
        fontSize: '2.25rem',
    },
    root: {
        background: 'linear-gradient(45deg, #FF1D29, #Fc5981)',
        color: '#fff',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));