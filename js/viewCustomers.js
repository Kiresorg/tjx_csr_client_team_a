$( document ).ready(function() {
    getAll();
});

async function getAll() {
    var data = await getAllCustomers();
    console.log(data);

    var html = '';

    for(var i = 0; i< data.length; i++) {
        html += '<li>';
        html += '<div class="tile is-parent">' ;
        html += '<article class="tile is-child box">' ;

        html += '<a class="title" href="./customerinfo.html">' + data[i].first_name + ' ' + data[i].last_name + '</a>' ;
        html += '<br>' ;
        html += '<br>' ;
        html += '<p class="text1">Phone Number: ' + data[i].phone + '</p>' ;
        html += '<p class="text1">Email : ' + data[i].email + '</p>' ;
        html += '<br>' ;
        html += '</div>' ;
        html += '</article>' ;
        html += '</div>' ;
        html += '</li>';

    
    
    }
    $('#customerContainer').html(html);


};
/*
<div class="tile is-parent">
          <article class="tile is-child notification has-background-white-bis">
            <a class="title" href="https://www.sierra.com">Customer Name</a>
            <div class="content">
              <br>
              <p class="text1">Phone Number</p>
              <p class="text1">Email</p>
              <br>
            </div>
          </article>
        </div>*/
