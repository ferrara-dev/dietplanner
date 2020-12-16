import React from 'react';
import {Button, Grid, TextField} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {useStyle} from "../style/mui/createMealFormStyle";
import SelectBox from "../common/input/selectBox";
import AlertMassage from "../common/alertMessage";
import withSidebarLayout from "../common/content/withSidebarLayout";
import {SidebarHeading, SidebarDivider} from "../common/content/sidebar/sidebarChildren";
import {Link} from "react-router-dom";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import cx from "clsx";


function CreateMealForm({error: {reset, err}, fields, set, handleChange, goBack, success}) {
    const classes = useStyle();

    return (<React.Fragment>
            {<AlertMassage
                title={"error"}
                message={err && err.message}
                open={err && true || false}
                onClick={reset}
            />}
            {
                success && <AlertMassage
                    title={"Success !"}
                    message={"You successfully created a new meal category !"}
                    open={true}
                    onClick={() => goBack("/home/meal-plan")}
                />
            }
            <SidebarHeading styleProps={{color: "#051937", fontFamily: "verdana"}}>
                Create new meal category
            </SidebarHeading>

            <SidebarDivider styleProps={{backgroundColor: "#051937", margin: '35px 0'}}/>

            <TextField
                variant="outlined"
                margin="normal"
                required
                id="title"
                placeholder="Meal name / title"
                name="description"
                type="text"
                defaultValue={fields.description}
                onChange={handleChange}
            />

            <TextField
                variant="outlined"
                margin="normal"
                required
                id="priority"
                placeholder="#Meal number"
                name="priority"
                type="number"
                defaultValue={fields.priority}
                onChange={handleChange}
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Button
                        classes={{
                            root: cx(classes.button, classes.buttonActive, classes.buttonSubmit),
                        }}
                        onClick={set}

                        disabled={!fields.description || fields.description.length <= 0 || !fields.priority}>
                        submit
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        classes={{
                            root: cx(classes.button, classes.buttonActive, classes.buttonCancel),
                        }}
                        onClick={() => goBack("/home/meal-plan")}
                    >
                        cancel
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default withSidebarLayout(CreateMealForm, {
    background: 'linear-gradient(45deg, #fff5f1, #3c5981)',
    color: 'black',
});