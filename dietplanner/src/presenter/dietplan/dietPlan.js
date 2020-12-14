import React from "react";
import {useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../helpers/hooks/usefirebaseAuth";
import useFirestoreData, {useReduxState} from "../../helpers/hooks/useFirebaseState";
import {useDispatch} from "react-redux";
import {
    setCurrentCategory,
    removeCategory,
    deleteMealFromCategory,
    getCategoryById,
    resetCurrentMealCategory, updateCategoryDescriptionAndPriority, updateCurrentCategory,
} from "../../model/actions/mealCategory";
import {resetCurrentIngredient} from "../../model/actions/ingredient";
import {createNewMeal, resetCurrentMeal, setCurrentMeal} from "../../model/actions/meal";
import MealPlanSummaryView from "../../view/user/dietplan/mealplan/mealPlanSummaryView";
import MealPlanTableView from "../../view/user/dietplan/mealplan/mealPlanTable";
import PageLayout from "../../view/common/layout/pageRoot";
import MealPlanLayout from "../../view/user/dietplan/mealplan/mealPlanLayout";
import {Toolbar} from "@material-ui/core";


export default function DietPlan() {
    let isMounted = false;
    const [err, setErr] = React.useState(false);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(resetCurrentIngredient());
        dispatch(resetCurrentMeal());
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
    console.log(mealPlan);


    const chooseCurrentCategory = (categoryID) => {
        dispatch(getCategoryById(categoryID));
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

    return (!mealPlan && <div>...</div> || <PageLayout>
        <MealPlanSummaryView
            mealPlan={mealPlan.mealCategories}
            resetCurrentMealCategory={resetMealCategory}
            userData={userProfile}
        />

        <MealPlanTableView
            deleteMeal={removeMealFromCategory}
            mealPlan={mealPlan.mealCategories}
            chooseMeal={chooseMealAlternative}
            deleteCategory={removeMealCategory}
            addMealToCategory={addMealToCategory}
            chooseCategory={chooseCurrentCategory}
            editCategory={editMealCategory}
            editCategoryError={err}
        />
    </PageLayout>);
};