import useStyles from "../../style/mui/UserProfileSyle";
import React from "react";
import {Content} from "../../common/layout/styled";
import withContentLayout from "../../../HoC/withContentLayout";
import {Line, ResponsiveContainer, XAxis, YAxis} from "recharts";
import LineChart from "recharts/lib/chart/LineChart";
import {useTheme} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Chart from "react-google-charts";
import {numberSpan} from "../../../helpers/constants";

function createData(updates) {
    const data = updates.map((update, i) => {
        return [i, (update.profile.weight * 1)]
    });

    return data;
};

const options = {
    title: "Your weight",
    hAxis: {
        title: 'Update#',
    },
    vAxis: {
        title: 'Weight (kg)',
    },

    legend: {position: "bottom"}
};

function UserProgressView({updates, userProfile, onChange, mealPlan, newUpdate}) {
    const styles = useStyles();
    createData(updates);
    const data = [["update", "weight"], ...createData(updates)]

    return <Content>
        <Typography className={styles.heading2} variant={'h1'}>
            Your weight change
        </Typography>

        <Chart
            chartType="LineChart"
            width={'100%'}
            height={'400px'}
            data={data}

            options={{
                intervals: { style: 'bars' },
                hAxis: {
                    title: 'Update#',
                    gridLines : {
                        count : 1,
                    },
                    ticks: numberSpan(0,updates.length)
                },
                vAxis: {
                    title: 'Weight (kg)',

                },

                legend: {position: "bottom"}
            }
            }
            loader={<div>Loading Chart</div>}
        />
        <Divider className={styles.divider}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Divider className={styles.divider}/>

        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>

    </Content>
}

export default withContentLayout(UserProgressView);
