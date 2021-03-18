$( document ).ready(function() {
    getProductDescription();
});

async function getProductDescription() {
    var data = await getProduct();
    console.log(data);

    var html = '';
        html += '<div class="box">';
        html += '<a class="title has-text-black" href="https://www.tjmaxx.com">' + data.name + '</a>';
        html += '<div class="content"> <br>';
        html += '<p class="subtitle has-text-black"> SKU:' + data.sku + '</p>';
        html += '<p class="subtitle has-text-black">Product Description:' + data.description + '</p>';
        html += '<p class="text1 has-text-black">Quantity Available: ' + data.quantity + '</p>';
        html += '<p class="text1">Price: ' + data.unit_price + '</p>';
        html += '</div>';

    $('#productContainer').html(html);
};

/* <a class="title has-text-black" href="https://www.tjmaxx.com">Product Name</a>
<div class="content">
    <br>
    <p class="subtitle has-text-black">SKU:</p>
    <p class="subtitle has-text-black">Product Description:</p>
    <p class="text1 has-text-black">Quantity Available:</p>
    <p class="text1">Price:</p>
</div> */