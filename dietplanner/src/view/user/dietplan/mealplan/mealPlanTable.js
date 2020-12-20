import useStyles from "../../../style/mui/mealPlanStyle";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import EditIcon from "@material-ui/icons/Edit";

import {options, randomID} from "../../../../helpers/random";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

import AlertDialog from "../../../common/alertDialog";
import DeleteIcon from "@material-ui/icons/Delete";
import MealCategoryEditForm from "../../../form/mealCategoryEditForm";

import {Content, Trigger} from "../../../common/layout/styled";
import Toolbar from "@material-ui/core/Toolbar";
import withDietPlan from "../../../../HoC/withDietPlan";

function MealPlanTableView({
                               deleteMeal,
                               mealPlan,
                               chooseCategory,
                               deleteCategory,
                               chooseMeal,
                               addMealToCategory,
                               editCategory,
                               editCategoryError,
                           }) {

    const styles = useStyles();
    return <Content>
        <Box pt={{xs: 2, sm: 4, md: 6}}>
            <Toolbar>
                <Typography className={styles.heading} variant={'h1'} gutterBottom>
                    Your current mealPlan
                </Typography>
            </Toolbar>
            <TableContainer>
                <Table className={styles.table} aria-label="simple table">
                    <TableBody>
                        {[...mealPlan].sort((a, b) => {
                            const aPrio = a.priority;
                            const bPrio = b.priority;
                            if (aPrio < bPrio)
                                return -1;
                            else if (aPrio > bPrio)
                                return 1;
                            else {
                                const aDesc = a.description.toUpperCase();
                                const bDesc = b.description.toUpperCase();
                                if (aDesc < bDesc)
                                    return -1;
                                else if (aDesc > bDesc)
                                    return 1;
                                else
                                    return 0;
                            }
                        }).map(({description, meals, id, priority}, index) => (
                            <TableRow key={randomID(12, options.base64)}>
                                <TableCell key={randomID(12, options.base64)}>
                                    <Button
                                        component={Link}
                                        to={`/diet/category/${description}`}
                                        onClick={() => {
                                            chooseCategory(id);
                                        }}
                                    >
                                        {description}
                                    </Button>
                                </TableCell>
                                <TableCell key={randomID(12, options.base64)}>
                                    {<AlertDialog
                                        onConfirm={() => {
                                            deleteCategory(id);
                                        }}
                                        content={"Do you want to delete the " + description + " category?"}
                                        title={"Delete " + description + "?"}
                                        OpenIcon={DeleteIcon}
                                    />}
                                </TableCell>
                                <TableCell key={randomID(12, options.base64)}>
                                    <MealCategoryEditForm
                                        title={description}
                                        OpenIcon={EditIcon}
                                        error={editCategoryError}
                                        onSubmit={(fields) => editCategory(fields, id)}
                                        _fields={{description: description, priority: priority}}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </Content>

};


export default withDietPlan(MealPlanTableView)
