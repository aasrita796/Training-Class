function validatePassword(){
    let password = document.getElementById("pass1").value;
    let confirmPassword = document.getElementById("pass2").value;

    if(password !== confirmPassword){
        alert("Password do no match !");
        return false;
    }
    else{
        alert("Password matched successfully !");
        return true;
    }
}