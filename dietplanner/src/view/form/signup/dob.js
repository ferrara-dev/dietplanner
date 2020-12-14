import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import Birthday from '@mui-treasury/components/textField/birthday';
import { useBootstrapInputStyles } from '@mui-treasury/styles/input/bootstrap';
import { bootstrapLabelStyles } from '@mui-treasury/styles/textField/bootstrap';

const useStyles = makeStyles(() => ({
    label: { marginBottom: 8 },
    day: {
        width: 56,
    },
    month: {
        width: 56,
    },
    year: {
        width: 72,
    },
}));

const useLabelStyles = makeStyles(bootstrapLabelStyles);

const BirthdayTextField = ({onChange}) => {
    const [value, setValue] = React.useState('');

    return (
            <Birthday name={"age"} label={'Date of birth'} value={value} onChange={e=> {
                setValue(e.target.value);
                onChange(e)
            }}>
                <Birthday.Day
                    component={Input}
                    placeholder={'DD'}
                    nextFocus={'birthday.month2'}
                />
                <Birthday.Separator />
                <Birthday.Month
                    component={Input}
                    placeholder={'MM'}
                    name={'birthday.month2'}
                    nextFocus={'birthday.year2'}
                />
                <Birthday.Separator />
                <Birthday.Year
                    component={Input}
                    placeholder={'YYYY'}
                    name={'birthday.year2'}
                />
            </Birthday>
    );
};

export default BirthdayTextField;