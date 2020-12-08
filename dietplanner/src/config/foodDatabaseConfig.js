const baseURL = 'https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging'
const appID = "54b9aa74";
const appKey = "22d50c4122058c8a1110a51ab94d5a38";

export const edamamApiConfig = {
    baseURL: 'https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging',
    appID: "54b9aa74",
    appKey: "22d50c4122058c8a1110a51ab94d5a38",
    getUrl : (query) => {
        query = encodeURI(query);
        return `${baseURL}&ingr=${query}&app_id=${appID}&app_key=${appKey}`
    }
}
export const foodDataCentralConfig = {
    foodDataCentralApiKey: "UQCffdQrgqix0hiGdIZPh6bCBZPhuh2yJVubPddP",
    foodDataCentralSearchURL: "https://api.nal.usda.gov/fdc/v1/foods/search",
    foodDataCentralFoodURL: "https://api.nal.usda.gov/fdc/v1/food"
}
