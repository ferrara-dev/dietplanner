
import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles(({theme, palette, breakpoints})=> ({
    heading: {
        fontWeight: 900,
        fontSize: '1.75rem',
        textAlign: 'center',
        [breakpoints.up('sm')]: {
            textAlign: 'left',
        },
        [breakpoints.up('md')]: {
            fontSize: '2.25rem',
        },
    },
    edgeSidebarBody: {
        padding: '80px 0 40px 24px !important',
        background: 'none',
        boxShadow: 'none',
        overflow: "visible",
        right: 0,
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(45deg, #191D29, #3c5981)',
        borderRadius: 12,
        height: '100vh',
        '& *': {
            color: '#fff',
        },
    },
    button: {
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        width : "100%",
        padding: '0 30px',
    },
    buttonSubmit: {
        background: 'linear-gradient(45deg, #287825 30%, #689602 90%)',
    },
    buttonCancel: {
        background: 'linear-gradient(45deg, #A60000 30%, #CB0000 90%)',
    },
    buttonActive: {
        borderColor: '#fff',
    },
}));