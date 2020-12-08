
export function getNutrientValue(ingredient, quantity, id){
    return ingredient.foodNutrients.find(foodNutrient => foodNutrient.nutrient.id == id)* ((quantity/100));
}