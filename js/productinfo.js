function loadViewProducts() {
  window.location = 'viewProducts.html';
}

$( document ).ready(function() {
    getProductDescription(Number(localStorage.getItem("productId")));
});

async function getProductDescription(id) {
    
    var data = await getProduct(id);

    var html = '';
    
    html += '<div class="box">';
      html += '<a class="title has-text-black">' + data.name + '</a>';
      html += '<div class="content"> <br>';
        html += '<p class="subtitle has-text-black"> SKU: ' + data.sku + '</p>';
        html += '<p class="subtitle has-text-black">Product Description: ' + data.description + '</p>';
        html += '<p class="text1 has-text-black">Quantity Available: ' + data.quantity + '</p>';
        html += '<p class="text1">Price: ' + data.unit_price + '</p>';
      html += '</div>';
    html += '<div>';
      html += '<select name="quantityMenu" id="quantity">';
      html += '<option value="selectQuantity">Select Quantity</option>';

    for (var i = 1; i < 11; i++) {
        html += '<option value="' + i + '">' + i + '</option>'; 
    }

      html += '</select>';
      html += '<button class="button is-success" onclick=' + `loadViewProducts()` + '>Add to Order</button>';
      html += '<hr class="dropdown-divider">';
    html += '</div>';

    $('#productContainer').html(html);
};


/* html += '<div class="box">';
      html += '<a class="title has-text-black">' + data.name + '</a>';
      html += '<div class="content"> <br>';
        html += '<p class="subtitle has-text-black"> SKU: ' + data.sku + '</p>';
        html += '<p class="subtitle has-text-black">Product Description: ' + data.description + '</p>';
        html += '<p class="text1 has-text-black">Quantity Available: ' + data.quantity + '</p>';
        html += '<p class="text1">Price: ' + data.unit_price + '</p>';
      html += '</div>';
    html += '<div class="dropdown is-hoverable">';
    html += '<div class="dropdown-trigger">';
    html += '<div>';
    html += '<button class="button" aria-haspopup="true" aria-controls="dropdown-menu">';
    html += '<span>Select Quantity</span>';
    html += '<span class="icon is-small">';
    html += '<i class="fas fa-angle-down" aria-hidden="true"></i>';
    html += '</span>';
    html += '</button>';
    html += '</div>';
    html += '<div class="dropdown-menu" id="dropdown-menu" role="menu">';
    html += '<div class="dropdown-content">';
    
      html += '<select name="quantityMenu" id="quantity">';
      html += '<option value="selectQuantity">Select Quantity</option>';

    for (var i = 1; i < 11; i++) {
        //html += '<a href="#" class="dropdown-item">' + i + '</a>';
        html += '<option value="' + i + '">' + i + '</option>'; 
    }

      html += '</select>';
      html += '<button class="button is-success" onclick=' + `loadViewProducts()` + '>Add to Order</button>';
      html += '<hr class="dropdown-divider">';
    //html += '<a href="#" class="dropdown-item">Other Amount</a>';
    html += '</div>'; */