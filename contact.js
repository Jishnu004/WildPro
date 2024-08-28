
function validation(){
    if(document.Formfill.First Name.value==""){
        document.getElementById("result").innerHTML="Enter first name*";
        return false;
    }
    else if(document.Formfill.Last Name.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letter*";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.Formfill.Mobile.value==""){
        document.getElementById("result").innerHTML="Enter your Mobile number";
        return false;
    }
    else if(document.Formfill.Type Your Message Here.value == document.Formfill.CPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
       
}
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide")
}