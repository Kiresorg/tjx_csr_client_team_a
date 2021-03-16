

document.getElementById("login_button").addEventListener("click", loginEvent);


//put the user's login info in an object and send it (to the console for right now)
function loginEvent(){
    let loginInfo = {}
    loginInfo.email = document.getElementById("email_input").innerText;
    loginInfo.password = document.getElementById("password_input").innerText;
    console.log(loginInfo);
}