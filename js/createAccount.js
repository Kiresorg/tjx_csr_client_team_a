//JQuery for click event on button
$("#submit_button").click(submitAccount);

 //disable the button
$("#submit_button").prop('disabled', true);

//jquery event listeners to check each input, in order to enable the button
$("#firstName_input").on('input', checkInputs);
$("#lastName_input").on('input', checkInputs);
$("#email_input").on('input', checkInputs);
$("#password_input").on('input', checkInputs);
$("#password2_input").on('input', checkInputs);
$("#tc_box").on('input', checkInputs);

//Check inputs and enable the submit button if correct
function checkInputs(){
    const p1 = $("#password_input").val();
    const p2 = $("#password2_input").val();
    if(p1 === p2 && $("#tc_box").is(":checked")){
        if(p1 !== '' && p2 !== ''){
            $("#submit_button").prop('disabled', false);//enable the button
        }
    }
}

/*when submit button is pressed, gather input info into an
object and send it to the database. Then re-route to portal home.*/
function submitAccount(){
    let loginInfo = {}
    loginInfo.firstName = $("#firstName_input").value;
    loginInfo.lastName = $("#lastName_input").value;
    loginInfo.email = $("#email_input").value;
    loginInfo.password = $("#password_input").value;
    loginInfo.password2 = $("#password2_input").value;

    //TODO: Will add a post to create the account
    //Arbitrary actions before button is linked to database
    window.alert("account created!")
    $("#firstName_input").val('');
    $("#lastName_input").val('');
    $("#email_input").val('');
    $("#password_input").val('');
    $("#password2_input").val('');
    $("#tc_box").prop('checked',false);
    $("#submit_button").prop('disabled', true);
}