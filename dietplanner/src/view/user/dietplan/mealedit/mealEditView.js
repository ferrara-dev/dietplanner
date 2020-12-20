import {
     Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead,
    TableRow, TextField,

} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Close from "@material-ui/icons/Close";
import React from "react";
import useStyles from "../../../style/mui/mealEditStyle";
import EditIcon from "@material-ui/icons/Edit";
import {Link} from "react-router-dom"
import {useRouteMatch} from "react-router";
import {mealNutrientCalculator} from "../../../../helpers/calculation/MealNutrientCalculator";
import {Content, Trigger} from "../../../common/layout/styled";
import cx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";

export default function MealEditView({setMealTitle, mealTitle, ingredients, editIngredient, deleteIngredient, goBack,}) {
    const styles = useStyles();
    const {url} = useRouteMatch();
    const mealNutrients = mealNutrientCalculator(ingredients);

    return (
        <Content>
            <TextField
                label={"Meal title"}
                className={styles.textField}
                InputProps={{
                    classes: {root: styles.inputBase, input: styles.input},
                }}
                placeholder={"name your meal"}
                defaultValue={mealTitle}
                onChange={(e) => setMealTitle(e.target.value)}
            />
            <TableContainer>
                <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align={"left"}>Ingredient</TableCell>
                            <TableCell>Protein</TableCell>
                            <TableCell>Carbs</TableCell>
                            <TableCell>Fat</TableCell>
                            <TableCell>Calories</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell></TableCell>
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
                                            component={Link} to={`${url}/search/ingredient/${ingredient.foodId}`}>
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
        </Content>);
};

