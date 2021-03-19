//add event listeners for button clicks
$("#saveDraft_button").on("click", saveDraft);
$("#addProducts_button").on("click", addProducts);

function saveDraft(){
    console.log('POST new order to the database and route back to home portal page');
}

function addProducts(){
    let customerInfo = {
        "customerName": $("#customerName_input").val(),
        "address_line1" :  $("#address1_input").val(),
        "address_line2" : $("#address2_input").val(),
        "city" : $("#city_input").val(),
        "state" : $("#state_input").val(),
        "zip" : $("#zip_input").val(),
        "notes" : $("#customerNotes_input").val()
    }
}