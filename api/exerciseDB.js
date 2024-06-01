import axios from "axios";
import { rapidApiKey } from "../constants";

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params)=>{

    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'x-rapidapi-key': rapidApiKey,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch(err) {
        console.log('error: ', err.message)
    }
}

export const fetchExerciseBodyPart = async (bodyPart)=>{
    let data = await apiCall(baseUrl+`/exercises/bodyPart/${bodyPart}`)
    return data
}