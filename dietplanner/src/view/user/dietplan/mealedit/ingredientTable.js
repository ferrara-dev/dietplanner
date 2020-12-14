import {
    Button, Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Close from "@material-ui/icons/Close";
import React from "react";
import useStyles from "../../../style/mui/mealEditStyle";
import {useGutterBorderedGridStyles} from '@mui-treasury/styles/grid/gutterBordered';
import EditIcon from "@material-ui/icons/Edit";
import {Link} from "react-router-dom"
import {useRouteMatch} from "react-router";
import {averageMealPlanNutrients, mealNutrientCalculator} from "../../../../helpers/calculation/MealNutrientCalculator";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Chart, Legend, PieSeries, Title, Tooltip} from "@devexpress/dx-react-chart-material-ui";
import {Animation} from "@devexpress/dx-react-chart";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import cx from "clsx";
import SimpleMediaQuery from "../../../style/mui/mediaQuery/mealEditMediaQueries";

export default function IngredientTable({mealPlan,mealTitle, edit, ingredients, editIngredient, deleteIngredient}) {
    const styles = useStyles();
    const colWidth = {xs: 3};
    const borderColor = 'grey.500';
    const colStyles = useGutterBorderedGridStyles({borderColor, height: '80%'});
    const {url} = useRouteMatch();
    const mealNutrients = mealNutrientCalculator(ingredients);
    const mealPlanNutrients = averageMealPlanNutrients(mealPlan);
    return (
        <Box pt={{xs: 2, sm: 4, md: 6}}>
            <Typography className={styles.heading} variant={'h1'} gutterBottom>
                Add ingredients and name your meal
            </Typography>
            <TableContainer className={styles.table}>
                <Table stickyHeader className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align={"left"}>Ingredient</TableCell>
                            <TableCell>Protein</TableCell>
                            <TableCell>Carbs</TableCell>
                            <TableCell>Fat</TableCell>
                            <TableCell>Calories</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>  <SimpleMediaQuery query={ '(max-width:1050px)'}>
                                <Button
                                    component={Link} to={`${url}/${mealTitle || "noName"}/search`}
                                    startIcon={<FastfoodIcon/>}
                                >
                                    Add new ingredient
                                </Button>
                            </SimpleMediaQuery></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...ingredients].sort((a, b) => a.ingredient.label.localeCompare(b.ingredient.label))
                            .map(({quantity, ingredient}, index) => {
                                return <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                                    <TableCell component="th" scope="row">
                                        <Box display={'flex'} alignItems={'center'}>
                                            <Box width={80} height={80}>
                                                <img
                                                    className={styles.image}
                                                    alt={"blba bla"}
                                                    src={ingredient.image || "https://via.placeholder.com/728x90.png?text=No+Picture"}
                                                />
                                            </Box>
                                            <Box ml={2}>
                                                <p className={styles.name}>{ingredient.label}</p>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <p className={styles.name}>{(ingredient.nutrients.PROCNT * (quantity / 100)).toFixed(1)}</p>
                                    </TableCell>
                                    <TableCell>
                                        <p className={styles.name}>{(ingredient.nutrients.CHOCDF * (quantity / 100)).toFixed(1)}</p>
                                    </TableCell>
                                    <TableCell>
                                        <p className={styles.name}>{(ingredient.nutrients.FAT * (quantity / 100)).toFixed(1)}</p>
                                    </TableCell>
                                    <TableCell>
                                        <p className={styles.name}>{(ingredient.nutrients.ENERC_KCAL * (quantity / 100)).toFixed(1)}</p>
                                    </TableCell>
                                    <TableCell>
                                        <p className={styles.name}>{(quantity)}</p>
                                    </TableCell>
                                    {<TableCell>
                                        <IconButton onClick={() => {
                                            deleteIngredient(ingredient);
                                        }}>
                                            <Close fontSize="small"/>
                                        </IconButton>
                                    </TableCell>}
                                    {<TableCell>
                                        <IconButton
                                            onClick={() => {
                                                editIngredient(ingredient, quantity);
                                            }}
                                            component={Link} to={`${url}/ingredient/${ingredient.foodId}`}>
                                            <EditIcon fontSize="small"/>
                                        </IconButton>
                                    </TableCell>}
                                </TableRow>
                            })}
                    </TableBody>
                    <TableFooter classes={{root: styles.tableFooter}}>
                        <TableRow>
                            <TableCell> <Box ml={2}>
                                <p className={styles.name}>Total</p>
                            </Box>
                            </TableCell>
                            <TableCell><p className={styles.name}>{mealNutrients.protein.toFixed(0)}</p></TableCell>
                            <TableCell><p className={styles.name}>{mealNutrients.carbs.toFixed(0)}</p></TableCell>
                            <TableCell><p className={styles.name}>{mealNutrients.fat.toFixed(0)}</p></TableCell>
                            <TableCell><p className={styles.name}>{mealNutrients.kcal.toFixed(0)}</p></TableCell>
                            <TableCell colSpan={3}>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Box>);
}