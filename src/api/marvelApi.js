const BASE_URL = 'https://gateway.marvel.com:443/v1/public';
const API_KEY = 'aa5be7bdc310c2eb4e10eaf94d9ba37d';


export const fetchCharacter = async (params ={})=>{

    const queryString = new URLSearchParams({...params, apikey: API_KEY}).toString();
    const response = await fetch(`${BASE_URL}/characters?${queryString}`);
    const data = await response.json();
    return data;

}