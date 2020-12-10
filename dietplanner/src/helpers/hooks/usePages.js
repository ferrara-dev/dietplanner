import React, {useState, useEffect} from "react";

export default function usePages(afterLastStep,lastStep = 1) {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        if (activeStep >= lastStep)
            afterLastStep();
        else
            setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        if (activeStep > 0)
            setActiveStep(activeStep - 1);
    };

    return {
        handleNext,
        handleBack,
        activeStep
    }
}