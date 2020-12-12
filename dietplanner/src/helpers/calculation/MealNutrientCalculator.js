export function mealNutrientCalculator(ingredients) {
    return ingredients.reduce(function (nutrientAccumulator, currentIngredient) {
        const nutrients = currentIngredient.ingredient.nutrients;
        const quantity = currentIngredient.quantity
        nutrientAccumulator["carbs"] = nutrientAccumulator["carbs"] + nutrients.CHOCDF * (quantity / 100);
        nutrientAccumulator["kcal"] = nutrientAccumulator["kcal"] + nutrients.ENERC_KCAL * (quantity / 100);
        nutrientAccumulator["fat"] = nutrientAccumulator["fat"] + nutrients.FAT * (quantity / 100);
        nutrientAccumulator["fibers"] = nutrientAccumulator["fibers"] + nutrients.FIBTG * (quantity / 100);
        nutrientAccumulator["protein"] = nutrientAccumulator["protein"] + nutrients.PROCNT * (quantity / 100);
        return nutrientAccumulator;
    }, {
        carbs: 0,
        kcal: 0,
        fat: 0,
        fibers: 0,
        protein: 0
    })
};

export function averageMealCategoryNutrients({meals}) {
    let length = meals.length;
    if(length === 0)
        return {
            carbs: 0,
            kcal: 0,
            fat: 0,
            fibers: 0,
            protein: 0
        };
    const mealNutrients = meals.reduce(function (nutrientAccumulator, currentMeal) {
        const mealNutrients = mealNutrientCalculator(currentMeal.ingredients);
        nutrientAccumulator.carbs = nutrientAccumulator.carbs + mealNutrients.carbs
        nutrientAccumulator.kcal = nutrientAccumulator.kcal + mealNutrients.kcal
        nutrientAccumulator.fat = nutrientAccumulator.fat + mealNutrients.fat
        nutrientAccumulator.fibers = nutrientAccumulator.fibers + mealNutrients.fibers
        nutrientAccumulator.protein = nutrientAccumulator.protein + mealNutrients.protein
        return nutrientAccumulator;
    }, {
        carbs: 0,
        kcal: 0,
        fat: 0,
        fibers: 0,
        protein: 0
    });

    Object.keys(mealNutrients).map(propName => {
        mealNutrients[propName] =  mealNutrients[propName]/length;
    });
    return mealNutrients;
};

export function averageMealPlanNutrients(mealPlan) {
    let length = mealPlan.length;
    const mealNutrients = mealPlan.reduce(function (nutrientAccumulator, currentMeal) {
        const mealCategoryNutrients = averageMealCategoryNutrients(currentMeal);
        nutrientAccumulator.carbs = nutrientAccumulator.carbs + mealCategoryNutrients.carbs
        nutrientAccumulator.kcal = nutrientAccumulator.kcal + mealCategoryNutrients.kcal
        nutrientAccumulator.fat = nutrientAccumulator.fat + mealCategoryNutrients.fat
        nutrientAccumulator.fibers = nutrientAccumulator.fibers + mealCategoryNutrients.fibers
        nutrientAccumulator.protein = nutrientAccumulator.protein + mealCategoryNutrients.protein
        return nutrientAccumulator;
    }, {
        carbs: 0,
        kcal: 0,
        fat: 0,
        fibers: 0,
        protein: 0
    });
    return mealNutrients;
};

export function pcfRatio(nutrients){
    const pE = nutrients.protein * 4;
    const cE = nutrients.carbs * 4;
    const fE = nutrients.fat * 9;

    const totalE = pE + cE + fE;

    const pcfRatio = {
        proteinRatio : pE/totalE,
        carbRatio : cE/totalE,
        fatRatio : fE/totalE
    };

    return pcfRatio;
};
