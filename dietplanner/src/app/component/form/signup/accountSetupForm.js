import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AccountSetupForm({fields : {firstName="", lastName="", email="", password=""}, onChange}) {
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
                        value={firstName}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        value={lastName}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="email"
                        fullWidth
                        autoComplete="email"
                        value={email}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="password"
                        name="password"
                        label="password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={onChange}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}