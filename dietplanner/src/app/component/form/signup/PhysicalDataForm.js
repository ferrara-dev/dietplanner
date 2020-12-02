import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from  '@material-ui/core/MenuItem';
import Select from  '@material-ui/core/Select';
import InputLabel from  '@material-ui/core/InputLabel';
import {numberSpan, activityLevels} from "../../../../helpers/constants";
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function PhysicalDataForm({fields:{age = "18",gender="", weight="40",height="", activityLevel=""}, onChange}) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Physical data & gender
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={age}
                        name="age"
                        onChange={onChange}
                        helperText="Please select your age"
                    >
                        {numberSpan(18,100).map((value) => (
                            <MenuItem key={value} value={value}>
                                {value}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        id="weight"
                        type="number"
                        fullWidth
                        label="Weight (kg)"
                        placeholder="Your weight in kg"
                        value={weight}
                        name="weight"
                        onChange={onChange}
                    >
                    </TextField>
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextField
                        id="height"
                        fullWidth
                        type="number"
                        label="Height (cm)"
                        placeholder="Your height in centimeters"
                        value={height}
                        name="height"
                        onChange={onChange}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="gender"
                            value={gender}
                            onChange={onChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="activityLevel"
                        fullWidth
                        value={activityLevel}
                        name="activityLevel"
                        onChange={onChange}
                        helperText="Please select your age"
                    >
                        {activityLevels.map((lvl) => (
                            <MenuItem key={lvl.val} value={lvl}>
                                {lvl.description}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}