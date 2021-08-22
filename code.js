function checkFirstname()
{
    var fname=document.getElementById("firstname").value;
    var fcheck=/[a-zA-Z]{1,25}/; /*Checking first name if all are letters and length is 1 to 25*/
    if(fcheck.test(fname))
    {
        document.getElementById("message1").style.color="green";
        document.getElementById("message1").innerHTML="<strong>Input accepted!</strong>";
    }
    else
    {
    document.getElementById("message1").style.color="red";
    document.getElementById("message1").innerHTML="<strong>Invalid input!!!</strong>";
    }
}
function checkLastname()
{
    var lname=document.getElementById("lastname").value;
    var fcheck=/[a-zA-Z]{1,25}/; /*Checking last name if all are letters and length is 1 to 25*/
    if(fcheck.test(lname))
    {
        document.getElementById("message2").style.color="green";
        document.getElementById("message2").innerHTML="<strong>Input accepted!</strong>";
    }
    else
    {
        document.getElementById("message2").style.color="red";
        document.getElementById("message2").innerHTML="<strong>Invalid input!!!</strong>";
    }
}
function disaddress()
{
    document.getElementById("message3").style.color="black";
    document.getElementById("message3").innerHTML="Localities within 30Km from our store will be served"; /*Telling the user that localities within 30km will be served*/
}
function checkphone()
{
    var p=document.getElementById("pnumber").value;
    var fcheck=/[0-9]{10}/; /*Checking if all are digits and there are 10 digits*/
    if(fcheck.test(p))
    {
        document.getElementById("phonepromt").style.color="green";
        document.getElementById("phonepromt").innerHTML="<strong>Input accepted</strong>";
    }
    else
    {
        document.getElementById("phonepromt").style.color="red";
        document.getElementById("phonepromt").innerHTML="<strong>Please type in xxxxxxxxxx(10 digit)format!</strong>";
    }
}
function ordernow()
{
    document.getElementById("alsoforthis").innerHTML="<strong>Thankyou for ordering our customer service will contact you in 5 minutes!</strong>";
    /*Telling the user that customer service will contact them within 5 minutes*/
}