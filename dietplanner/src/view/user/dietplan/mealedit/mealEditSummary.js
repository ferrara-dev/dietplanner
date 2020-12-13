import Box from "@material-ui/core/Box";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import cx from "clsx";
import React from "react";
import useStyles from "../../../style/mui/mealEditStyle";
import {Link} from "react-router-dom";
import {useRouteMatch} from "react-router";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EditIcon from "@material-ui/icons/Edit";
import {averageMealPlanNutrients} from "../../../../helpers/calculation/MealNutrientCalculator";

export default function MealEditSummary({edit, mealTitle, setMealTitle, submitMeal, setEdit}){
    const styles = useStyles();
    const {url} = useRouteMatch();


    return  <Box className={styles.root} py={3} px={3.5}>
        <Typography className={styles.heading2} variant={'h1'}>
            {mealTitle && mealTitle + " summary"}
        </Typography>
        <Divider className={styles.divider} />
        <Typography className={styles.label}></Typography>
        <Grid container spacing={2}>
            <Grid xs={6} item>
                <Button
                    component={Link} to={`${url}/${mealTitle || "noName"}/search`}
                    startIcon={<FastfoodIcon />}
                    classes={{
                        root: cx(styles.button, styles.buttonActive),
                        label: styles.creditCardLabel,
                    }}
                >
                    Add new ingredient
                </Button>
            </Grid>
            <Grid xs={6} item>
                <Button
                    startIcon={<EditIcon/>}
                    onClick={() => {
                        setEdit((!edit));
                    }}
                    classes={{
                        root: cx(styles.button, styles.buttonActive),
                        label: styles.creditCardLabel,
                    }}
                >
                    Edit ingredients
                </Button>
            </Grid>
        </Grid>
        <Divider className={styles.divider} />
        <TextField
            className={styles.textField}
            fullWidth
            InputProps={{
                classes: { root: styles.inputBase, input: styles.input},
            }}
            label={'meal title'}
            defaultValue={mealTitle}
            onChange={(e) => setMealTitle(e.target.value)}
        />
        <Box height={24} css={{ flex: 'none' }} />
        <Box height={24} css={{ flex: 'none' }} />
        <Box height={24} css={{ flex: 'none' }} />
        <Button
            className={styles.checkoutBtn}
            color={'primary'}
            variant={'contained'}
            onClick={() => submitMeal()}
        >
            Submit meal
        </Button>
    </Box>
}