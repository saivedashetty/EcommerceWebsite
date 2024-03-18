
function fun()
{                                                                                             
  let remId = localStorage.getItem("remID");
  let remPrice = localStorage.getItem("remPrice");
  let arr = localStorage.getItem("id");
  console.log("Original array: " + arr);
  if (arr)
   {
      //split the string into array
      arr = arr.split(",");
      console.log("remId " + remId);

      arr = arr.filter(id => id !== remId);
      console.log("Modified array: " + arr.join(","));
      //store the modified array
      localStorage.setItem("id", arr);
  } 
let containerParentDiv=document.getElementById("container"); 
let price = localStorage.getItem("price");
console.log("Original prices: " + price);

if (price)
 {
    price = price.split(",");
    console.log("Prices array: " + price);
    let sum = 0;
    for (let i = 0; i < price.length; i++) {
      sum += Number(price[i]);
    }
    sum = Number(sum.toFixed(2));

    console.log("Initial sum: " + sum);
    //filter is highorder function it modifies and provide new array 
    price = price.filter(currentPrice => currentPrice !== remPrice);
     sum = 0;
      for (let i = 0; i < price.length; i++) {
        sum += Number(price[i]);
      }
      sum = Number(sum.toFixed(2));

    console.log("Updated sum: " + sum);

    sum = sum.toFixed(2);
    document.getElementById("rupees").innerHTML = `Total Amount is: ${String(sum)}`;
    localStorage.setItem("price", price);
}
let ajax=new XMLHttpRequest();
ajax.open("GET","https://fakestoreapi.com/products"); 
ajax.send(); 
ajax.onload=()=>{ 
    let data=JSON.parse(ajax.response); 
display(data,arr,containerParentDiv) 
} 
}
function display(data,arr,con){ 
    data.forEach(element => { 
        for(i=0;i<arr.length;i++)
        {
          if(arr[i]==element.id)
          {
            con .innerHTML += `<div class="containers">  
            <button type="submit" id="removeToCartDiv" onclick="fun1(${element.id},${element.price})">X</button>  
            <p class="title">${element.title} </p>
    
            <img class="images" src=${element.image} alt="loading"/> 
            <div id="divInside">
    
            <div id="PriceAndRatingDiv"> 
    
            <p class="Rating">Rating ${element.rating.rate}</p> 
            
            <p class="prices">Rs : ${element.price}</p> 
            
            </div> 
            
            <div id=AddToCart > 
            
            <button type="submit" id="AddToCartDiv" onclick="fun3()">Order Now</button>
            </div> 
            
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

function fun1(id,price)
{
  console.log("id"+id)
    localStorage.setItem("remID",id)
    localStorage.setItem("remPrice",price)
}
function fun3()
{
  open("./order.html")
}







