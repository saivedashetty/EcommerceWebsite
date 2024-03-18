// login.js
function fun()
{
   var frstName= localStorage.getItem("firstName")
    var lstName=localStorage.getItem("lastName")
    var password=localStorage.getItem("password")
    var loginFrstName=document.getElementById("user").value
    var pass=document.getElementById("pass").value
    var user=lstName;
    console.log(frstName)
        console.log(user)
        console.log(pass)
        console.log(loginFrstName)
    if(user==loginFrstName&&password==pass)
    {
        open("./home.html")
    }
    else if(user==loginFrstName)
    {
        document.getElementById("invalid").innerHTML="";
    }
    else{
        document.getElementById("invalid").innerHTML=`invalid username`
    }

}