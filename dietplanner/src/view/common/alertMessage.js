import React from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";

export default function AlertMassage({open, message, title, onClick }) {
    function handleClose(event, reason) {
        if (reason === "clickaway") {
            return;
        }
        onClick();
    }

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
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}