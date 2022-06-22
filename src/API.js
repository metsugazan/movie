import {API_KEY, BASE_URL} from './config';

export const GET = async url=> {
  const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}&language=fr-FR`;

  let response = await fetch(API_URL, {method: 'GET'});
  response = response.json();
  return response;
};



export const Search = async query=> {
  console.log("-------------Recherche :----",query)
  const API_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=fr-FR&query=${query}&page=1&include_adult=false`;

  let response = await fetch(API_URL, {method: 'GET'});
  response = response.json();
  return response;
};