import {
    Button,
    Container,
    Grid,
    IconButton,
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete"
import React from "react";
import useStyles from "../../style/mui/mealBankStyle";
import {useHistory} from "react-router";
import {Link} from "react-router-dom"
import {useRouteMatch} from "react-router";


export default function EditMealView({data = [], mealTitle, onSearch, editIngredient, removeIngredient}) {
    const classes = useStyles();

    const history = useHistory();
    const {url, path} = useRouteMatch();
    return (<div className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Ingredient</TableCell>
                                    <TableCell>
                                        Quantity
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
                                </TableRow> : data.map(({ingredient, quantity}, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row" key={index}>
                                            <Button component={Link} to={`${url}/ingredient/${ingredient.fdcId}`}
                                                    onClick={() => editIngredient({ingredient, quantity})}>
                                                {ingredient.description}
                                            </Button>
                                        </TableCell>
                                        <TableCell component="th" scope="row" key={index + 1}>
                                            {quantity}
                                        </TableCell>
                                        <TableCell component="th" scope="row" key={index + 2}>
                                            <IconButton aria-label="delete" onClick={() => {
                                                removeIngredient({ingredient, quantity});
                                            }}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <Paper className={classes.paper}>
                    Nutritional values etc about your current mealplan goes here...
                </Paper>
            </Grid>
        </div>

    );
}