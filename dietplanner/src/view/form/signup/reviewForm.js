import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {List, ListItemText, ListItemSecondaryAction, ListItem, Paper} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import {useSignupFormStyle} from "../../style/mui/signupFormStyle";

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review({validator, onChange, fields, nav: {handleBack, handleNext}}) {
    const classes = useSignupFormStyle();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Confirm
            </Typography>
            <List disablePadding>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={"email"}/>
                    <Typography variant="body2">{fields.email}</Typography>
                </ListItem>

                <ListItem className={classes.listItem}>
                    <ListItemText primary={"password"}/>
                    <Typography variant="body2">{fields.password}</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={"gender"}/>
                    <Typography variant="body2">{fields.gender}</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={"dob"}/>
                    <Typography variant="body2">{fields.dob}</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={"height"}/>
                    <Typography variant="body2">{fields.height}</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={"weight"}/>
                    <Typography variant="body2">{fields.weight}</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={"activity level"}/>
                    <Typography variant="body2">{fields.activityLevel && fields.activityLevel.description}</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={"Goals"}/>
                    <Typography variant="body2">{fields.dietGoal}</Typography>
                </ListItem>
            </List>

            <div className={classes.buttons}>
                <Button onClick={handleBack} className={classes.button}>
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={hasEmptyField(fields)}
                >
                    {'Register'}
                </Button>
            </div>
        </React.Fragment>
    );
}


function hasEmptyField(fields) {
    return Object.keys(fields).some((propName) => {
        if (!fields[propName])
            return true;
    });
}