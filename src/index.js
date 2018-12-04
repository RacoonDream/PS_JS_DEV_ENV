import './index.css';
import numeral from 'numeral';
import {getUsers} from './api/userApi';

const courseValue= numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would earn ${courseValue} from this awesone course!`);// ES6 template string to parse javascript variables

getUsers().then(result=>{

 let usersBody="";

 result.forEach(user=>{
console.log(user.firstName);
 usersBody += `<tr>
 <td>${user.id}</td>
 <td>${user.firstName}</td>
 <td>${user.lastName}</td>
 <td>${user.email}</td>
 </tr>`
 });

 global.document.getElementById('users').innerHTML=usersBody;

});
