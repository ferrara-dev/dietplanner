import useStyles from "../../../style/mui/mealEditStyle";
import React from 'react';
import cx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import CreditCard from '@material-ui/icons/CreditCard';
import Close from '@material-ui/icons/Close';
import {
    Typography,
    Table,
    TableCell,
    TableRow,
    TableHead,
    TableContainer,
    TableBody,
    IconButton,
    Button,
    Grid,
    TextField
} from "@material-ui/core";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Divider from '@material-ui/core/Divider';

import Layout, {
    Root,
    getHeader,
    getContent,
    getFullscreen,
    getDrawerSidebar,
    getInsetContainer,
    getInsetSidebar,
    getInsetFooter,
} from '@mui-treasury/layout';

import {
    dailyShoppingTheme,
    DailyHeader,
    DailyCheckout,
    DailySummary,
} from '@mui-treasury/mockup/brands/dailyShopping';

import styled from 'styled-components';
import MealEditSummary from "./mealEditSummary";
import IngredientTable from "./ingredientTable";
import PageLayout from "../../../common/layout/pageRoot";

const Header = getHeader(styled);
const Content = getContent(styled);
const Fullscreen = getFullscreen(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const InsetSidebar = getInsetSidebar(styled);
const InsetFooter = getInsetFooter(styled);
const InsetContainer = getInsetContainer(styled);

export default function MealEditView({
                                         setMealName,
                                         data = [],
                                         mealTitle,
                                         onSearch,
                                         editIngredient,
                                         removeIngredient,
                                         submitMeal
                                     }) {

    const styles = useStyles();
    const scheme = Layout();
    scheme.configureHeader(builder => {
        builder.create('appHeader').registerConfig('xs', {
            position: 'relative',
            initialHeight: 64,
        });
    });
    scheme.configureInsetSidebar(builder => {
        builder
            .create('insetSidebar', {anchor: 'right'})
            .registerAbsoluteConfig('lg', {
                width: '33%',
            });
    });
    scheme.configureEdgeSidebar(builder => {
        builder
            .create('edgeSidebar', {anchor: 'right'})
            .registerTemporaryConfig('xs', {
                width: '88%',
            });
    });

    const [edit, setEdit] = React.useState(false);

    return (<PageLayout>
            <MealEditSummary mealTitle={mealTitle} edit={edit} setEdit={setEdit} submitMeal={submitMeal}
                             setMealTitle={setMealName}/>
            <IngredientTable setEdit={setEdit} edit={edit} editIngredient={editIngredient} ingredients={data}
                             deleteIngredient={removeIngredient}/>
        </PageLayout>
    );
}