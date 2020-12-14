import React from 'react';
import MealEditSummary from "./mealEditSummary";
import IngredientTable from "./ingredientTable";
import PageLayout from "../../../common/layout/pageRoot";


export default function MealEditView({
                                         setMealName,
                                         data = [],
                                         mealTitle,
                                         onSearch,
                                         editIngredient,
                                         removeIngredient,
                                         submitMeal,
                                         mealPlan
                                     }) {
    const [edit, setEdit] = React.useState(false);

    return (<PageLayout>
            <MealEditSummary
                mealTitle={mealTitle}
                edit={edit}
                setEdit={setEdit}
                submitMeal={submitMeal}
                setMealTitle={setMealName}
            />
            <IngredientTable
                setEdit={setEdit}
                edit={edit}
                editIngredient={editIngredient}
                ingredients={data}
                deleteIngredient={removeIngredient}
            />
        </PageLayout>
    );
}