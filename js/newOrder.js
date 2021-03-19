//add event listeners for button clicks
$("#saveDraft_button").on("click", saveDraft);
$("#addProducts_button").on("click", addProducts);

//Listen on important inputs
$("#customerName_input").on('input', checkInputs);
$("#address1_input").on('input', checkInputs);
$("#city_input").on('input', checkInputs);
$("#state_input").on('input', checkInputs);
$("#zipcode_input").on('input', checkInputs);


//variable to stay with the customer through pages
let currentCustomerID = '1';

function checkInputs() {
    if($("#customerName_input").val().length > 0 &&
       $("#address1_input").val().length > 0 &&
       $("#city_input").val().length > 0 &&
       $("#state_input").val().length > 0 &&
       $("#zipcode_input").val().length > 0 
    ){
        $("#saveDraft_button").prop('disabled', false);
        $("#addProducts_button").prop('disabled', false);
    }
}

function saveDraft(){
    let newOrder = {
        "customer_id": currentCustomerID,
        "order_status_code": "100",
        "datetime_order_placed": Date.now(),
        "total_order_price": "99.99",
        "notes": $("#customerNotes_input").val()
    }
    createNewOrder(newOrder);
    console.log('POST new order to the database and route back to home portal page');
}

function addProducts(){
    let newOrder = {
        "customer_id": currentCustomerID,
        "order_status_code": "100",
        "datetime_order_placed": Date.now(),
        "total_order_price": "99.99",
        "notes": $("#customerNotes_input").val()
    }
    createNewOrder(newOrder);
    console.log("Post new order to the database and route to the products page");
}

let order = {
    "customer_id": "2",
    "order_status_code": "100",
    "datetime_order_placed": "2021-03-17T15:18:06.000Z",
    "total_order_price": "99.99",
    "notes": "Hello there"
};
//createNewOrder(order);
//getAllOrders();
