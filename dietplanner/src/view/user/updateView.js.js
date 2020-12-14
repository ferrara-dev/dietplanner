import {Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import React from "react";
import useStyles from "../style/mui/UserProfileSyle";

export default function UpdateForm({fields, onChange}){
    const styles = useStyles();
    return <Box className={styles.root} py={3} px={3.5}>
        <Typography className={styles.heading2} variant={'h1'}>
            {"This sidebar is under development"}
        </Typography>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Grid container spacing={2}>
            <TextField
                id="weight"
                fullWidth
                type="number"
                label="Enter new weight (kg)"
                placeholder="Your weight (kg)"
                name="weight"
                onChange={onChange}
                className={styles.textField}
            >
            </TextField>
        </Grid>
        <Divider className={styles.divider}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Divider className={styles.divider}/>

        <Typography className={styles.heading2} variant={'h1'}>
            bla bla
        </Typography>

        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
    </Box>
}