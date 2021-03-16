

document.getElementById("login_button").addEventListener("click", loginEvent);


//put the user's login info in an object and send it (to the console for right now)
function loginEvent(){
    let loginInfo = {}
    loginInfo.email = document.getElementById("email_input").value;
    loginInfo.password = document.getElementById("password_input").value;
    console.log(loginInfo);
    document.getElementById("email_input").value = "";
    document.getElementById("password_input").value ="";

}