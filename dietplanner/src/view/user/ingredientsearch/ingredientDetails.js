import {useStyles} from "../../style/mui/IngredientDetailStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, InputBase, Grid, TextField, List, ListItem, Card} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import {useHistory} from "react-router";
import {nutritionalCodes} from "../../../helpers/constants";
import MediaCard from "../../common/mediaCard";

export default function IngredientDetailsView({currentMeal, image, addIngredient, changeQuantity, ingredientDescription, nutritionData, quantity}) {
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
        <Grid container>
            <Grid item xs={12} md={6}>
                <MediaCard
                    image={image}
                    title={ingredientDescription}
                >
                    <List>
                        <ListItem>
                            Kcal : {(nutritionData.ENERC_KCAL).toFixed(1)} per 100g
                        </ListItem>
                        <ListItem>
                            Protein : {(nutritionData.PROCNT).toFixed(1)} per 100g
                        </ListItem>
                        <ListItem>
                            Carbs : {(nutritionData.CHOCDF).toFixed(1)} per 100g
                        </ListItem>
                        <ListItem>
                            Fat : {(nutritionData.FAT).toFixed(1)} per 100g
                        </ListItem>
                    </List>
                </MediaCard>
            </Grid>
            <Grid item item xs={12} md={6}>
                <List>
                    <ListItem>
                        <TextField
                            id="weight"
                            type="number"
                            label="Quantity"
                            placeholder="Ingredient quantity"
                            name="quantity"
                            defaultValue={quantity}
                            onChange={(e) => changeQuantity(e.target.value)}
                        />
                    </ListItem>
                    <ListItem>
                        Kcal : {(nutritionData.ENERC_KCAL * (quantity/100)).toFixed(1)}
                    </ListItem>
                    <ListItem>
                        Protein : {(nutritionData.PROCNT * (quantity/100)).toFixed(1)} g
                    </ListItem>
                    <ListItem>
                        Carbs : {(nutritionData.CHOCDF * (quantity/100)).toFixed(1)} g
                    </ListItem>
                    <ListItem>
                        Fat : {(nutritionData.FAT * (quantity/100)).toFixed(1)} g
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