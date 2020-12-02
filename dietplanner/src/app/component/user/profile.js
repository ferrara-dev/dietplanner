import useProfileStyle from "../style/UserProfileSyle";
import {CssBaseline, Container, Grid,Paper} from "@material-ui/core";

import clsx from "clsx";
export default function UserProfileView(){
    const classes = useProfileStyle();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return  (
        <div className={classes.root}>
            <h2> User profile </h2>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>

                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>

                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>

                            </Paper>
                        </Grid>
                    </Grid>

                </Container>
            </main>
       </div>
    );
}