import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {numberSpan, activityLevels} from "../../../helpers/constants";
import NativeSelect from '@material-ui/core/NativeSelect';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from "@material-ui/core/Button";
import {useSignupFormStyle} from "../../style/mui/signupFormStyle";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function PhysicalDataForm({
                                             validateFields,
                                             validator,
                                             fields: {age, gender="female", weight, height, activityLevel},
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
                        id="outlined-select-currency"
                        label="age"
                        type="number"
                        defaultValue={age || 18}
                        name="age"
                        onBlur={onChange}
                        helperText="Please select your age"
                    >
                        {numberSpan(18, 100).map((value) => (
                            <MenuItem key={value} value={value}>
                                {value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <div className={classes.errorMessage}>
                        {validator.message('age', age, 'required|numeric|min:18,num')}
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
                    disabled={validateFields({age, gender, weight, height})}
                >
                    {'Next'}
                </Button>
            </div>
        </React.Fragment>
    );
}


function hasEmptyField(fields) {
    return Object.keys(fields).some((propName) => {
        if (!fields[propName])
            return true;
    });
}