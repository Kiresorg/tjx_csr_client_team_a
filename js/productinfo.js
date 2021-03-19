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
    html += '<div class="dropdown is-hoverable">';
    html += '<div class="dropdown-trigger">';
    html += '<button class="button" aria-haspopup="true" aria-controls="dropdown-menu">';
    html += '<span>Select Quantity</span>';
    html += '<span class="icon is-small">';
    html += '<i class="fas fa-angle-down" aria-hidden="true"></i>';
    html += '</span>';
    html += '</button>';
    html += '</div>';
    html += '<div class="dropdown-menu" id="dropdown-menu" role="menu">';
    html += '<div class="dropdown-content">';

    for (var i = 0; i < 11; i++) {
        html += '<a href="#" class="dropdown-item">' + i + '</a>';
    }

    html += '<hr class="dropdown-divider">';
    html += '<a href="#" class="dropdown-item">Other Amount</a>';
    html += '</div></div></div>';
    html += '<button class="button is-info" style="margin-left: 1em;" href="">Add to Order</button>';

    $('#productContainer').html(html);
};


/* <div class="dropdown is-hoverable">
                      <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                          <span>Select Quantity</span>
                          <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div> 
                      
                      <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                          <a href="#" class="dropdown-item">1</a>
                          <a class="dropdown-item">2</a>
                          <a href="#" class="dropdown-item">3</a>
                          <a href="#" class="dropdown-item">4</a>
                          <a href="#" class="dropdown-item">5</a>
                          <a href="#" class="dropdown-item">6</a>
                          <a href="#" class="dropdown-item">7</a>
                          <a href="#" class="dropdown-item">8</a>
                          <a href="#" class="dropdown-item">9</a>
                          <a href="#" class="dropdown-item">10</a>
                          <hr class="dropdown-divider">
                          <a href="#" class="dropdown-item">Other Amount</a>
                        </div>
                      </div>
                      <button class="button is-success">Add to Order</button> */