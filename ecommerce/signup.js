//signup.js
function fun()
{
    var firstName=document.getElementById("firstName").value
    var lastName=document.getElementById("LastName").value
    var Mobile=document.getElementById("Mobile").value
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    var repassword=document.getElementById("repassword").value
    console.log(firstName)
    console.log(lastName)
    console.log(Mobile)
    console.log(email)
    localStorage.setItem("firstName",firstName)
    localStorage.setItem("lastName",lastName)
    localStorage.setItem("Mobile",Mobile)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
    localStorage.setItem("repassword",repassword)
    open("./login.html")
}
function fun2()
{
    var email=document.getElementById("password").value
    emailLen=email.length
    var status=false;
    var frststatus=false;
    var digit=0;
    var alpha=0;
    for(c=0;c<=emailLen;c++)
    {
        var ch=email.charAt(c);
        if(ch>=1&&ch<=9)
        {
            digit++;
        }
        if(ch>='a'&&ch<='z'||ch>='A'&&ch<='Z')
        {
            alpha++;
        }
    }
    for( c='A';c<='Z';c++)
    {
        if(email.charAt(0)==c)
        {
           frststatus=true;
        }
    }
    if(emailLen>=8&&emailLen<=15)
    {
        status=true;
        document.getElementById("message").innerHTML=`Strong password`
        document.getElementById("message").style.color="green"
    }
    else{
        document.getElementById("message").innerHTML=`weak password`
        document.getElementById("message").style.color="red"
    }
    if(emailLen>=10||email=="")
    {
        document.getElementById("message").innerHTML=``
    }
}
function fun4()
{
    var Mobile=document.getElementById("Mobile").value
     var mobileLen=Mobile.length
    if(mobileLen==10||Mobile=="")
    {
        document.getElementById("message2").innerHTML=``  
    }
    else
    {
        document.getElementById("message2").innerHTML=`invalid number`
        document.getElementById("message2").style.color="red"
    }
}
function fun3()
{
    var password=document.getElementById("password").value
    var repassword=document.getElementById("repassword").value
    if(password==repassword)
    {
        document.getElementById("message1").innerHTML=""
    } 
    else{
        document.getElementById("message1").innerHTML=`not matched`
        document.getElementById("message1").style.color="red"
    }
}