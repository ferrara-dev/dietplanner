import {mealCategoryActions} from "./ActionTypes";
import {randomID, options} from "../helpers/random";

function setCategoryDescriptionAction(description) {
    return {type: mealCategoryActions.SET_MEAL_CATEGORY_DESCRIPTION, description: description}
};

function setCategoryAction(mealCategory) {
    return {
        type: mealCategoryActions.SET_CURRENT_CATEGORY,
        payload: mealCategory
    }
};

function resetCategoryAction() {
    return {type : mealCategoryActions.RESET_CURRENT_CATEGORY}
};

export const setCategoryDescription = (description) => (dispatch) => {
    dispatch(setCategoryDescriptionAction(description));
};

export const addMealToCategory = (meal) => (dispatch, getState, {getFirestore, getFirebase}) => {
    const currentCategoryID = getState().currentMealCategory.id;
    const updatedMealCategories = getState().firestore.data.mealPlan.mealCategories.map(category => {
        if(category.id === currentCategoryID){
            return {...category, meals : category.meals.filter(m => m.title !== meal.title).concat({
                    ingredients : meal.ingredients,
                    title : meal.title
                })}
        }
        else
            return {...category};
    });

    const userUID = getState().firebase.auth.uid;
    const firestore = getFirestore();

    firestore.collection("mealPlans").doc(`${userUID}`).update({
        mealCategories : updatedMealCategories
    });

    dispatch(resetCategoryAction());
};

export const createMealCategory = (description) => (dispatch, getState, {getFirestore, getFirebase}) => {
    const mealPlan = getState().firestore.data.mealPlan;
    const isPresent = mealPlan.mealCategories.some(element => {
        return element.description === description
    });

    if(isPresent)
        throw "Meal plan already has a meal named " + description;

    else {
        // 1. create unique id for the category
        const mealCategoryId = randomID(36, options.alphanumeric);
        const userUID = getState().firebase.auth.uid;
        const firestore = getFirestore();
        // 2. add the newly created category to the meal plans mealCategories [] field.
        firestore.collection('mealPlans').doc(`${userUID}`).update({
            mealCategories: mealPlan.mealCategories.concat({
                description : description,
                id : mealCategoryId,
                meals : []
            })
        });
    }
};

export const removeCategory = (mealCategory) =>  (dispatch, getState, {getFirestore, getFirebase}) => {
    const updatedMealCategories = getState().firestore.data.mealPlan.mealCategories.filter(category => {
        return category.id !== mealCategory.id;
    })

    const userUID = getState().firebase.auth.uid;
    const firestore = getFirestore();

    firestore.collection('mealPlans').doc(`${userUID}`).update({
        mealCategories: updatedMealCategories
    })
}

export const setCurrentCategory = (mealCategory) =>  (dispatch, getState, {getFirestore, getFirebase}) => {
    dispatch(setCategoryAction(mealCategory));
};

