//Dummy data to play with, replace with GET for selected customer
let dummyData = {
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
};

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

//Add event listener for the update button
$("#update_button").on("click", updateCustomer);

//TODO: Add event listener to cancel changes and just return to viewing this customer
//$("#cancel_button").on("click", updateCustomer);

//TODO: function to check every input to match up with the database
function checkInputs(){

}

/*function to invoke when button is pressed. The update to customer can only 
happen if the inputs are correct. A PUT method will be used to update customer
instead of just logging the updated customers info. The button should also route
back to the page to view this specific customer*/
function updateCustomer(){
    let customerObj = {};
    customerObj.firstName = $("#firstName_input").val();
    customerObj.middleName=$("#middleName_input").val();
    customerObj.lastName=$("#lastName_input").val();
    customerObj.phoneNumber=$("#phoneNumber_input").val();
    customerObj.email=$("#email_input").val();
    customerObj.address1=$("#address1_input").val();
    customerObj.address2=$("#address2_input").val();
    customerObj.city=$("#city_input").val();
    customerObj.state=$("#state_input").val();
    customerObj.zipcode=$("#zipcode_input").val();
    customerObj.customerNotes=$("#customerNotes_input").val();
    console.log("this is customer's old info: "); console.log(dummyData);
    console.log("this is customer's new info: "); console.log(customerObj);
}
