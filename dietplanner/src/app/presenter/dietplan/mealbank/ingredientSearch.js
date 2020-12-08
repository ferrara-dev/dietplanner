import IngredientSearchView from "../../../component/user/ingredientsearch/ingredientSearchView";
import "../../../component/style/home.css"
import IngredientSearchResultView from "../../../component/user/ingredientsearch/ingredientSearchResultView";
import {FDCSearch, FDCSearchById} from "../../../../service/fooddatabase/foodSearch";
import React from "react"
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentIngredient} from "../../../../actions/nutrition";
import {Button, Grid} from "@material-ui/core"
import IngredientDetailsView from "../../../component/user/ingredientsearch/ingredientDetails";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Modal from "../../../component/common/modal/modal";

export default function IngredientSearch(){
    const [searchResult, setSearchResult] = React.useState(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const currentIngredient = useSelector(state => state.nutrition.currentIngredient);
    React.useEffect(() => {
        setSearchResult(search(""));
    }, []);

    const search = (searchQuery) => {
        FDCSearch(searchQuery).then(data => {
            console.log(data);
            setSearchResult(data.foods);
        });
    };

    const viewIngredient = (fdcId) => {
        FDCSearchById(fdcId).then(data => {
            dispatch(setCurrentIngredient({ingredient: data, quantity: 100}))
        })
    };

    return <Modal>
        <Grid container spacing={1}>
            <Grid item md={6} className="overflow-auto">
                <IngredientSearchView onSearch={search}></IngredientSearchView>
                {!searchResult && <div>...</div> || <IngredientSearchResultView chooseIngredient={viewIngredient} results={searchResult}></IngredientSearchResultView>}
            </Grid>
            <Grid item md={6}>
                {!currentIngredient && <div>...</div> ||  <IngredientDetailsView ingredientDescription={currentIngredient.ingredient.description}></IngredientDetailsView>}
            </Grid>
        </Grid>
    </Modal>

}