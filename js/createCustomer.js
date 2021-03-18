
//JQuery for click event on button
 //disable the button
 $("#submit_button").prop('disabled', true);
//jquery event listeners to check each input, in order to enable the button
$("#firstName_input").on('input', checkInputs);
$("#lastName_input").on('input', checkInputs);
$("#email_input").on('input', checkInputs);
$("#phone_input").on('input', checkInputs);
$("#address1_input").on('input', checkInputs);
// $("#address2_input").on('input', checkInputs);
$("#city_input").on('input', checkInputs);
$("#state_input").on('input', checkInputs);
$("#zip_input").on('input', checkInputs);
$("#customerNotes_input").on('input', checkInputs);



// Check inputs and enable the submit button if correct
//rey -> 3
function checkInputs(){
    if($("#firstName_input").val().length > 0 &&
       $("#lastName_input").val().length > 0 &&
       $("#email_input").val().length > 0 &&
       $("#phone_input").val().length > 0 &&
       $("#address1_input").val().length > 0 &&
       $("#city_input").val().length > 0 &&
       $("#state_input").val().length > 0 &&
       $("#zip_input").val().length > 0 
    ){
        $("#submit_button").prop('disabled', false);
        $("#submit_button").click(submitAccount);
    }
    // $("#submit_button").click(submitAccount);
    // $("#submit_button").prop('disabled', false);
}



/*when submit button is pressed, gather input info into an
object and send it to the database. Then re-route to portal home.*/
function submitAccount(){
    let customerInfo = {}
    customerInfo.firstName = $("#firstName_input").val();
    customerInfo.middleName = $("#middleName_input").val();
    customerInfo.lastName = $("#lastName_input").val();
    customerInfo.email = $("#email_input").val();
    customerInfo.phone =  $("#phone_input").val();
    customerInfo.address1 =  $("#address1_input").val();
    customerInfo.address2 = $("#address2input").val();
    customerInfo.city = $("#cityinput").val();
    customerInfo.state = $("#stateinput").val();
    customerInfo.zip = $("#zipinput").val();
    customerInfo.customerNotes = $("#customerNotes_input").val();
    console.log(customerInfo);

    window.alert(customerInfo);

    

    //TODO: Will add a post to create the account
    //Arbitrary actions before button is linked to database
    // $("#firstName_input").val('');
    // $("#lastName_input").val('');
    // $("#email_input").val('');
    // $("#submit_button").prop('disabled', true);
}