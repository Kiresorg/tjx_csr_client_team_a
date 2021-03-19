
//JQuery for click event on button
$("#submit_button").click(submitAccount);
$("#cancel_button").click(function(){window.alert('Cancelled creating this customer. Routing back to main portal!')});

//jquery event listeners to check each input, in order to enable the button
$("#firstName_input").on('input', checkInputs);
$("#lastName_input").on('input', checkInputs);
$("#email_input").on('input', checkInputs);
$("#phone_input").on('input', checkInputs);
$("#address1_input").on('input', checkInputs);

$("#city_input").on('input', checkInputs);
$("#state_input").on('input', checkInputs);
$("#zip_input").on('input', checkInputs);
$("#customerNotes_input").on('input', checkInputs);

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
    }
}



/*when submit button is pressed, gather input info into an
object and send it to the database. Then re-route to portal home.*/
function submitAccount(){
    let customerInfo = {
        "first_name" : $("#firstName_input").val(),
        "middle_name" : $("#middleName_input").val(),
        "last_name" : $("#lastName_input").val(),
        "email" : $("#email_input").val(),
        "phone" :  $("#phone_input").val(),
        "address_line1" :  $("#address1_input").val(),
        "address_line2" : $("#address2_input").val(),
        "city" : $("#city_input").val(),
        "state" : $("#state_input").val(),
        "zip" : $("#zip_input").val(),
        "notes" : $("#customerNotes_input").val()
    }

    createCustomer(customerInfo);
}
