//add event listeners for button clicks
$("#saveDraft_button").on("click", saveDraft);
$("#addProducts_button").on("click", addProducts);

function saveDraft(){
    console.log('POST new order to the database and route back to home portal page');
}

function addProducts(){
    console.log("Post new order to the database and route to the products page");
}