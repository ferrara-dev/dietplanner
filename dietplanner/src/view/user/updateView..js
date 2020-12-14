import {Button, Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import React from "react";
import useStyles from "../style/mui/UserProfileSyle";
import {activityLevels} from "../../helpers/constants";
import MenuItem from "@material-ui/core/MenuItem";
import {Link} from "react-router-dom";
import cx from "clsx";
import {Mail} from "@material-ui/icons";

export default function UpdateForm({fields, onChange, onSubmit}) {
    const styles = useStyles();
    return <Box className={styles.root} py={3} px={3.5}>
        <Typography className={styles.heading2} variant={'h1'}>
            {"Update submission"}
        </Typography>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    id="weight"
                    type="number"
                    label="Enter Your weight (kg)"
                    placeholder="Your weight (kg)"
                    name="weight"
                    defaultValue={fields.weight}
                    onChange={onChange}
                    className={styles.textField}
                >
                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="activityLevel"
                    fullWidth
                    value={fields.activityLevel | " "}
                    name="activityLevel"
                    onChange={onChange}
                    helperText="Please select your activity level"
                >
                    {activityLevels.map((lvl) => (
                        <MenuItem key={lvl.val} value={lvl}>
                            {lvl.description}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
        <Divider className={styles.divider}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Divider className={styles.divider}/>
        <Grid container spacing={2}>
            <Grid xs={12} item>
                <Button
                    component={Link} to="/home/mealPlan/category/create-new"
                    startIcon={<Mail/>}
                    onClick={(e) => onSubmit(e)}
                    classes={{
                        root: cx(styles.button, styles.buttonActive),
                        label: styles.creditCardLabel,
                    }}
                >
                    Submit update
                </Button>
            </Grid>
        </Grid>

        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
    </Box>
}