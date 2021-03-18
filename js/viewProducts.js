$( document ).ready(function() {
    getAll();
});

async function getAll() {
    var data = await getAllProducts();
    console.log(data);

    
    var html = '';

    for(var i = 0; i< data.length; i++) {
        html += '<div class="tile is-parent">';
        html += '<article class="tile is-child notification has-background-white-bis">';
        html += '<a class="title" href="https://www.marshalls.com">' + data[i].name + '</a>';
        html += '<div class="content"> <br>';
        html += '<p class="text1">SKU : ' + data[i].sku + '</p>';
        html += '<p class="text1"> Quantity: ' + data[i].quantity + '</p>';
        html += '<p class="text1"> Price: ' + data[i].unit_price +  '</p><br>';
        html += '<button class="button is-success">Add Product</button>';
        html += '</div>';
        html += '</article>';
        html += '</div>';
    }

    // $.each(data, function(key, value){
    //     html += '<div class="tile is-parent">';
    //     html += '<article class="tile is-child notification has-background-white-bis">';
    //     html += '<a class="title" href="https://www.marshalls.com">' + value.name + '</a>'


    // });
$('#productsContainer').html(html);


    // <div class="tile is-parent">
    // <article class="tile is-child notification has-background-white-bis">
    //     <a class="title" href="https://www.marshalls.com">Black Hammer</a>
    //     <div class="content">
    //         <br>
    //         <p class="text1">SKU : HOU-HA-BLA-00</p>
    //         <p class="text1">Quantity : 99</p>
    //         <p class="text1">Price : 11.99</p>
    //         <br>
    //         <button class="button is-success">Add Product</button>
    //     </div>
    //   </article>
  //</div>















};