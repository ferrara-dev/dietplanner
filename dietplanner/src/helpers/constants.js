
export const numberSpan = (from,to) => {
    let arr = []
    for(let i = from; i < to; i++)
        arr.push(i);
    return arr;
}


export const activityLevels = [
    {description : "sedentary (little or no exercise)", val : 1, factor:1.2},
    {description : "light activity (light exercise/sports 1 to 3 days per week)", val : 2, factor: 1.375},
    {description : "moderate activity (moderate exercise/sports 3 to 5 days per week)", val : 3, factor: 1.55},
    {description: "very active (hard exercise/sports 6 to 7 days per week)", val : 4, factor: 1.725},
    {description: "extra active (very hard exercise/sports 6 to 7 days per week and physical job)", val : 5, factor: 1.9}
]


export const nutritionalCodes = {
    protein : 1003,
    sugars : 2000,
    sodium : 1093,
    cholesterol : 1253,
    carbsTotal : 1005,
    calcium : 1087,
    iron :1089,
    vitaminA : 1104,
    vitaminC : 1162,
    kcal : 1008,
    fatTotal : 1004,
    fatSaturated : 1258,
    fatTrans : 1257,
}

export const nut = {
    1003 : "protein",
    2000 : "sugars",
    1093 : "sodium",
    cholesterol : 1253,
    carbsTotal : 1005,
    kcal : 1008,
    fatTotal : 1004,
    fatSaturated : 1258
}