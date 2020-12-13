import {useStyles} from "../../style/mui/IngredientDetailStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, InputBase, Grid, TextField , List, ListItem} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import {useHistory} from "react-router";
import {nutritionalCodes} from "../../../helpers/constants";

export default function IngredientDetailsView({addIngredient, changeQuantity, ingredientDescription, nutritionData, quantity}) {
    const classes = useStyles();
    const history = useHistory();
    console.log(nutritionData);

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
                    <ListItem>
                        Kcal : {(nutritionData.ENERC_KCAL * (quantity/100)).toFixed(1)}
                    </ListItem>
                    <ListItem>
                        Protein : {(nutritionData.PROCNT * (quantity/100)).toFixed(1)}
                    </ListItem>
                    <ListItem>
                        Carbs : {(nutritionData.CHOCDF * (quantity/100)).toFixed(1)}
                    </ListItem>
                    <ListItem>
                        Which of fibers : {(nutritionData.FIBTG * (quantity/100)).toFixed(1)}
                    </ListItem>
                    <ListItem>
                        Fat : {(nutritionData.FAT * (quantity/100)).toFixed(1)}
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    </div>
}
/*
<Grid item xs={6} md={12}>
    <List>
        <ListItem>
            Quantity : {quantity}
        </ListItem>
        <ListItem>
            {nutritionData[nutritionalCodes.protein].name} : {nutritionData[nutritionalCodes.protein].amount * (quantity/100).toFixed(1)} {nutritionData[nutritionalCodes.protein].unit}
        </ListItem>
        <ListItem>
            {nutritionData[nutritionalCodes.carbsTotal].name} : {nutritionData[nutritionalCodes.carbsTotal].amount* (quantity/100).toFixed(1)} {nutritionData[nutritionalCodes.carbsTotal].unit}
        </ListItem>
        <ListItem>
            {nutritionData[nutritionalCodes.sugars].name} : {nutritionData[nutritionalCodes.sugars].amount* (quantity/100).toFixed(1)} {nutritionData[nutritionalCodes.sugars].unit}
        </ListItem>
        <ListItem>
            {nutritionData[nutritionalCodes.fatTotal].name} : {nutritionData[nutritionalCodes.fatTotal].amount* (quantity/100).toFixed(1)} {nutritionData[nutritionalCodes.fatTotal].unit}
        </ListItem>
        <ListItem>
            {nutritionData[nutritionalCodes.kcal].name} : {nutritionData[nutritionalCodes.kcal].amount* (quantity/100).toFixed(1)} {nutritionData[nutritionalCodes.kcal].unit}
        </ListItem>
    </List>
</Grid>
 */