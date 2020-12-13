import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {useSignupFormStyle} from "../../style/mui/signupFormStyle";
import Button from "@material-ui/core/Button";

export default function AccountSetupForm({
                                             fields: {firstName, lastName, email, password},
                                             validateFields,
                                             onChange,
                                             nav: {handleNext},
                                             validator
                                         }) {
    const classes = useSignupFormStyle();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Account setup & contact information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        defaultValue={firstName}
                        onChange={onChange}
                    />
                    <div className={classes.errorMessage}>
                        {validator.message('firstName', firstName, 'required')}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        defaultValue={lastName}
                        onChange={onChange}
                    />
                    <div className={classes.errorMessage}>
                        {validator.message('lastName', lastName, 'required')}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="email"
                        fullWidth
                        autoComplete="email"
                        defaultValue={email}
                        onChange={onChange}
                    />
                    <div className={classes.errorMessage}>
                        {validator.message('email', email, 'required|email')}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="password"
                        name="password"
                        label="password"
                        type="password"
                        fullWidth
                        defaultValue={password}
                        onChange={(e) => {
                            onChange(e);
                        }}
                    />
                    <div className={classes.errorMessage}>
                        {validator.message('password', password, 'required|min:6')}
                    </div>
                </Grid>
            </Grid>

            <div className={classes.buttons}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={validateFields({firstName, lastName, email, password})}
                >
                    {'Next'}
                </Button>
            </div>
        </React.Fragment>
    );
};
