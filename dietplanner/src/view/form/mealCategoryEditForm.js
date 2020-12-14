import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {IconButton, TextField} from "@material-ui/core";


export default function MealCategoryEditForm({error, onSubmit, title, content, OpenIcon, _fields}) {
    const [open, setOpen] = React.useState(false);
    const [fields, setFields] = React.useState({..._fields});

    const handleChange = (event) => {
        event.preventDefault();
        setFields(fields => ({...fields, [event.target.name]: event.target.value}));
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <OpenIcon fontSize="small"/>
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        onSubmit(fields);
                        if (!error)
                            handleClose();
                        else if(error && _fields.description === fields.description){
                            handleClose();
                        };
                    }} color="primary" autoFocus>
                        submit changes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}