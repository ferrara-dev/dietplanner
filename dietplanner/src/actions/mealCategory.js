import {mealCategoryActions} from "./ActionTypes";

function setCategoryDescriptionAction(description) {
    return {type: mealCategoryActions.SET_MEAL_CATEGORY_DESCRIPTION, description: description}
};

function addAlternativeToCategoryAction(alternative) {
    return {type: mealCategoryActions.ADD_MEAL_TO_CATEGORY, alternative: alternative}
}

function removeAlternativeFromCategoryAction(meal) {
    return {type: mealCategoryActions.ADD_MEAL_TO_CATEGORY, meal: meal}
}

function setCategoryAction(meal) {
    return {
        type: mealCategoryActions.SET_CURRENT_CATEGORY,
        payload: {description: meal.description, mealAlternatives: meal.alternatives}
    }
};

function resetCategoryAction() {
    return {type : mealCategoryActions.RESET_CURRENT_CATEGORY}
}
export const setCategoryDescription = (description) => (dispatch) => {
    dispatch(setCategoryDescriptionAction(description));
};

export const addMealToCategory = (meal) => (dispatch, getState, {getFirestore, getFirebase}) => {
    const mealPlan = getState().firestore.data.mealPlan.mealPlan;
    const currentMealCategory = getState().currentMealCategory;
    const updatedMealPlan = mealPlan.map(({description, alternatives}) => {
        if (description === currentMealCategory.description) {

            return {description, alternatives: alternatives.filter(alt => alt.title !== meal.title).concat(meal)}
        } else
            return {description, alternatives};
    });

    const userUID = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore.collection("mealPlans").doc(`${userUID}`).update({
        "mealPlan": updatedMealPlan
    }).then(res => {
        dispatch(resetCategoryAction());

    }).catch(err => {
        console.log(err);
    });

    /*
    dispatch(addAlternativeToCategoryAction(meal));

    const currentMealCategory = getState().currentMealCategory;
    const firestore = getFirestore();
    firestore.collection("mealPlans").doc(`${userUID}`).update({
        "mealPlan" : [...getState().firestore.data.mealPlan.mealPlan, meal]
    });
     */
    //dispatch(addAlternativeToCategoryAction(meal));
};

export const removeMealFromCategory = (meal) => (dispatch) => {
    dispatch(removeAlternativeFromCategoryAction(meal));
};

export const setCurrentCategory = (category, pos) => (dispatch) => {
    dispatch(setCategoryAction(category, pos));
};

