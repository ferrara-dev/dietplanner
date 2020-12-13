import {
    Button,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
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

export default function IngredientTable({edit, setEdit, ingredients, editIngredient, deleteIngredient}) {
    const styles = useStyles();
    const colWidth = {xs: 3};
    const borderColor = 'grey.500';
    const colStyles = useGutterBorderedGridStyles({borderColor, height: '80%'});
    const {url} = useRouteMatch();

    return (
        <Box pt={{xs: 2, sm: 4, md: 6}}>
            <Typography className={styles.heading} variant={'h1'} gutterBottom>
                Add ingredients and name your meal
            </Typography>
            <TableContainer>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align={"left"}>Ingredient</TableCell>
                            <TableCell>Protein</TableCell>
                            <TableCell>Carbs</TableCell>
                            <TableCell>Fat</TableCell>
                            <TableCell>Calories</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...ingredients].sort((a, b) => a.ingredient.label.localeCompare(b.ingredient.label))
                            .map(({quantity, ingredient}, index) => {
                                return <TableRow key={index}>
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
                                    <TableCell>
                                        {edit && <IconButton onClick={() => {
                                            deleteIngredient(ingredient);
                                            setEdit(false);
                                        }}>
                                            <Close/>
                                        </IconButton>}
                                    </TableCell>
                                    <TableCell>
                                        {edit && <IconButton
                                            onClick={() => {
                                                editIngredient(ingredient, quantity);
                                                setEdit(false);
                                            }}
                                            component={Link} to={`${url}/ingredient/${ingredient.foodId}`}>
                                            <EditIcon/>
                                        </IconButton>}
                                    </TableCell>
                                </TableRow>
                            })}

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>);
}