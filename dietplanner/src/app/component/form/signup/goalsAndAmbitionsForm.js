import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {useSignupFormStyle} from "../../style/mui/signupFormStyle";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function GoalsAndAmbitionsForm({fields:{dietGoal="weight loss"}, onChange, nav: {handleBack, handleNext}, validator, validateFields}) {
    const classes = useSignupFormStyle();
    return <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Goals, ambitions and current physical metrics
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <TextField
                    id="dietGoal"
                    select
                    fullWidth
                    label="Select"
                    name="dietGoal"
                    helperText="Please select the goal of your diet"
                    value={dietGoal || "weight loss"}
                    onChange={onChange}
                >
                    {["weight loss", "weight gain", "maintain weight"].map((value) => (
                        <MenuItem key={value} value={value}>
                            {value}
                        </MenuItem>
                    ))};
                </TextField>
                <div className={classes.errorMessage}>
                    {validator.message('dietGoal', dietGoal, 'required')}
                </div>
            </Grid>
        </Grid>
        <div className={classes.buttons}>
            <Button onClick={handleBack} className={classes.button}>
                Back
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                disabled={validateFields({dietGoal})}
            >
                {'Next'}
            </Button>
        </div>
    </React.Fragment>
}


function hasEmptyField(fields) {
    return Object.keys(fields).some((propName) => {
        if (!fields[propName])
            return true;
    });
}