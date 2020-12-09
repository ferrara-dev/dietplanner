

const CONSTANTS = Object.freeze({
    genderConstants : {
        male : 5,
        female : -161
    },
    weightFactorMetric : 9.99,
    heightFactorMetric : 6.25,
    ageFactor : 4.92,
});

export function calculateBMR({gender,height,weight,age}){
    let genderConstant
    if(gender.toUpperCase() === "male")
        genderConstant = CONSTANTS.genderConstants.male;
    else
        genderConstant = CONSTANTS.genderConstants.female;

    const basalMetabolicRate = (CONSTANTS.weightFactorMetric * weight) + (CONSTANTS.heightFactorMetric * height) - (CONSTANTS.ageFactor * age) + genderConstant
    return basalMetabolicRate;
};