import EditMealView from "../../../component/user/dietplan/editMealView";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {EdamamSearch} from "../../../../service/fooddatabase/foodSearch";
import {setCurrentIngredient, setMeal, setMealTitle, removeIngredient} from "../../../../actions/nutrition";
import {Button, Grid} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CreateMealForm from "../../../component/form/createMealForm";
import {useFirestore} from "react-redux-firebase";

export default function EditMeal() {
    const {path, url} = useRouteMatch();
    const dispatch = useDispatch();
    const history = useHistory();
    const currentMeal = useSelector(state => state.nutrition);
    const firestore = useFirestore();

    console.log(currentMeal);
    useEffect(() => {
        firestore.update()
        EdamamSearch("jasmine rice").then(data => console.log(data));
    }, []);

    const onFormChange = (title, category) => {
        const values = currentMeal.constructedMeal;
        dispatch(setMealTitle(title, category));
    };

    function editIngredient(ingredient){
        dispatch(setCurrentIngredient(ingredient))
    };

    function deleteIngredient(ingredient){
        dispatch(removeIngredient(ingredient))
        console.log("removed ingredient")
    };

    return !currentMeal.constructedMeal && <div>...</div> || <React.Fragment>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <AppBar position="static" className="bg-dark">
                    <Toolbar className="bg-dark">
                        <Button onClick={() => {
                            history.goBack();
                        }}>Go back</Button>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item md={8} className="overflow-auto">
                <EditMealView removeIngredient={deleteIngredient} editIngredient={editIngredient} data={currentMeal.constructedMeal.ingredients} mealTitle={currentMeal.constructedMeal}/>
            </Grid>
            <Grid item md={4} className="overflow-auto">
                <CreateMealForm fields={currentMeal.constructedMeal} set={onFormChange}/>
            </Grid>
        </Grid>
    </React.Fragment>

}