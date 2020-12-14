import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {activityLevels} from "../../../helpers/constants";
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from "@material-ui/core/Button";
import {useSignupFormStyle} from "../../style/mui/signupFormStyle";


export default function PhysicalDataForm({
                                             validateFields,
                                             validator,
                                             fields: {dob, gender="female", weight, height, activityLevel},
                                             onChange,
                                             nav: {handleBack, handleNext}
                                         }) {
    const classes = useSignupFormStyle();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Personal details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        name="dob"
                        defaultValue={dob || "2000-01-01"}
                        onChange={onChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <div className={classes.errorMessage}>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        id="height"
                        fullWidth
                        type="number"
                        label="Height (cm)"
                        placeholder="Your height in centimeters"
                        defaultValue={height || 120}
                        name="height"
                        onChange={onChange}
                    >
                    </TextField>

                    <div className={classes.errorMessage}>
                        {validator.message('height', height, 'required|numeric|min:120,num')}
                    </div>

                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        id="weight"
                        fullWidth
                        type="number"
                        label="Weight (kg)"
                        placeholder="Your weight (kg)"
                        defaultValue={weight || 50}
                        name="weight"
                        onChange={onChange}
                    >
                    </TextField>

                    <div className={classes.errorMessage}>
                        {validator.message('weight', weight, 'required|numeric|min:40,num')}
                    </div>

                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="gender"
                            value={gender || "female"}
                            onChange={onChange}
                        >
                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        </RadioGroup>
                    </FormControl>
                    <div className={classes.errorMessage}>
                        {validator.message('gender', gender, 'required')}
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="activityLevel"
                        fullWidth
                        value={activityLevel || ""}
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

            <div className={classes.buttons}>
                <Button onClick={handleBack} className={classes.button}>
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={validateFields({gender, weight, height})}
                >
                    {'Next'}
                </Button>
            </div>
        </React.Fragment>
    );
}