import React from 'react';
import {TextField} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {useStyle} from "../style/mui/createMealFormStyle";


export default function CreateMealForm({fields, set, handleChange}) {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <div className={classes.paper}>
                <Typography component={'span'} variant={'body2'}>
                    Meal information
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    placeholder="Meal name / title"
                    name="description"
                    type="text"
                    defaultValue={fields.description}
                    onChange={handleChange}
                />
                <button onClick={set}>
                    create category
                </button>
            </div>
        </div>
    );
}
