import {useStyles} from "../../style/mui/IngredientDetailStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, InputBase, Grid, TextField , List, ListItem} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import {useHistory} from "react-router";
import {nutritionalCodes} from "../../../../helpers/constants";

export default function IngredientDetailsView({addIngredient, changeQuantity, ingredientDescription, nutritionData, quantity}) {
    const classes = useStyles();
    const history = useHistory();
    console.log(quantity);
    function hasValue(obj, value) {
        return Object.keys(obj).some((key) => obj[key] == value);
    }

    const nutrients = nutritionData.filter(n => {
        return hasValue(nutritionalCodes, n.nutrient.id)
    });

    console.log(nutrients);

    return <div>
        <AppBar position="static" className={classes.mealPlanBar}>
            <Toolbar>
                Details : {ingredientDescription}
                <Button onClick={() => {
                    history.goBack();
                }}>Go back</Button>

                <Button onClick={() => {
                    addIngredient();
                }}>Add ingredient</Button>
            </Toolbar>
        </AppBar>
        <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
                <TextField
                    id="weight"
                    type="number"
                    label="Quantity"
                    placeholder="Ingredient quantity"
                    name="quantity"
                    defaultValue={quantity}
                    onBlur={(e) => changeQuantity(e.target.value)}
                >
                </TextField>
            </Grid>
            <Grid item xs={6} md={12}>
                <List>
                    <ListItem>
                        Quantity : {quantity}
                    </ListItem>
                    {nutrients.map((foodNutrient, index) => {
                       return <ListItem key={foodNutrient.id}>
                           {foodNutrient.nutrient.name + " " + foodNutrient.amount*(quantity/100) + " " + foodNutrient.nutrient.unitName}
                        </ListItem>
                    })}
                </List>
            </Grid>
        </Grid>
    </div>
}