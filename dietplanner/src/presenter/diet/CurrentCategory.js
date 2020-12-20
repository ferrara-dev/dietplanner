import React from "react";
import {useDispatch} from "react-redux";
import {resetCurrentIngredient} from "../../model/actions/ingredient";
import useFirebaseAuth from "../../helpers/hooks/usefirebaseAuth";
import {useFirestoreConnect} from "react-redux-firebase";
import {useReduxState} from "../../helpers/hooks/useFirebaseState";
import {
    deleteMealFromCategory,
    getCategoryById,
    removeCategory,
    resetCurrentMealCategory, updateCategoryDescriptionAndPriority
} from "../../model/actions/mealCategory";
import {createNewMeal, resetCurrentMeal, setCurrentMeal} from "../../model/actions/meal";
import CurrentCategoryView from "../../view/user/diet/currentCategoryView";


export default function CurrentCategory(){
    let isMounted = false;
    const [err, setErr] = React.useState(false);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(resetCurrentIngredient());
        isMounted = true;
        return () => {
            isMounted = false
        };
    }, []);

    const userUID = useFirebaseAuth().uid;

    useFirestoreConnect([{
        collection: "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    }, {
        collection: "users",
        doc: userUID,
        storeAs: "user"
    },
    ]);

    const mealPlan = useReduxState(["firestore", "data", "mealPlan"]);
    const userProfile = useReduxState(["firestore", "data", "user"])
    const currentMeal = useReduxState(["currentMeal"])
    const currentMealCategory = useReduxState(["currentMealCategory"]);

    const chooseMealAlternative = (meal) => {
        dispatch(setCurrentMeal(meal));
    };

    const addMealToCategory = (categoryID) => {
        dispatch(getCategoryById(categoryID));
        dispatch(createNewMeal());
    };

    const removeMealFromCategory = (meal, categoryID) => {
        dispatch(getCategoryById(categoryID));
        dispatch(deleteMealFromCategory(meal));
        dispatch(resetCurrentMeal());
        console.log("deleted meal");
    };

    const removeMealCategory = (categoryID) => {
        dispatch(removeCategory(categoryID));
    };

    const resetMealCategory = () => {
        dispatch(resetCurrentMealCategory());
    };

    const editMealCategory = ({description, priority}, id) => {
        dispatch(getCategoryById(id));
        try {
            dispatch(updateCategoryDescriptionAndPriority({description, priority}));
        } catch (error) {
            setErr(true);
        }
    };

    return !currentMealCategory && <div>...</div> || <CurrentCategoryView
        chooseMeal={chooseMealAlternative}
        deleteMeal={deleteMealFromCategory}
        description={}
    />
}