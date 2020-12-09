import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {EdamamSearch} from "../../../service/fooddatabase/foodSearch";
import {setCurrentIngredient} from "../../../actions/ingredient";
import IngredientSearchResultView from "../../component/user/ingredientsearch/ingredientSearchResultView";
import IngredientSearchView from "../../component/user/ingredientsearch/ingredientSearchView";
import {useRouteMatch} from "react-router-dom";
import Modal from "../../component/common/modal/modal";

export default function IngredientSearch() {
    const {path, url} = useRouteMatch();
    const [searchResult, setSearchResult] = React.useState(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const currentIngredient = useSelector(state => state.currentIngredient);

    const searchIngredient = (searchQuery) => {
        EdamamSearch(searchQuery).then(data => {
            console.log(data);
            setSearchResult(data.hints);
        });
    };

    const viewIngredient = (food) => {
        dispatch(setCurrentIngredient(food));
        history.push(`${url}/ingredient/${food.foodId}`);
    };

    return <Modal>
        <IngredientSearchView onSearch={searchIngredient}></IngredientSearchView>
        {!searchResult && <div></div> || <IngredientSearchResultView chooseIngredient={viewIngredient}
                                                                     results={searchResult}
                                                                     loading={!searchResult && true}></IngredientSearchResultView>}
    </Modal>
}

/*
      <IngredientSearchView onSearch={searchIngredient}></IngredientSearchView>
        {!searchResult && <div>...</div> ||
        <IngredientSearchResultView chooseIngredient={viewIngredient}
                                    results={searchResult}></IngredientSearchResultView>}

                                        const viewIngredient = (food) => {
        dispatch(setCurrentIngredient(IngredientFactory(food)));
        history.push(`${url}/ingredient/${food.fdcId}`);
    };

 */