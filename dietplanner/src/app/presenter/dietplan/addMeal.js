import EditMealView from "../../component/user/dietplan/editMealView";
import {useRouteMatch} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {setMealTitle, removeIngredient, resetCurrentMeal} from "../../../actions/meal";

import {Button, Grid} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import {useFirestore} from "react-redux-firebase";
import {setCurrentIngredient, setIngredientQuantity} from "../../../actions/ingredient";
import useFirestoreData from "../../../helpers/hooks/useFirebaseState";
import {addMealToCategory} from "../../../actions/mealCategory";

export default function AddMeal() {
    const {path, url} = useRouteMatch();
    const dispatch = useDispatch();
    const history = useHistory();
    const currentMeal = useSelector(state => state.currentMeal);
    const state = useSelector(state => state);
    const mealPlan = useFirestoreData("mealPlan");
    const firestore = useFirestore();

    console.log(state);

    function addMeal() {
        dispatch(addMealToCategory(currentMeal));
        dispatch(resetCurrentMeal());
        history.push(`/home/mealplan`)
    };

    function editIngredient(ingredient) {
        dispatch(setCurrentIngredient(ingredient.ingredient));
        dispatch(setIngredientQuantity(ingredient.quantity));
        history.push(`${url}/ingredient/${ingredient.ingredient.foodId}`);
    };

    function deleteIngredient(ingredient) {
        dispatch(removeIngredient(ingredient.ingredient.fdcId))
    };

    function setMealName(name) {
        dispatch(setMealTitle(name));
    }

    return !currentMeal && <div>...</div> || <React.Fragment>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <AppBar position="static" className="bg-dark">
                    <Toolbar className="bg-dark">
                        <Button onClick={() => {
                            history.goBack();
                        }}>Go back</Button>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item xs={12}>
                <EditMealView editIngredient={editIngredient} submitMeal={addMeal} setMealName={setMealName}
                              data={currentMeal.ingredients} removeIngredient={deleteIngredient}/>
            </Grid>
        </Grid>
    </React.Fragment>

}