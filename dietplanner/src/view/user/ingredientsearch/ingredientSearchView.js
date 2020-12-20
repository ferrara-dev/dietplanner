import useStyles from "../../style/mui/mealBankStyle";
import Toolbar from "@material-ui/core/Toolbar";
import {
    Grid,
    Button,
    InputBase, IconButton
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import {DrawerSidebar} from "../../common/layout/styled";
import Tooltip from "@material-ui/core/Tooltip";
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
import LoadingSpinner from "../../common/loadingSpinner";
import ProductCard from "./ProductCard";

export default function IngredientSearchView({chooseIngredient, results, loading, onSearch, goBack}) {
    const [searchQuery, setSearchQuery] = React.useState("");
    const classes = useStyles();
    return <DrawerSidebar
        PaperProps={{className: classes.edgeSidebarBody}}
        sidebarId={'edgeSidebar'}
    >
        <Toolbar className={classes.searchBar}>
            <Tooltip title="Back to details">
                <IconButton aria-label="delete" onClick={() => goBack()}>
                    <KeyboardBackspaceOutlinedIcon/>
                </IconButton>
            </Tooltip>
            <Button variant="contained" color="secondary" onClick={() => {
                onSearch(searchQuery);
            }}>Search !</Button>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon/>
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    onChange={(e) => {
                        setSearchQuery(e.target.value)
                    }}
                />
            </div>
        </Toolbar>

        {!results ? <div></div> : <Grid container spacing={2} className={classes.resultContainer}>
            {loading ? <Grid item xs={12}>
                    <LoadingSpinner/>
                </Grid> :
                results.map(({food}, index) => {
                    return <Grid key={`${food.foodId}${index}`} item md={6} xs={12}>
                        <ProductCard key={`${food.foodId}${index}`} title={food.label} img={food.image} seeMore={() => {
                            chooseIngredient(food);
                        }}/>
                    </Grid>
                })}
        </Grid>}
    </DrawerSidebar>
};