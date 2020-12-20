import React from 'react';
import {Button, Collapse, Grid, TextField} from '@material-ui/core';
import {useStyle} from "../style/mui/createMealFormStyle";
import AlertMassage from "../common/alertMessage";
import {SidebarHeading, SidebarDivider} from "../common/content/sidebar/sidebarChildren";
import cx from "clsx";
import useStyles from "../style/mui/mealEditStyle";
import {NavLink as Link} from "react-router-dom";
import {DrawerSidebar, CollapseButton, CustomCollapse, Trigger} from "../common/layout/styled";
import Box from "@material-ui/core/Box";
import withContentLayout from "../withContentLayout";


function CreateMealForm({
                            trigger,
                            sidebar,
                            layout,
                            screen,
                            error: {reset, err},
                            fields,
                            set,
                            handleChange,
                            goBack,
                            success
                        }) {
    const classes = useStyle();
    const styles = useStyles();
    const collapsed = layout.state.sidebar.edgeSidebar.collapsed;
    console.log(screen);

    return (<>
            <DrawerSidebar
                PaperProps={{className: classes.edgeSidebarBody}}
                sidebarId={'edgeSidebar'}
            >
                    <Box className={classes.root} py={3} px={3.5}>
                        {
                            <AlertMassage
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
                                onClick={() => goBack("/diet/meal-plan")}
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
                                    component={Link}
                                    to="diet/meal-plan"
                                    classes={{
                                        root: cx(classes.button, classes.buttonActive, classes.buttonCancel),
                                    }}
                                >
                                    cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
            </DrawerSidebar>
        </>
    );
}

export default withContentLayout(CreateMealForm);