import {mealCategoryActions} from "./ActionTypes";
import {randomID, options} from "../../helpers/random";

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


export const updateCategoryDescriptionAndPriority = ({description, priority}) => (dispatch, getState, {getFirestore, getFirebase}) => {
    const mealPlan = getState().firestore.data.mealPlan;

    const isPresent = mealPlan.mealCategories.some(element => {
        return (element.description === description)
    });

    const currentCategory = getState().currentMealCategory;

    if(isPresent && (description !== currentCategory.description))
        throw Error("Meal plan already has a meal named " + description);

    const updatedMealCategories= getState().firestore.data.mealPlan.mealCategories.map(category => {
        if(category.id === currentCategory.id){
            return {...category, description : description, priority : priority};
        }
        else
            return {...category}
    });

    const userUID = getState().firebase.auth.uid;
    const firestore = getFirestore();

    firestore.collection("mealPlans").doc(`${userUID}`).update({
        mealCategories : updatedMealCategories
    });

    dispatch(updateCurrentCategory());
};

export const addMealToCategory = (meal) => (dispatch, getState, {getFirestore, getFirebase}) => {
    const currentCategoryID = getState().currentMealCategory.id;
    const updatedMealCategories = getState().firestore.data.mealPlan.mealCategories.map(category => {
        if(category.id === currentCategoryID){
            return {...category, meals : category.meals.filter(m => (m.title !== meal.title) && (m.mealId !== meal.mealId)).concat({
                    ingredients : meal.ingredients,
                    title : meal.title,
                    mealId: meal.mealId,
                })}
        }
        else
            return {...category};
    });

    const userUID = getState().firebase.auth.uid;
    const firestore = getFirestore();

    firestore.collection("mealPlans").doc(`${userUID}`).update({
        mealCategories : updatedMealCategories
    }).then(e => {
        dispatch(getCategoryById(currentCategoryID))
    });
};

export const deleteMealFromCategory = (meal) => (dispatch, getState, {getFirestore, getFirebase}) => {
    const currentCategoryID = getState().currentMealCategory.id;
    const updatedMealCategories= getState().firestore.data.mealPlan.mealCategories.map(category => {
        if(category.id === currentCategoryID){
            return {...category, meals : category.meals.filter(m => m.mealId !== meal.mealId)}
        }
        else
            return {...category}
    });

    const userUID = getState().firebase.auth.uid;
    const firestore = getFirestore();

    firestore.collection("mealPlans").doc(`${userUID}`).update({
        mealCategories : updatedMealCategories
    }).then(e => {
        dispatch(getCategoryById(currentCategoryID));
    });

};

export const createMealCategory = ({description, priority}) => (dispatch, getState, {getFirestore, getFirebase}) => {
    const mealPlan = getState().firestore.data.mealPlan;
    const isPresent = mealPlan.mealCategories.some(element => {
        return element.description === description
    });

    if(isPresent)
        throw Error("Meal plan already has a meal named " + description);

    else {
        // 1. create unique id for the category
        const mealCategoryId = randomID(36, options.alphanumeric);
        const userUID = getState().firebase.auth.uid;
        const firestore = getFirestore();
        // 2. add the newly created category to the meal plans mealCategories [] field.
        firestore.collection('mealPlans').doc(`${userUID}`).update({
            mealCategories: mealPlan.mealCategories.concat({
                description : description,
                priority : priority,
                id : mealCategoryId,
                meals : []
            })
        });
    }
};

export const addNewMeal = (mealTitle) =>(dispatch, getState, {getFirestore, getFirebase})=> {
    const state = getState();
    const mealID = randomID(64, options.alphanumeric);
    const meal = {
        title: mealTitle,
        mealId: mealID,
        ingredients: []
    };
    dispatch(addMealToCategory(meal));
};

export const removeCategory = (categoryID) =>  (dispatch, getState, {getFirestore, getFirebase}) => {
    const updatedMealCategories = getState().firestore.data.mealPlan.mealCategories.filter(category => {
        return category.id !== categoryID;
    })

    const userUID = getState().firebase.auth.uid;
    const firestore = getFirestore();

    firestore.collection('mealPlans').doc(`${userUID}`).update({
        mealCategories: updatedMealCategories
    })
}

export const updateCurrentCategory = () =>  (dispatch, getState, {getFirestore, getFirebase}) => {
    const currentCategoryID = getState().currentMealCategory.id;
    dispatch(getCategoryById(currentCategoryID));
};

export const setCurrentCategory = (mealCategory) =>  (dispatch, getState, {getFirestore, getFirebase}) => {
    dispatch(setCategoryAction(mealCategory));
};

export const getCategoryById = (mealCategoryID) =>  (dispatch, getState, {getFirestore, getFirebase}) => {
    const mealCategory = getState().firestore.data.mealPlan.mealCategories.find(category => {
        return category.id === mealCategoryID;
    })
    dispatch(setCategoryAction(mealCategory));
};

export const resetCurrentMealCategory = () =>  (dispatch) => {
    dispatch(resetCategoryAction());
};
