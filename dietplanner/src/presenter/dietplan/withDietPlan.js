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
import MealPlanTableView from "../../view/user/dietplan/mealplan/mealPlanTable";


export default function withDietPlan(WrappedChild){

    return (props) => {
        const [err, setErr] = React.useState(false);
        const dispatch = useDispatch();
        let isMounted = false;

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



        const chooseCurrentCategory = (categoryID) => {
            dispatch(getCategoryById(categoryID));
            dispatch(resetCurrentMeal());
        };

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

        if(!mealPlan)
            return <div>...</div>
        else{
            const childProps = {
                deleteMeal : removeMealFromCategory,
                mealPlan : mealPlan.mealCategories,
                chooseMeal : chooseMealAlternative,
                deleteCategory : removeMealCategory,
                addMealToCategory : addMealToCategory,
                chooseCategory : chooseCurrentCategory,
                editCategory : editMealCategory,
                editCategoryError : err,
                ...props
            };

            return (<WrappedChild {...childProps}/>);
        }

    }
};