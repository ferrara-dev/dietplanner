import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
    },
});

export default function LinkTab({Icon,label,link, a11yProps}) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            icon={<Icon/>}
            label={label}
            href={link}
            {...a11yProps}
        />
    );
}
