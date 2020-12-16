import cx from "clsx";
import Box from "@material-ui/core/Box";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import getStyleProps from "./getStyleProps";

const useStyle = makeStyles(({theme, palette, breakpoints}) => ({
    config: props => {
        const config = getStyleProps(props);
        return config;
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(45deg, #191D29, #3c5981)',
        borderRadius: 12,
        height: '100vh',
    },
}));

export default function withSidebarLayout(SidebarComponent, styleProps) {
    return (props) => {
        const classes = useStyle(styleProps);
        return <Box className={`${classes.root} ${classes.config}`}
                    py={3}
                    px={3.5}
        >
            <SidebarComponent {...props}/>
        </Box>
    }
}
