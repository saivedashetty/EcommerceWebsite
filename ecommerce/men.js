function fun()
{
  var arr=[2,3,4,9,10,11,12,13,14]
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
//     data.forEach(element => { 
//         // document.write(element.title +"<br>") 
// }); 
display(data,arr,containerParentDiv) 
} 
}
function display(data,arr,con){ 
    data.forEach(element => { 
        // containerParentDiv.innerHTML += `<div>${element.title}</div>`
        for(i=0;i<arr.length;i++)
        {
          if(arr[i]==element.id)
          {
            con .innerHTML += `<div class="containers">  
            <p class="title">${element.title} </p>
    
            <img class="images" src=${element.image} alt="loading"/> 
            <div id="divInside">
    
            <div id="PriceAndRatingDiv"> 
    
            <p class="Rating">Rating ${element.rating.rate}</p> 
            
            <p class="prices">Rs : ${element.price}</p> 
            
            </div> 
            
            <div id=AddToCart > 
            
            <button type="submit" id="AddToCartDiv" onclick="fun1(${element.id},${element.price})">AddToCart</button></div> 
            
            </div> 
            
            </div>`;   
          }
        }
    }); 
}
var user=localStorage.getItem("lastName")
var mobile=localStorage.getItem("Mobile")
var email=localStorage.getItem("email")
document.getElementById("user1").innerHTML=`Name:${user}`
document.getElementById("mobile1").innerHTML=`MobileNumber:${mobile}`
document.getElementById("email1").innerHTML=`Email:${email}`
var arr=[]
function fun1(id,price)
{
    arr.push(id)   
    localStorage.setItem("id",arr)
}