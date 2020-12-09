import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from "react";
import {Button,List} from "@material-ui/core";

const ExpandableTableRow = ({ children, expandComponent, k, ...otherProps }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const classes = useStyles();
    return (
        <>
            <TableRow className={classes.tableRow} key={k}>
                <TableCell padding="checkbox">
                    <IconButton onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {children}
            </TableRow>
            {isExpanded && expandComponent.map((Component, index) => {
                return <TableRow key={index}>
                    {Component}
                </TableRow>
            })}
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    tableRow: {
        height: 100,
    },
    list: {
        listStyle: 'none',
        marginBottom: 2,
    },
    title: {
        flex: '1 1 100%',
    }
    ,
    mealsRoot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}))

export default ExpandableTableRow