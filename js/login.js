//JQuery for click event on button
$("#login_button").click(loginEvent);


function loginEvent(){
    let loginInfo = {}
    loginInfo.email = document.getElementById("email_input").value;
    loginInfo.password = document.getElementById("password_input").value;
    console.log(loginInfo);
    document.getElementById("email_input").value = "";
    document.getElementById("password_input").value ="";

}