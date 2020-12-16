/// Reusable standard components used in main content sidebar

import {Button, Grid, makeStyles, Typography} from "@material-ui/core";
import React from "react";
import getStyleProps from "../getStyleProps";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import cx from "clsx";


export function SidebarHeading({children,styleProps,variant='h1'}){
    const styles = useStyles(styleProps);
    return <Typography className={`${styles.heading} ${styles.customStyle}`} variant={variant}>
        {children}
    </Typography>
}

export function SidebarDivider({styleProps}){
    const styles = useStyles(styleProps);
    return <Divider className={`${styles.divider} ${styles.customStyle}`}/>
};


const useStyles = makeStyles(({palette, breakpoints}) => ({
    customStyle : props => {
        const config = getStyleProps(props);
        return config;
    },

    divider: {
        backgroundColor: '#fff',
        opacity: 0.5,
        margin: '24px 0',
    },

    heading: {
        fontWeight: 900,
        fontSize: '2.25rem',
    },
}));