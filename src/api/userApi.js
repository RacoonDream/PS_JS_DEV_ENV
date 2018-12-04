import 'whatwg-fetch';


export function getUsers(){
// console.log(JSON.stringify(get('users')));
  return get('users');
}

function get(url){
  return fetch(url).then( onSuccess,onError);
}

function onSuccess(response){
// console.log( response.json());
//debugger;
response.json();
}
function onError(error)
{
//  debugger;
console.log(error);// eslint-disable-line no-console
}
