
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

// getAllOrders();
// getAllCustomers();

// dummy = {
//     "first_name": "Henry",
//     "middle_name": "",
//     "last_name": "Jacks",
//     "phone": "6173781634",
//     "email": "djbbdw@gmail.com",
//     "notes": "Hello TJX",
//     "address_line1": "Street 1",
//     "address_line2": "Street 2",
//     "city": "Boston",
//     "state": "MA",
//     "zip": "02128"
// }
// console.log(dummy)

// createCustomer(dummy);

const x = createCustomer();



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
    customerInfo["first_name"] = $("#firstName_input").val();
    customerInfo.middle_name = $("#middleName_input").val();
    customerInfo.last_name = $("#lastName_input").val();
    customerInfo.email = $("#email_input").val();
    customerInfo.phone =  $("#phone_input").val();
    customerInfo.address_line1 =  $("#address1_input").val();
    customerInfo.address_line2 = $("#address2_input").val();
    customerInfo.city = $("#city_input").val();
    customerInfo.state = $("#state_input").val();
    customerInfo.zip = $("#zip_input").val();
    customerInfo.notes = $("#customerNotes_input").val();
    console.log(customerInfo);

    x(customerInfo);

    console.log("hello");

    // window.alert(customerInfo);

    

    //TODO: Will add a post to create the account
    //Arbitrary actions before button is linked to database
    // $("#firstName_input").val('');
    // $("#lastName_input").val('');
    // $("#email_input").val('');
    // $("#submit_button").prop('disabled', true);
}