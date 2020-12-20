import {useStyles} from "../../style/mui/IngredientDetailStyle";
import Toolbar from "@material-ui/core/Toolbar";
import {
    Button,
    InputBase,
    Grid,
    TextField,
    List,
    ListItem,
    Card,
    makeStyles,
    CardHeader,
    Paper, IconButton
} from "@material-ui/core";
import React from "react";
import {useHistory} from "react-router";
import MediaCard from "../../common/mediaCard";
import {DrawerSidebar} from "../../common/layout/styled";
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from "react-google-font-loader";
import useBeatsInfoStyles from "@mui-treasury/styles/info/beats";
import Box from "@material-ui/core/Box";
import {Info, InfoSubtitle, InfoTitle} from '@mui-treasury/components/info';
import {useNewsInfoStyles} from '@mui-treasury/styles/info/news';
import {useCoverCardMediaStyles} from '@mui-treasury/styles/cardMedia/cover';
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useContentStyle from "../../style/mui/mealEditStyle";

import cx from "clsx";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import {useGmailListItemStyles} from '@mui-treasury/styles/listItem/gmail'
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import {mealNutrientCalculator} from "../../../helpers/calculation/MealNutrientCalculator";
import {Add} from "@material-ui/icons"

const useCardStyles = makeStyles(() => ({
    root: {
        maxWidth: 304,
        margin: 'auto',
    },
    content: {
        padding: 24,
    },
}));

function f(meal, ingredientID, nutritionData, quantity) {
    const a = meal.ingredients.find(ingredient => ingredient.ingredient.foodId === ingredientID);
    let nutrients = mealNutrientCalculator(meal.ingredients);
    if (a) {
        const aQuantity = a.quantity;
        const aNutrients = a.ingredient.nutrients;
        nutrients["protein"] = nutrients["protein"] - aNutrients.PROCNT * (aQuantity / 100) + nutritionData.PROCNT * (quantity / 100);
        nutrients["kcal"] = nutrients["kcal"] - aNutrients.ENERC_KCAL * (aQuantity / 100) + nutritionData.ENERC_KCAL * (quantity / 100);
        nutrients["carbs"] = nutrients["carbs"] - aNutrients.CHOCDF * (aQuantity / 100) + nutritionData.CHOCDF * (quantity / 100);
        nutrients["fat"] = nutrients["fat"] - aNutrients.FAT * (aQuantity / 100) + nutritionData.FAT * (quantity / 100);
    } else {
        nutrients["protein"] = nutrients["protein"] + nutritionData.PROCNT * (quantity / 100);
        nutrients["kcal"] = nutrients["kcal"] + nutritionData.ENERC_KCAL * (quantity / 100);
        nutrients["carbs"] = nutrients["carbs"] + nutritionData.CHOCDF * (quantity / 100);
        nutrients["fat"] = nutrients["fat"] + nutritionData.FAT * (quantity / 100);
    }
    return nutrients;
};

export default function IngredientDetailsView({
                                                  currentMeal,
                                                  image,
                                                  addIngredient,
                                                  changeQuantity,
                                                  ingredientDescription,
                                                  nutritionData,
                                                  quantity,
                                                  ingredientId,
    goBack
                                              }) {
    const classes = useStyles();
    const styles = useContentStyle();
    const listStyles = useGmailListItemStyles({collapsed: false});
    const mealNutrientsAfter = f(currentMeal, ingredientId, nutritionData, quantity);

    console.log(mealNutrientsAfter);

    return <DrawerSidebar
        PaperProps={{className: classes.edgeSidebarBody}}
        sidebarId={'edgeSidebar'}
    >
        <Box className={classes.sidebarContent} py={3} px={3.5}>
            <Toolbar>
                <Tooltip title="Back to previous page">
                    <IconButton aria-label="delete" onClick={(e) => {
                        e.preventDefault();
                        goBack()
                    }}>
                        <KeyboardBackspaceOutlinedIcon/>
                    </IconButton>
                </Tooltip>
                <Typography className={styles.heading2} variant={'h2'}>
                    {ingredientDescription} details
                </Typography>

            </Toolbar>
            <Divider className={styles.divider}/>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Paper variant="outlined">
                        <img src={image} height={200}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" className={classes.label}> Nutrients per 100 g </Typography>
                    <List>
                        <ListItem
                            classes={listStyles}
                            button
                        >

                            Kcal
                            <span className={'MuiLabel-amount'}>{(nutritionData.ENERC_KCAL * 1).toFixed(1)}</span>
                        </ListItem>
                        <ListItem
                            classes={listStyles}
                            button
                        >
                            Protein
                            <span className={'MuiLabel-amount'}>{(nutritionData.PROCNT * 1).toFixed(1)}</span>
                        </ListItem>
                        <ListItem
                            classes={listStyles}
                            button
                        >
                            Carbs
                            <span className={'MuiLabel-amount'}>{(nutritionData.CHOCDF * 1).toFixed(1)}</span>
                        </ListItem>
                        <ListItem
                            classes={listStyles}
                            button
                        >
                            Fat
                            <span className={'MuiLabel-amount'}>{(nutritionData.FAT * 1).toFixed(1)}</span>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Divider className={styles.divider}/>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                className={styles.textField}
                                InputProps={{
                                    classes: {root: styles.inputBase, input: styles.input},
                                }}
                                label={"Quantity"}
                                placeholder={"*Quantity"}
                                defaultValue={quantity}
                                onChange={(e) => changeQuantity(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                startIcon={<Add/>}
                                classes={{
                                    root: cx(styles.button, styles.buttonActive),
                                    label: styles.creditCardLabel,
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    addIngredient();
                                }}>Add ingredient</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1" className={classes.label}> Total nutrients for
                                ingredient</Typography>
                            <List>
                                <ListItem
                                    classes={listStyles}
                                    button
                                >
                                    Kcal
                                    <span
                                        className={'MuiLabel-amount'}>{(nutritionData.ENERC_KCAL * (quantity / 100)).toFixed(1)}</span>
                                </ListItem>
                                <ListItem
                                    classes={listStyles}
                                    button
                                >
                                    Protein
                                    <span className={'MuiLabel-amount'}>
                                         {(nutritionData.PROCNT * (quantity / 100)).toFixed(1)}
                                    </span>
                                </ListItem>
                                <ListItem
                                    classes={listStyles}
                                    button
                                >
                                    Carbs
                                    <span className={'MuiLabel-amount'}>
                                        {(nutritionData.CHOCDF * (quantity / 100)).toFixed(1)}
                                    </span>
                                </ListItem>
                                <ListItem
                                    classes={listStyles}
                                    button
                                >
                                    Fat
                                    <span className={'MuiLabel-amount'}>
                                                         {(nutritionData.FAT * (quantity / 100)).toFixed(1)}
                                    </span>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" className={classes.label}> Resulting meal nutrients</Typography>
                            <List>
                                <ListItem
                                    classes={listStyles}
                                    button
                                >
                                    Kcal
                                    <span
                                        className={'MuiLabel-amount'}>{(mealNutrientsAfter.kcal).toFixed(1)}</span>
                                </ListItem>
                                <ListItem
                                    classes={listStyles}
                                    button
                                >
                                    Protein
                                    <span className={'MuiLabel-amount'}>
                                         {(mealNutrientsAfter.protein).toFixed(1)}
                                    </span>
                                </ListItem>
                                <ListItem
                                    classes={listStyles}
                                    button
                                >
                                    Carbs
                                    <span className={'MuiLabel-amount'}>
                                        {(mealNutrientsAfter.carbs).toFixed(1)}
                                    </span>
                                </ListItem>
                                <ListItem
                                    classes={listStyles}
                                    button
                                >
                                    Fat
                                    <span className={'MuiLabel-amount'}>
                                                         {(mealNutrientsAfter.fat).toFixed(1)}
                                    </span>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box height={24} css={{flex: 'none'}}/>
            <Box height={24} css={{flex: 'none'}}/>
            <Box height={24} css={{flex: 'none'}}/>
        </Box>
    </DrawerSidebar>
}

/*
<Toolbar>
Details : {ingredientDescription}
<Button onClick={() => {
history.goBack();
}}>Go back</Button>

<Button onClick={() => {
addIngredient();
}}>Add ingredient</Button>
</Toolbar>

<Grid container spacing={2}>
<Grid item xs={6}>
<MediaCard
image={image}
title={ingredientDescription}
>
</MediaCard>
</Grid>
<Grid item xs={6}>
<Typography className={classes.heading2} variant={'h6'}>
Nutrients per 100 g
</Typography>

<Divider className={classes.divider}/>

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
*/