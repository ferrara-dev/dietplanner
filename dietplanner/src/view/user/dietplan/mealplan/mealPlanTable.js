import useStyles from "../../../style/mui/mealEditStyle";
import {useRouteMatch} from "react-router";
import {
    IconButton, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import ExpandableTableRow from "../../../common/table/expandableTable";
import {options, randomID} from "../../../../helpers/random";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {Add} from "@material-ui/icons";
import AlertDialog from "../../../common/alertDialog";
import DeleteIcon from "@material-ui/icons/Delete";
import MealCategoryEditForm from "../../../form/mealCategoryEditForm";
import withContentLayout from "../../../withContentLayout";
import {Content, Trigger} from "../../../common/layout/styled";
import cx from "clsx";

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
            <Typography className={styles.heading} variant={'h1'} gutterBottom>
                Your current mealPlan
            </Typography>
            <div className={cx(styles.fab, styles.fabClose)}><Trigger sidebarId={"edgeSidebar"}/></div>
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
                            <ExpandableTableRow
                                key={id}
                                k={id}
                                expandComponent={
                                    meals.map((meal) => (
                                        [<TableCell key={randomID(12, options.base64)}
                                                    colSpan="3">
                                            <Button component={Link}
                                                    to={`/meal/${description}/edit`}
                                                    onClick={(e) => {
                                                        chooseCategory(id);
                                                        chooseMeal(meal)
                                                    }}>{meal.title}
                                            </Button>
                                        </TableCell>,
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
                                            </TableCell>]
                                    ))
                                }
                            >
                                <TableCell key={index}>
                                    <Button
                                        onClick={() => {
                                            chooseCategory(id);
                                        }}>{description}
                                    </Button>
                                </TableCell>
                                <TableCell key={randomID(32, options.base64)}>
                                    {<IconButton key={index - 1} component={Link}
                                                 to={`/meal/${description}/edit`}
                                                 onClick={() => {
                                                     addMealToCategory(id);
                                                 }}>
                                        <Add fontSize="small"/>
                                    </IconButton>}
                                </TableCell>
                                <TableCell key={randomID(32, options.base64)}>
                                    {<AlertDialog
                                        onConfirm={() => {
                                            deleteCategory(id);
                                        }}
                                        content={"Do you want to delete the " + description + " category?"}
                                        title={"Delete " + description + "?"}
                                        OpenIcon={DeleteIcon}
                                    />}
                                </TableCell>
                                <TableCell key={randomID(32, options.base64)}>
                                    <MealCategoryEditForm
                                        title={description}
                                        OpenIcon={EditIcon}
                                        error={editCategoryError}
                                        onSubmit={(fields) => editCategory(fields, id)}
                                        _fields={{description: description, priority: priority}}
                                    />
                                </TableCell>
                            </ExpandableTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </Content>

};

export default withContentLayout(MealPlanTableView);