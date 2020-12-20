import React from "react";
import {IconButton, TextField} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import * as PropTypes from "prop-types";
import Box from "@material-ui/core/Box";


class OpenIcon extends React.Component {
    render() {
        return null;
    }
}


export default function PopUpForm({title, buttonSubmitLabel, inputs, onSubmit,onCancel, open=false}){
    function handleClose(){
        onSubmit();
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    {inputs.map(input => input)}
                </DialogContent>
                <DialogActions>
                   <Button onClick={handleClose}>
                       {buttonSubmitLabel}
                   </Button>
                    <Button onClick={() => onCancel()}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};