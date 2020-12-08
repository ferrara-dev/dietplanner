import React from 'react';
import {TextField} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {useStyle} from "../style/mui/createMealFormStyle";


export default function CreateMealForm({fields, set, handleChange}) {
    const classes = useStyle();
    const [title, setTitle] = React.useState(fields.title);
    const [category, setCategory] = React.useState(fields.category);

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
                    name="title"
                    type="text"
                    defaultValue={title}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="category"
                    placeholder="Meal category"
                    name="category"
                    type="text"
                    defaultValue={category}
                    onChange={handleChange}
                />
                <button onClick={set}>
                    create category
                </button>
            </div>
        </div>
    );
}
