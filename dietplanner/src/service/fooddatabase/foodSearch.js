import {foodDataCentralConfig} from "../../config/foodDatabaseConfig";
import {edamamApiConfig} from "../../config/foodDatabaseConfig";
import axios from 'axios'

function apiCall(url){
    return axios.get(url).then(response => {
        if(response.status === 200)
            return response;
        else
            throw Error();
    }).catch(error => {

    })
}
export function EdamamSearch(query){
    return apiCall(edamamApiConfig.getUrl(query || ' ')).then(res => res.data);
}

export function FDCSearch(search){
    let searchParam = search
    if(!searchParam)
        searchParam = "";

    const apiKey = foodDataCentralConfig.foodDataCentralApiKey;
    const baseURL = foodDataCentralConfig.foodDataCentralSearchURL;
    const url = encodeURI(`${baseURL}?api_key=${apiKey}&query=${searchParam}`)
    try{
        return apiCall(url).then(res => res.data);
    } catch (e) {

    }
}

export function FDCSearchById(fdcId){
    const apiKey = foodDataCentralConfig.foodDataCentralApiKey;
    const baseURL = foodDataCentralConfig.foodDataCentralFoodURL;
    const url = encodeURI(`${baseURL}/${fdcId}?api_key=${apiKey}`)
    try{
        return apiCall(url).then(res => res.data);
    } catch (e) {

    }
}
