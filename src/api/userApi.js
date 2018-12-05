import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
// console.log(JSON.stringify(get('users')));
  return get('users');
}

function get(url){
  return fetch(baseUrl + url).then( onSuccess,onError);
}

function onSuccess(response){
// console.log( response.json());
//debugger;
return response.json();
}
function onError(error)
{
//  debugger;
console.log(error);// eslint-disable-line no-console
}
