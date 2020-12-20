import SignupForm from "../view/form/signup/signupForm";
import useForm from "../helpers/hooks/useForm";
import usePages from "../helpers/hooks/usePages";
import {useDispatch} from "react-redux";
import {registerUser} from "../model/actions/user";
import useFirebaseAuth from "../helpers/hooks/usefirebaseAuth";
import {isEmpty} from "react-redux-firebase";
import {Redirect} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AccountSetupForm from "../view/form/signup/accountSetupForm";
import PhysicalDataForm from "../view/form/signup/PhysicalDataForm";
import GoalsAndAmbitionsForm from "../view/form/signup/goalsAndAmbitionsForm";
import Review from "../view/form/signup/reviewForm";


export default function Signup() {
    const auth = useFirebaseAuth();
    const dispatch = useDispatch();
    const [registrationError, setRegistrationError] = React.useState(null);
    function register() {
        const {firstName, lastName, email, password, dob, gender, weight, height, activityLevel, dietGoal} = fields;
        const userProfile = {firstName, lastName, email, dob, gender, weight, height, activityLevel, dietGoal};
        try{
            dispatch(registerUser(email, password, userProfile));
        } catch (e) {
            setRegistrationError(e);
        }
    };

    const {fields, handleChange, validator, validateFormFields} = useForm();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = (event) => {
        event.preventDefault();
        if (activeStep >= 2)
            register();
        else {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0)
            setActiveStep(activeStep - 1);
    };

    if (!isEmpty(auth))
        return <Redirect to="/profile/personal"/>

    return <SignupForm activeStep={activeStep}>
        {getStepContent(activeStep, fields, handleChange, {handleNext, handleBack}, validator, validateFormFields)}
    </SignupForm>
};

function getStepContent(step, fields, onChange, navigation, validator, validateFormFields) {
    switch (step) {
        case 0:
            return <AccountSetupForm fields={fields} onChange={onChange} nav={navigation} validator={validator} validateFields={validateFormFields}/>;
        case 1:
            return <PhysicalDataForm fields={fields} onChange={onChange} nav={navigation} validator={validator} validateFields={validateFormFields}/>;
        case 2:
            return <Review fields={fields} nav={navigation} validator={validator}/>;
        default:
            throw new Error('Unknown step');
    }
}