import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, Container, Grid, Paper, IconButton, Tooltip} from "@material-ui/core";
import {TableContainer, Table, TableRow, TableCell, TableHead, TableBody} from '@material-ui/core';
import React, {useEffect} from "react";
import useStyles from "../../style/mui/mealBankStyle";
import AddIcon from "@material-ui/icons/Add";
import {Link, useRouteMatch} from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";


export default function MealBankView({createMeal, data}) {
    const classes = useStyles();
    const {path, url} = useRouteMatch();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.mealPlanBar}>
                <Toolbar></Toolbar>
            </AppBar>

            <div className={classes.root}>
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={4} lg={5}>
                                <Paper className={classes.paper}>
                                    <TableContainer component={Paper}>
                                        <Table className={classes.table} size="small" aria-label="a dense table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Meals</TableCell>
                                                    <TableCell>
                                                        <IconButton onClick={(e) => {
                                                            createMeal();
                                                        }}  component={Link} to={`${url}/createMeal`}>
                                                            <AddIcon>

                                                            </AddIcon>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {data.length === 0 ? <TableRow>
                                                    <TableCell component="th" scope="row">
                                                        Your meal bank appears to be empty...
                                                    </TableCell>
                                                </TableRow> : data.map((row, index) => (
                                                    <TableRow key={row.mealTitle}>
                                                        <TableCell component="th" scope="row" key={index}>
                                                            {row.mealTitle}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={8} lg={7}>
                                <Paper className={classes.paper}>

                                </Paper>
                            </Grid>

                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    Nutritional values etc about your current mealplan goes here...
                                </Paper>
                            </Grid>
                        </Grid>

                    </Container>
                </main>
            </div>
        </div>
    );
}

function FormDialog({onAdd}) {
    const [open, setOpen] = React.useState(false);
    const [input, setInput] = React.useState('');
    const {path, url} = useRouteMatch();

    useEffect(() => {
        setInput('');
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSubmit = (e) => {
        onAdd({
            mealTitle : input,
            ingredients : [],
        })
        setInput('');
        setOpen(false);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <IconButton onClick={(e) => {
                setOpen(true);
            }}>
                <AddIcon>

                </AddIcon>
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Meal name</DialogTitle>
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
                    <Button component={Link} to={`${path}/${input}`} disabled={input === ''} onClick={handleSubmit} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const columns = [
    {field: 'mealTitle', headerName: 'Title', width: 130},
];