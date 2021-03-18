//JQuery for click event on button
$("#login_button").click(loginEvent);


function loginEvent(){
    let loginInfo = {}
    loginInfo.email = document.getElementById("email_input").value;
    loginInfo.password = document.getElementById("password_input").value;
    window.alert(loginInfo.email + " " + loginInfo.password);
    document.getElementById("email_input").value = "";
    document.getElementById("password_input").value ="";

    //TODO: Will check authentication through the user/password tables
}