import {nutritionalCodes} from "./constants";

export function NutrientAccumulator(data) {
    const initial = {
        protein : 0,
        totalFat : 0,
        totalCarbs : 0,
        sugars : 0,
        kcal : 0
    }
    return data.reduce(function (accumulator, currentValue) {
        const nutrients = currentValue.ingredient.nutrients;
        accumulator["protein"] =  accumulator["protein"] + nutrients[nutritionalCodes.protein].amount * (currentValue.quantity / 100);
        accumulator["totalFat"] =  accumulator["totalFat"] + nutrients[nutritionalCodes.fatTotal].amount * (currentValue.quantity / 100);
        accumulator["totalCarbs"] = accumulator["totalCarbs"] + nutrients[nutritionalCodes.carbsTotal].amount * (currentValue.quantity / 100);
        accumulator["sugars"] = accumulator["sugars"] + nutrients[nutritionalCodes.sugars].amount * (currentValue.quantity / 100);
        accumulator["kcal"] = accumulator["kcal"] + nutrients[nutritionalCodes.kcal].amount * (currentValue.quantity / 100);
        return accumulator;
    }, initial)
};

export default function IngredientFactory(ingredientData) {
    const nutrients = foodNutrientReducer(ingredientData.foodNutrients);
    return {nutrients, fdcId: ingredientData.fdcId, description: ingredientData.description};
}

function foodNutrientReducer(foodNutrients) {
    return foodNutrients.reduce(function (accumulator, currentValue) {
        accumulator[currentValue.nutrientId] = {};
        const a = accumulator[currentValue.nutrientId];
        a["name"] = currentValue.nutrientName;
        a["id"] = currentValue.nutrientId;
        a["unit"] = currentValue.unitName;
        a["amount"] = currentValue.value;
        return accumulator;
    }, {})
}