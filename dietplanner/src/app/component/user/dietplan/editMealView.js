import {
    Button,
    Container,
    Grid,
    IconButton,
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Card,
    CardActions,
    Typography,
    CardContent,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete"
import React from "react";
import useStyles from "../../style/mui/mealBankStyle";
import {useHistory} from "react-router";
import {Link} from "react-router-dom"
import {useRouteMatch} from "react-router";
import {nutritionalCodes} from "../../../../helpers/constants";
import IngredientFactory from "../../../../helpers/ingredientFactory";
import {NutrientAccumulator} from "../../../../helpers/ingredientFactory";


export default function EditMealView({
                                         setMealName,
                                         mealName,
                                         data = [],
                                         mealTitle,
                                         onSearch,
                                         editIngredient,
                                         removeIngredient,
                                         submitMeal
                                     }) {
    const classes = useStyles();

    const history = useHistory();

    const {url, path} = useRouteMatch();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Ingredient</TableCell>
                                    <TableCell>
                                        Quantity
                                    </TableCell>
                                    <TableCell>
                                        Protein
                                    </TableCell>
                                    <TableCell>
                                        Carbs
                                    </TableCell>
                                    <TableCell>
                                        Fat
                                    </TableCell>
                                    <TableCell>
                                        Kcal
                                    </TableCell>
                                    <TableCell>
                                        <IconButton component={Link} to={`${url}/search`}>
                                            <AddIcon>

                                            </AddIcon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.length === 0 ? <TableRow>
                                    <TableCell component="th" scope="row">
                                        Your meal does not appear to have any ingredients yet.
                                    </TableCell>
                                </TableRow> : data.map(({ingredient, quantity}, index) => {
                                    return <TableRow key={index}>
                                        <TableCell component="th" scope="row" key={index}>
                                            <Button component={Link} to={`${url}/ingredient/${ingredient.foodId}`}
                                                    onClick={() => editIngredient({ingredient, quantity})}>
                                                {ingredient.label}
                                            </Button>
                                        </TableCell>
                                        <TableCell component="th" scope="row" key={index + 1}>
                                            {quantity}
                                        </TableCell>
                                        <TableCell component="th" scope="row" key={index + 2}>
                                            {(ingredient.nutrients.PROCNT * (quantity/100)).toFixed(1)}
                                        </TableCell>
                                        <TableCell component="th" scope="row" key={index + 3}>
                                            {(ingredient.nutrients.CHOCDF * (quantity/100)).toFixed(1)}
                                        </TableCell>
                                        <TableCell component="th" scope="row" key={index + 4}>
                                            {(ingredient.nutrients.FAT * (quantity/100)).toFixed(1)}
                                        </TableCell>
                                        <TableCell component="th" scope="row" key={index + 5}>
                                            {(ingredient.nutrients.ENERC_KCAL * (quantity/100)).toFixed(1)}
                                        </TableCell>
                                        <TableCell component="th" scope="row" key={index + 6}>
                                            <IconButton aria-label="delete" onClick={() => {
                                                removeIngredient({ingredient, quantity});
                                            }}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={1}>
                        {/*Object.entries(totalNutrients).map(([key, val], index) => {
                            const colors = [classes.card1, classes.card2, classes.card3, classes.card4, classes.card5]
                            return <Grid item xs={6} key={key}>
                                <Card
                                    raised
                                >
                                    <CardContent className={colors[index]}>
                                        <Typography variant="h5" component="h2">
                                            {key}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            {val.toFixed(1)}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        })*/}
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="meal-name"
                        label="Meal name"
                        defaultValue={mealName}
                        onBlur={(e) => {
                            setMealName(e.target.value);
                        }}
                        fullWidth
                    />

                    <Button
                        fullWidth
                        onClick={() => submitMeal()}
                    >
                        Add meal
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

function getNutrientValue(ingredient, quantity, id) {
    const foodNutrients = ingredient.nutrients;
    return (foodNutrients[id].amount  * (quantity / 100)).toFixed(1);
};

function hasValue(obj, value) {
    return Object.keys(obj).some((key) => obj[key] == value);
}

