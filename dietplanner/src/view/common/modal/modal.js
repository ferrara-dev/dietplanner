import React, {useState, useEffect} from "react";
import {createPortal} from "react-dom";
import "../../style/css/modal.css"
import {fade, makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router";



const Modal = (props) => {
    const history = useHistory();
    const classes = useStyles();


    return createPortal(
        <div className={classes.modalWrapper} onClick={() => {
            history.goBack();
        }}>

            {<div className={classes.modalContent} onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}>
                {props.children}
            </div>}

        </div>,
        document.getElementById("modal-root"),
    );
};

const useStyles = makeStyles((theme) => ({
    modalWrapper: {
        position: 'fixed',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: fade(theme.palette.common.white, 0.5),
        overflow : "hidden"
    },
    modalContent: {
        display : "flex",
        flexDirection: "column",
        position: 'absolute',
        backgroundColor: "#BADA55",
        zIndex: 99999,
        marginLeft: 150,
        marginRight: 150,
        maxWidth : "75%",
        maxHeight : "75%",
        minWidth : "75%",
        minHeight : "75%",
        borderRadius: "5px 20px 5px",
        right: -50,
        overflow : "auto",
    },
}));
export default Modal