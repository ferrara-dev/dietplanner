import React from 'react';
import {TextField} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {useStyle} from "../style/mui/createMealFormStyle";
import SelectBox from "../common/input/selectBox";
import AlertMassage from "../common/alertMessage";

export default function CreateMealForm({error:{reset, err}, fields, set, handleChange}) {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            {<AlertMassage
                title={"error"}
                message={err && err.message}
                open={err && true || false}
                onClick={reset}
            />}
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
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    placeholder="#Meal number"
                    name="priority"
                    type="number"
                    defaultValue={fields.priority}
                    onChange={handleChange}
                />
                <button
                    onClick={set}
                    disabled={!fields.description || fields.description.length <= 0 || !fields.priority}>
                    submit
                </button>
            </div>
        </div>
    );
}
