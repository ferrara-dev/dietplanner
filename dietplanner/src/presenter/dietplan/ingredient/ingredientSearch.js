import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {EdamamSearch} from "../../../service/fooddatabase/foodSearch";
import {setCurrentIngredient} from "../../../model/actions/ingredient";
import IngredientSearchView from "../../../view/user/ingredientsearch/ingredientSearchView";
import {useRouteMatch} from "react-router-dom";

export default function IngredientSearch() {
    const {path, url} = useRouteMatch();
    const [searchResult, setSearchResult] = React.useState(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const currentIngredient = useSelector(state => state.currentIngredient);

    const searchIngredient = (searchQuery) => {
        EdamamSearch(searchQuery).then(data => {
            setSearchResult(data.hints);
        });
    };

    const viewIngredient = (food) => {
        dispatch(setCurrentIngredient(food));
        history.push(`${url}/ingredient/${food.foodId}`);
    };

    return <IngredientSearchView
            onSearch={searchIngredient}
            chooseIngredient={viewIngredient}
            results={searchResult}
            loading={!searchResult && true}
            goBack={history.goBack}
            >
        </IngredientSearchView>
}