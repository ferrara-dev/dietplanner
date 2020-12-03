import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Fab";

export default function FormDialog({onAdd}) {
    const [open, setOpen] = React.useState(false);
    const [input, setInput] = React.useState('');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleClose = () => {
        setOpen(false);
        onAdd(input);
    };

    return (
        <div>
            <Tooltip size="small" title="Add new meal" aria-label="add" onClick={handleClickOpen}>
                <AddIcon/>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        set meal name
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Meal name"
                        type="text"
                        value={input}
                        onChange={handleChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button disabled={input === ''} onClick={handleClose} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}