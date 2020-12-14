import {makeStyles} from "@material-ui/core";
import styled from 'styled-components';

export const useNavbarStyle = makeStyles((theme) => ({
    appBar: {
      top: 0,
    },
    root: {
        flexGrow: 1,
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