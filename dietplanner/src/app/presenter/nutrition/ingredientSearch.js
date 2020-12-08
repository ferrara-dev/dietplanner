import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {FDCSearch, FDCSearchById,EdamamSearch} from "../../../service/fooddatabase/foodSearch";
import {setCurrentIngredient} from "../../../actions/ingredient";
import IngredientSearchResultView from "../../component/user/ingredientsearch/ingredientSearchResultView";
import IngredientSearchView from "../../component/user/ingredientsearch/ingredientSearchView";
import {useRouteMatch} from "react-router-dom";
import Modal from "../../component/common/modal/modal";
import IngredientFactory from "../../../helpers/ingredientFactory";

export default function IngredientSearch() {
    const {path, url} = useRouteMatch();
    const [searchResult, setSearchResult] = React.useState(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const currentIngredient = useSelector(state => state.currentIngredient);

    React.useEffect(() => {
        setSearchResult(searchIngredient(""));
    }, []);

    const searchIngredient = (searchQuery) => {
        FDCSearch(searchQuery).then(data => {
            console.log(data);
            setSearchResult(data.foods);
        });
    };

    const viewIngredient = (food) => {
        dispatch(setCurrentIngredient(IngredientFactory(food)));
        history.push(`${url}/ingredient/${food.fdcId}`);
    };

    return <Modal>
        <IngredientSearchView onSearch={searchIngredient}></IngredientSearchView>
        <IngredientSearchResultView chooseIngredient={viewIngredient}
                                    results={searchResult}
                                    loading={!searchResult && true}></IngredientSearchResultView>
    </Modal>
}

/*
      <IngredientSearchView onSearch={searchIngredient}></IngredientSearchView>
        {!searchResult && <div>...</div> ||
        <IngredientSearchResultView chooseIngredient={viewIngredient}
                                    results={searchResult}></IngredientSearchResultView>}
 */