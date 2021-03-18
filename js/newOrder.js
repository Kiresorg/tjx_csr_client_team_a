//add event listeners for button clicks
$("#saveDraft_button").on("click", saveDraft);
$("#addProducts_button").on("click", addProducts);

function saveDraft(){
    console.log('POST new order to the database and route back to home portal page');
    
}

function addProducts(){
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
getAllOrders();
