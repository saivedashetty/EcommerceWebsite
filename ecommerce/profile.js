function fun()
{
    var user=localStorage.getItem("firstName")
    var mobile=localStorage.getItem("Mobile")
    var email=localStorage.getItem("email")
    document.getElementById("username").innerHTML=`${user}`
    document.getElementById("mobile").innerHTML=`${mobile}`
    document.getElementById("email").innerHTML=`${email}`
}