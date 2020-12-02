import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';


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

export default function Review({onChange, fields}) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Confirm
            </Typography>
            <List disablePadding>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={"First name"}/>
                    <Typography variant="body2">{fields.firstName}</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={"Last name"}/>
                    <Typography variant="body2">{fields.lastName}</Typography>
                </ListItem>

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
                    <ListItemText primary={"age"}/>
                    <Typography variant="body2">{fields.age}</Typography>
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
            </List>
        </React.Fragment>
    );
}