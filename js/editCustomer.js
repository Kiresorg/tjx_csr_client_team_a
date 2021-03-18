//JQuery for click event on button
$("#update_button").on('click', updateCustomer);
 //disable the button
// $("#update_button").prop('disabled', true);
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

//Dummy data to play with, replace with GET for selected customer
 dummyData = {
    firstName: "Pat",
    middleName: "Thomas",
    lastName: "Kelley",
    phoneNumber: "5556667777",
    email: "pkelley@gmail.com",
    address1: "1 Smith Lane",
    address2: "",
    city: "Boston",
    state: "MA",
    zip: "01020",
    customerNotes: "Likes purple products"
}

//populate the inputs with selected customer data
$("#firstName_input").val(dummyData.firstName);
$("#middleName_input").val(dummyData.middleName);
$("#lastName_input").val(dummyData.lastName);
$("#phoneNumber_input").val(dummyData.phoneNumber);
$("#email_input").val(dummyData.email);
$("#address1_input").val(dummyData.address1);
$("#address2_input").val(dummyData.address2);
$("#city_input").val(dummyData.city);
$("#state_input").val(dummyData.state);
$("#zipcode_input").val(dummyData.zip);
$("#customerNotes_input").val(dummyData.customerNotes);


function checkInputs(){
    if($("#firstName_input").val().length > 0 &&
       $("#middleName_input").val().length > 0 &&
       $("#lastName_input").val().length > 0 &&
       $("#phoneNumber_input").val().length > 0 &&
       $("#address1_input").val().length > 0 &&
       $("#address2_input").val().length > 0 &&
       $("#city_input").val().length > 0 &&
       $("#state_input").val().length > 0 &&
       $("#zipcode_input").val().length > 0 &&
       $("#customerNotes_input").val().length > 0 
    ){
        $("#update_button").prop('disabled', false);
    }
}


function updateCustomer(){
    let customerObj = {};
    customerObj.first_name = $("#firstName_input").val();
    customerObj.middle_name=$("#middleName_input").val();
    customerObj.last_name=$("#lastName_input").val();
    customerObj.phone=$("#phoneNumber_input").val();
    customerObj.email=$("#email_input").val();
    customerObj.notes=$("#email_input").val();
    customerObj.address_line1=$("#address1_input").val();
    customerObj.address_line2=$("#address2_input").val();
    customerObj.city=$("#city_input").val();
    customerObj.state=$("#state_input").val();
    customerObj.zip=$("#zipcode_input").val();
    
    console.log("this is customer's old info: "); console.log(dummyData);
    console.log("this is customer's new info: "); console.log(customerObj);

   modifyCustomer(1, customerObj);

}
