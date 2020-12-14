import {useRouteMatch} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {setMealTitle, removeIngredient, resetCurrentMeal} from "../../model/actions/meal";
import {Button, Grid} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {useFirestore, useFirestoreConnect} from "react-redux-firebase";
import {setCurrentIngredient, setIngredientQuantity} from "../../model/actions/ingredient";

import {addMealToCategory} from "../../model/actions/mealCategory";
import MealEditView from "../../view/user/dietplan/mealedit/editMealView";
import {useReduxState} from "../../helpers/hooks/useFirebaseState";
import MealEditSummary from "../../view/user/dietplan/mealedit/mealEditSummary";
import IngredientTable from "../../view/user/dietplan/mealedit/ingredientTable";
import PageLayout from "../../view/common/layout/pageRoot";
import useFirebaseAuth from "../../helpers/hooks/usefirebaseAuth";


export default function EditMeal() {
    let isMounted = false;

    React.useEffect(() => {
        isMounted = true;
        return () => {
            isMounted = false
        };
    }, []);

    const userUID = useFirebaseAuth().uid;

    useFirestoreConnect([{
        collection : "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    },{
        collection : "users",
        doc: userUID,
        storeAs: "user"
    },
    ]);

    const {url} = useRouteMatch();
    const dispatch = useDispatch();
    const history = useHistory();
    const currentMeal = useReduxState(["currentMeal"])
    const mealPlan = useReduxState(["firestore", "data", "mealPlan"])

    function addMeal() {
        dispatch(addMealToCategory(currentMeal));
        dispatch(resetCurrentMeal());
        history.push(`/home/mealplan`);
    };

    function editIngredient(ingredient, quantity) {
        dispatch(setCurrentIngredient(ingredient));
        dispatch(setIngredientQuantity(quantity));
        history.push(`${url}/ingredient/${ingredient.foodId}`);
    };

    function deleteIngredient(ingredient) {
        dispatch(removeIngredient(ingredient.foodId))
    };

    function setMealName(name) {
        dispatch(setMealTitle(name));
    }

    return (!currentMeal || !mealPlan) && <div>...</div> || <React.Fragment>
        <PageLayout>
            <MealEditSummary
                mealTitle={currentMeal.title}
                edit={true}
                submitMeal={addMeal}
                setMealTitle={setMealName}
                goBack={history.goBack}
                ingredients={currentMeal.ingredients}
                mealPlan={mealPlan.mealCategories}
            />
            <IngredientTable
                mealTitle={currentMeal.title}
                mealPlan={mealPlan.mealCategories}
                edit={true}
                editIngredient={editIngredient}
                ingredients={currentMeal.ingredients}
                deleteIngredient={deleteIngredient}
            />
        </PageLayout>
    </React.Fragment>

}