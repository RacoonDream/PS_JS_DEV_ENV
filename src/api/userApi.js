import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
// console.log(JSON.stringify(get('users')));
  return get('users');
}

export function deleteUser(id){
  return del(`users/${id}`);
}
function get(url){
  return fetch(baseUrl + url).then( onSuccess,onError);
}

function del(url){
  const request = new Request(baseUrl + url,{
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess,onError);
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
