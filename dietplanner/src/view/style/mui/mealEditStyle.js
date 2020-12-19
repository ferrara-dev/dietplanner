import {makeStyles} from "@material-ui/core";
import {fade} from "@material-ui/core/styles";

const styles = makeStyles(({palette, breakpoints}) => ({
    tableFooter: {
        left: 0,
        bottom: 0, // <-- KEY
        zIndex: 2,
        position: 'sticky'
    },
    emptyCell: {
        emptyCells: 'show'
    },
    nutrientsCard: {
        color: fade("#22c1b9", 0.5)
    },
    chartRoot: {
        display: "block",
        padding: 10,
        fontSize: 14,
        fontFamily: "Fira Sans Roboto Helvetica Arial sans-serif",
        fontWeight: "300",
        boxSizing: "border-box",
        flexDirection: "column"
    },
    btn: {
        width: '100%',
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 40,
        border: '1px solid',
        borderColor: palette.grey[400],
        '& > *': {
            fontWeight: 'bold',
            textTransform: 'none',
        },
        marginRight: 72,
        [breakpoints.up('sm')]: {
            marginRight: 'unset',
        },
    },
    big: {
        fontSize: 16,
    },
    large: {
        fontSize: 24,
    },
    mainGrid: {
        [breakpoints.up('sm')]: {
            flexDirection: 'row-reverse',
        },
    },
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
    table: {
        minWidth: "100%",
        maxHeight: 450,
        emptyCells: 'show',
        [breakpoints.up('lg')]: {
            minWidth: 960,
        },
        [breakpoints.up('lg')]: {
            minWidth: 960,
        },
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    name: {
        fontFamily:
            '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
        fontWeight: 'bold',
        fontSize: 16,
        margin: '0 0 8px 0',
    },
    descr: {
        fontSize: 14,
        color: palette.text.secondary,
    },
    header: {
        backgroundColor: '#ffffff',
    },
    toolbar: {},
    edgeSidebarBody: {
        padding: '24px 0 40px 24px !important',
        background: 'none',
        boxShadow: 'none',
        overflow: "visible",
        right: 0,
    },
    sidebarBody: {
        background: 'none',
        overflow: 'visible !important',
        backgroundColor: "#fff !important"
    },
    sidebarPaper: {
        maxWidth: 400,
        padding: 16,
        background: 'none',
        boxShadow: 'none',
        overflow: "visible"
    },
    container: {
        minHeight: 0,
        display: 'flex',
    },
    content: {
        overflow: 'auto',
    },
    footer: {
        border: 'unset',
        position: 'relative',
        backgroundColor: '#fff',
        '&:before': {
            content: '" "',
            position: 'absolute',
            width: '100%',
            height: 24,
            top: 0,
            left: 0,
            transform: 'translateY(-100%)',
            background: 'linear-gradient(to top, #ffffff, rgba(255,255,255,0))',
        },
        [breakpoints.only('sm')]: {
            paddingRight: 64,
        },
        [breakpoints.up('lg')]: {
            paddingBottom: 40,
        },
    },
    fab: {
        position: 'fixed',
        bottom: 16,
        right: 16,
        color: '#2E3B4D',
        '& svg': {
            fontSize: 32,
            color: '#fff',
        },
        zIndex: 1500,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        [breakpoints.up('lg')]: {
            bottom: 40,
        },
        [breakpoints.up('lg')]: {
            transform: 'scale(0)',
        },
    },
    fabClose: {
        top: 8,
        right: 8,
        width: 48,
        height: 48,
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
    heading2: {
        fontWeight: 900,
        fontSize: '2.25rem',
    },
    divider: {
        backgroundColor: '#fff',
        opacity: 0.12,
        margin: '24px 0',
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 16,
        opacity: 0.87,
    },
    button: {
        minHeight: 48,
        borderRadius: 40,
        borderColor: 'rgba(255, 255, 255, 0.12)',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '100%',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
        },
    },
    buttonActive: {
        borderColor: '#fff',
    },
    creditCardLabel: {
        fontSize: 12,
        textTransform: 'initial',
    },
    paypalLabel: {
        fontSize: 20,
        textTransform: 'initial',
        fontStyle: 'italic',
        fontFamily:
            '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
        fontWeight: 'bold',
        lineHeight: 1,
    },
    textField: {
        '& label': {
            opacity: 0.87,
            fontWeight: 'bold',
        },
        '&:hover': {
            '& $inputBase:before': {
                borderColor: 'rgba(255, 255, 255, 0.38)',
            },
        },
    },
    inputBase: {
        '&:before': {
            borderColor: 'rgba(255, 255, 255, 0.12)',
        },
    },
    input: {
        padding: '16px 0',
    },
    select: {
        '& label': {
            opacity: 0.4,
        },
        '&:hover': {
            '& $inputBase:before': {
                borderColor: 'rgba(255, 255, 255, 0.38)',
            },
        },
    },
    checkoutBtn: {
        marginTop: 'auto',
        borderRadius: 40,
        width: '100%',
    },
}));

export default styles;