import {Content} from "../../common/layout/styled";
import useStyles from "../../style/mui/mealPlanStyle";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import {IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@material-ui/core";
import ExpandableTableRow from "../../common/table/expandableTable";
import {options, randomID} from "../../../helpers/random";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import AlertDialog from "../../common/alertDialog";
import DeleteIcon from "@material-ui/icons/Delete";
import {Add} from "@material-ui/icons";
import MealCategoryEditForm from "../../form/mealCategoryEditForm";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import {averageMealCategoryNutrients} from "../../../helpers/calculation/MealNutrientCalculator";

export default function CurrentCategoryView({description, meals, chooseMeal, deleteMeal}) {
    const styles = useStyles();
    const averageNutrients = averageMealCategoryNutrients(meals);
    return <Content>
        <Box pt={{xs: 2, sm: 4, md: 6}}>
            <Toolbar>
                <Typography className={styles.heading} variant={'h1'} gutterBottom>
                    Category : description
                </Typography>
            </Toolbar>
            <TableContainer>
                <Table className={styles.table} aria-label="simple table">
                    <TableBody>
                        {meals.map((meal) => (
                            <TableRow>
                                <TableCell key={randomID(12, options.base64)}
                                           colSpan="3">
                                    <Button component={Link}
                                            to={`/diet/meal/${description}/edit`}
                                            onClick={(e) => {
                                                chooseMeal(meal)
                                            }}>{meal.title}
                                    </Button>
                                </TableCell>
                                <TableCell key={randomID(12, options.base64)}
                                           colSpan="3">
                                    <AlertDialog
                                        onConfirm={() => {
                                            deleteMeal(meal, id);
                                        }}

                                        content={"Do you want to delete the " + meal.title + " meal?"}
                                        title={"Delete " + description + "?"}
                                        OpenIcon={DeleteIcon}
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </Content>
}