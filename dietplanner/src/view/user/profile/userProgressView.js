import useStyles from "../../style/mui/UserProfileSyle";
import React from "react";
import {Content} from "../../common/layout/styled";
import withContentLayout from "../../../HoC/withContentLayout";
import {Line, ResponsiveContainer, XAxis, YAxis} from "recharts";
import LineChart from "recharts/lib/chart/LineChart";
import { useTheme } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
function createData(updates){
   const data =  updates.map((update, i) => {
        return {weight : update.profile.weight, pos : i}
    });

   return data;
};

function UserProgressView({updates, userProfile, onChange, mealPlan, newUpdate}) {
    const styles = useStyles();
    return <Content>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Chart data={createData(updates)}/>
            </Grid>
        </Grid>
        <Divider className={styles.divider}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Divider className={styles.divider}/>

        <Typography className={styles.heading2} variant={'h1'}>
            This page will contain progress statistics
        </Typography>

        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>

    </Content>
}

export default withContentLayout(UserProgressView);

function Chart({data}) {
    const theme = useTheme();

    return (
        <React.Fragment>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis dataKey="weight" stroke={"#ff7300"}/>
                    <Line type="monotone" dataKey="pos" stroke={theme.palette.primary.main} dot={false}/>
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}