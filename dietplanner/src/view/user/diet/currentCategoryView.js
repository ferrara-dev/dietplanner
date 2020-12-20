import {Content} from "../../common/layout/styled";
import useStyles from "../../style/mui/mealPlanStyle";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Typography
} from "@material-ui/core";
import {options, randomID} from "../../../helpers/random";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import AlertDialog from "../../common/alertDialog";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import {averageMealCategoryNutrients} from "../../../helpers/calculation/MealNutrientCalculator";
import withDietPlan from "../../../HoC/withDietPlan";
import withCurrentCategory from "../../../HoC/withCurrentCategory";
import TableHead from "@material-ui/core/TableHead";
import {Tooltip} from "@material-ui/core"
import {Add} from "@material-ui/icons";
import PopUpForm from "../../form/popUpForm";
import {useRouteMatch} from "react-router";

function CurrentCategoryView({description, meals, chooseMeal, removeMeal, addMeal}) {
    const styles = useStyles();
    const averageNutrients = averageMealCategoryNutrients({meals});
    const [open, setOpen] = React.useState(false);
    const [fields, setFields] = React.useState({});
    const {url} = useRouteMatch();

    function onFormChange(event) {
        event.preventDefault();
        setFields(fields => ({...fields, [event.target.name]: event.target.value}));
    };

    return <Content>
        <Box pt={{xs: 2, sm: 4, md: 6}}>
            <Toolbar>
                <Typography className={styles.heading} variant={'h1'} gutterBottom>
                    Category : {description}
                </Typography>
            </Toolbar>
            <TableContainer>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Meal</TableCell>
                            <TableCell>
                                <Tooltip title="Add new meal">
                                    <IconButton
                                        onClick={() => {
                                            setOpen(true);
                                        }}
                                        aria-label="add"
                                    >
                                        <Add/>
                                    </IconButton>
                                </Tooltip>
                                <PopUpForm
                                    open={open}
                                    inputs={[
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            placeholder="Meal name"
                                            name="title"
                                            type="text"
                                            defaultValue={fields.description}
                                            onChange={onFormChange}
                                            key={1}
                                        />
                                    ]}
                                    disabled={!fields.description}
                                    title={"Add meal to category"}
                                    buttonSubmitLabel={"add"}
                                    onCancel={() =>
                                        setOpen(false)
                                    }
                                    onSubmit={() => {
                                        addMeal(fields.title);
                                        setOpen(false);
                                    }}
                                />


                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {meals.map((meal) => (
                            <TableRow key={randomID(12, options.base64)}>
                                <TableCell key={randomID(12, options.base64)}>
                                    <Button key={randomID(12, options.base64)}
                                        component={Link}
                                            to={`${url}/meal/${meal.mealId}`}
                                            onClick={(e) => {
                                                chooseMeal(meal)
                                            }}>{meal.title}
                                    </Button>
                                </TableCell>
                                <TableCell key={randomID(12, options.base64)}
                                           colSpan="3">
                                    <AlertDialog
                                        key={randomID(12, options.base64)}
                                        onConfirm={() => {
                                            removeMeal(meal);
                                        }}

                                        content={"Do you want to delete the " + meal.title + " meal?"}
                                        title={"Delete " + meal.title + "?"}
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
};

export default withCurrentCategory(withDietPlan(CurrentCategoryView));