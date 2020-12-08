import {
    nutritionActions
} from "./ActionTypes";



export const setMeal = (meal) => {
    return (dispatch, getState, getFirebase) => {
        dispatch({type: nutritionActions.SET_CONSTRUCTED_MEAL, payload: meal})
    }
};

export const setMealTitle = (mealTitle, category) => (dispatch, getState, getFirebase) => {
    const constructedMeal = getState().nutrition.constructedMeal;
    dispatch({
        type: nutritionActions.SET_CONSTRUCTED_MEAL, payload: {
            ...constructedMeal,
            title: mealTitle,
            category: category
        }
    })
}

export const setCurrentMeal = (meal) => (dispatch, getState, getFirebase) => {
    dispatch({type: nutritionActions.SET_CURRENT_MEAL, payload: meal})
}

export const setCurrentIngredient = ({ingredient, quantity}) => (dispatch, getState, getFirebase) => {
    dispatch({
        type: nutritionActions.SET_CURRENT_INGREDIENT, payload: {
            ingredient: ingredient,
            quantity: quantity
        }
    })
};

export const removeIngredient = (_ingredient) => (dispatch, getState, getFirebase) => {
    if (!_ingredient)
        throw Error(_ingredient + " can not be accepted as an ingredient")
    const constructedMeal = getState().nutrition.constructedMeal;
    let ingredients = [...constructedMeal.ingredients];
    ingredients = ingredients.filter((ingr) => {
        return ingr.ingredient.fdcId !== _ingredient.ingredient.fdcId;
    });
    dispatch({
        type: nutritionActions.SET_CONSTRUCTED_MEAL, payload: {
            ...constructedMeal,
            ingredients : ingredients
        }
    });
};


export const addIngredientToMeal = (_ingredient) => (dispatch, getState, getFirebase) => {
    if (!_ingredient)
        throw Error(_ingredient + " can not be accepted as an ingredient")
    const constructedMeal = getState().nutrition.constructedMeal;
    let ingredients = [...constructedMeal.ingredients];
    ingredients = ingredients.filter((ingr) => {
        return ingr.ingredient.fdcId !== _ingredient.ingredient.fdcId;
    });
    ingredients.push(_ingredient);
    dispatch({
        type: nutritionActions.SET_CONSTRUCTED_MEAL, payload: {
            ...constructedMeal,
            ingredients : ingredients
        }
    });
}

export const editMealIngredient = (ingredient)=> (dispatch, getState, getFirebase) => {
    const ingredients = getState().nutrition.constructedMeal.ingredients;
    ingredients.map((i) => {

    })
}


export const setQuantity = (quantity) => (dispatch, getState, getFirebase) => {
    const currentIngredient = getState().nutrition.currentIngredient
    dispatch({
        type: nutritionActions.SET_CURRENT_INGREDIENT, payload: {
            ...currentIngredient,
            quantity: quantity
        }
    })
}