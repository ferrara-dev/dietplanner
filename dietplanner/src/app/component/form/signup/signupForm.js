import React from 'react';
import {useSignupFormStyle} from "../../style/signupFormStyle";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountSetupForm from "./accountSetupForm";
import Review from "./reviewForm";
import PhysicalDataForm from "./PhysicalDataForm";
import usePages from "../../../../helpers/hooks/usePages";

const steps = ['Account setup & contact information', 'Physical data', 'Confirm'];

function getStepContent(step, handleChange, fields) {
    switch (step) {
        case 0:
            return <AccountSetupForm onChange={handleChange} fields={fields} />;
        case 1:
            return <PhysicalDataForm onChange={handleChange} fields={fields}/>;
        case 2:
            return <Review onChange={handleChange} fields={fields}/>;
        default:
            throw new Error('Unknown step');
    }
}

export default function SignupForm({activeStep, handleNext, handleBack, fields, handleChange}) {
    const classes = useSignupFormStyle();
    return (
        <React.Fragment>
            <CssBaseline />
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
                                {getStepContent(activeStep,handleChange,fields)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button}>
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
}
