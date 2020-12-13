import useStyles from "../../style/mui/mealBankStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
    Container,
    Grid,
    Paper,
    Button,
    InputBase
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

export default function IngredientSearchView({onSearch}) {
    const [searchQuery, setSearchQuery] = React.useState("");

    const classes = useStyles();
    return <div>
            <AppBar position="static" className={classes.mealPlanBar}>
                <Toolbar>
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
            </AppBar>
    </div>
}