import {API_KEY, BASE_URL} from './config';

export const GET = async url => {
  const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`;

  let response = await fetch(API_URL, {method: 'GET'});
  response = response.json();
  return response;
};



export const Search  = async ({query}) => {
  const API_URL_SEARCH = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`

  let response = await fetch(API_URL_SEARCH, {method: 'GET'});
  response = response.json();
  return response;
};
