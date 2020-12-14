import React from 'react';
import {useSignupFormStyle} from "../../style/mui/signupFormStyle";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const steps = ['Account setup & contact information', 'Personal details','Confirm'];

export default function SignupForm({children, activeStep, handleNext, handleBack, fields, handleChange, fieldError}) {

    const classes = useSignupFormStyle();
    return (
        <React.Fragment>
            <AppBar position="absolute" color="default" className={classes.appBar}>
            </AppBar>

            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        User registration
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                            <React.Fragment>
                                {children}
                            </React.Fragment>
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
}
