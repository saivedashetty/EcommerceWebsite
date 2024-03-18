let containerParentDiv=document.getElementById("container"); 
// ajax-async js and xml 
// texhniq to send request to backend/server. 
// xmlhttpreq-broser object(to send req from browser to server) 
let ajax=new XMLHttpRequest(); 
// console.log(ajax); 
 
// creating path to backend 
ajax.open("GET","https://fakestoreapi.com/products"); 
 
// sending req 
ajax.send(); 
 
// on-load(using the data in frontend) 
ajax.onload=()=>{ 
    let data=JSON.parse(ajax.response); 
display(data) 
} 
function display(data){ 
    data.forEach(element => { 
        console.log(element.price);
       containerParentDiv .innerHTML += `<div class="containers">
        <p class="title">${element.title} </p>

        <img class="images" src=${element.image} alt="loading"/> 
        <div id="divInside">

        <div id="PriceAndRatingDiv"> 

        <p class="Rating">Rating ${element.rating.rate}</p> 
        
        <p class="prices">Rs : ${element.price}</p> 
        
        </div>  
        
        <button type="submit" id="AddToCartDiv" onclick="fun(${element.id},${element.price})">AddToCart</button>

        
        </div> 

        
        </div>`; 
    }); 
}
var user=localStorage.getItem("lastName")
var mobile=localStorage.getItem("Mobile")
var email=localStorage.getItem("email")
document.getElementById("user1").innerHTML=`Name:${user}`
document.getElementById("mobile1").innerHTML=`MobileNumber:${mobile}`
document.getElementById("email1").innerHTML=`Email:${email}`

function logout()
{
    open("./login.html")
}
var arr=[]
var arr1=[]
function fun(id,price)
{
    arr.push(id)  
    localStorage.setItem("id",arr)
    arr1.push(price)
    localStorage.setItem("price",arr1)
}
function fun1(){
    open("./men.html")
}
function fun2(){
    open("./women.html")
}