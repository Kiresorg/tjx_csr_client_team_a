
//JQuery for click event on button
 //disable the button
// $("#submit_button").prop('disabled', true);
//jquery event listeners to check each input, in order to enable the button
// $("#firstName_input").on('input', checkInputs);
// $("#lastName_input").on('input', checkInputs);
// $("#email_input").on('input', checkInputs);
// $("#phone_input").on('input', checkInputs);
// $("#address1_input").on('input', checkInputs);
// $("#address2_input").on('input', checkInputs);
// $("#city_input").on('input', checkInputs);
// $("#state_input").on('input', checkInputs);
// $("#zip_input").on('input', checkInputs);
// $("#notes_input").on('input', checkInputs);



// Check inputs and enable the submit button if correct
function checkInputs(){
    $("#submit_button").click(submitAccount);
    $("#submit_button").prop('disabled', false);
}

/*when submit button is pressed, gather input info into an
object and send it to the database. Then re-route to portal home.*/
function submitAccount(){
    // let loginInfo = {}
    // loginInfo.firstName = $("#firstName_input").value;
    // loginInfo.lastName = $("#lastName_input").value;
    // loginInfo.email = $("#email_input").value;


    //TODO: Will add a post to create the account
    //Arbitrary actions before button is linked to database
    window.alert("account created!")
    // $("#firstName_input").val('');
    // $("#lastName_input").val('');
    // $("#email_input").val('');
    // $("#submit_button").prop('disabled', true);
}