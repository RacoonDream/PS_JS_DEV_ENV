import './index.css';
import numeral from 'numeral';
import {getUsers,deleteUser} from './api/userApi';

const courseValue= numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would earn ${courseValue} from this awesone course!`);// ES6 template string to parse javascript variables

getUsers().then(result=>{

 let usersBody="";

 result.forEach(user=>{
console.log(user.firstName);
 usersBody += `<tr>
 <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
 <td>${user.id}</td>
 <td>${user.firstName}</td>
 <td>${user.lastName}</td>
 <td>${user.email}</td>
 </tr>`
 });

 global.document.getElementById('users').innerHTML=usersBody;


 const deleteLinks= global.document.getElementsByClassName('deleteUser');

 Array.from(deleteLinks, link=>{
link.onclick= function(event){
  const element = event.target;
  event.preventDefault();
  deleteUser(element.attributes["data-id"].value);

  const row = element.parentNode.parentNode;// reach <tr>
  row.parentNode.removeChild(row);// reach <table>

};
 })
});
