function loadPage(id) {
    localStorage.setItem("orderId", id);
    window.location = 'editOrder.html';
}
$( document ).ready(function() {
    getAll();
});
// 2021-03-18T18:12:00.000Z

function sqlToJsDate(sqlDate){
    var newDate = sqlDate.replace("T", " ");
    newDate = newDate.substring(0, newDate.length - 2);
    //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
    var sqlDateArr1 = newDate.split("-");
    //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
    var sYear = sqlDateArr1[0];
    var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
    var sqlDateArr2 = sqlDateArr1[2].split(" ");
    //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']
    var sDay = sqlDateArr2[0];
    var sqlDateArr3 = sqlDateArr2[1].split(":");
    //format of sqlDateArr3[] = ['hh','mm','ss.ms']
    var sHour = sqlDateArr3[0];
    var sMinute = sqlDateArr3[1];
    var sqlDateArr4 = sqlDateArr3[2].split(".");
    //format of sqlDateArr4[] = ['ss','ms']
    var sSecond = sqlDateArr4[0];
    var sMillisecond = sqlDateArr4[1];
     
    console.log(newDate);
    return new Date(sYear,sMonth,sDay,sHour,sMinute,sSecond,sMillisecond);
}


async function getAll() {
    var data = await getAllOrders();
    console.log(data);

    
    var html = '';

    for(var i = 0; i< data.length; i++) {

      /*  var order_status;
        switch(data[i].order_status_id) {
            case 100:
                order_status = 'Draft';
                break;
            case 200:
                order_status = 'Pending';
                break;
            case 201:
                order_status = 'Shipped';
                break;
            case 202:
                order_status = 'Delivered';
                break;
            case 300:
                order_status = 'Closed';
        }*/

        html += '<div class="tile is-parent">';
        html += '<article class="tile is-child box">';
        html += '<a class="title"  onclick=' + `loadPage(${data[i].order_id})` + '>Order ID: '+ data[i].order_id + '</a>';
        html += '<div class="content"> <br>';
        html += '<p class="text1">Date Created: ' + sqlToJsDate(data[i].datetime_order_placed) + '</p>';
        html += '<p class="text1"> Order Status: ' + data[i].status + '</p>';
        html += '<p class="text1"> Total Price: ' + data[i].total_order_price +  '</p><br>';
        html += '</div>';
        html += '</article>';
        html += '</div>';
    }

$('#ordersContainer').html(html);

};