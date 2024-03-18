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