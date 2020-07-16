const form = document.getElementById("form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")
const email = document.getElementById("email")



form.addEventListener("submit", (e) => {
    e.preventDefault()


    checkInputs();
});


function checkInputs() {
    const usernameValue =  username.value.trim();
    const passwordValue =  password.value.trim();
    const cpasswordValue =  cpassword.value.trim();
    const emailValue =  email.value.trim();
    const specialPattern = /\W|_/g
    const emailPattern = /^\S+@\S+\.\S+$/g

    if (usernameValue === "" || usernameValue == null) {
        setErrorFor(username, "Username cannot be blank")
        return false        // without return false or true we cannot apply submit button action "welcome.html"
    }
    if (usernameValue >= 0) {
        setErrorFor(username, "Username cannot start with a number")
        return false 
    }
    if (usernameValue.match(specialPattern)) {
        setErrorFor(username, "Username cannot have special signs")
        return false 
    } else 
    {
        setSuccessFor(username);
    }
    if (passwordValue == "" || passwordValue == null) {
        setErrorFor(password, "Password cannot be empty")
        return false 
    }
    if (passwordValue.length < 6 || passwordValue.length > 20) {
        setErrorFor(password, "Password should be min 6 or max 20 letters!")
        return false 
    } else 
    {
        setSuccessFor(password)
    }
    if (passwordValue != cpasswordValue) {
        setErrorFor(cpassword, "Passwords do not match!")
        return false 
    } else 
     {
          setSuccessFor(cpassword)
           
    }
    if (emailValue == "" || emailValue == null){
        setErrorFor(email, "Email cannot be empty!")
        return false
    } else 
    {
        setSuccessFor(email)
    }
    if (!emailValue.match(emailPattern)) {
        setErrorFor(email,"Email is not valid!")
        return false
    } else 
    {
        setSuccessFor(email)
        return true
    }
}


function setErrorFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    small.innerText = message;
    
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";

}