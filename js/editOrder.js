$( document ).ready(function() {
    getOrderDescription(Number(localStorage.getItem("orderId")));
});


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

async function getOrderDescription(id) {
    var data = await getOrder(id);
    console.log(data);

    
    var html = '';
        /*
        var order_status;
        switch(data.order_status_id) {
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
        }
        */
        html += '<div class="box">';
        html += '<h3 class="title has-text-centered has-text-black">Edit Order</h3>';
        html += '<div class="content">'
        html += '<p class="text1" style = "color: inherit;">Order ID: ' + data.id + '</p>';
        html += '<p class="text1">Date Created: ' + sqlToJsDate(data.datetime_order_placed) + '</p>';
        html += '<p class="text1">  Price: ' + data.total_order_price +  '</p><br>';
        html += '</div>';
        html += '</article>';


        html += '<div class="dropdown is-hoverable">';
        html += '<div class="dropdown-trigger">';
        html += '<button class="button" aria-haspopup="true" aria-controls="dropdown-menu">';
        html += '<span>Shipping Status</span>';
        html += '<span class="icon is-small">';
        html += '<i class="fas fa-angle-down" aria-hidden="true"></i>';
        html += '</span>';
        html += '</button>';
        html += '</div>';
        html += '<div class="dropdown-menu" id="dropdown-menu" role="menu">';
        html += '<div class="dropdown-content">';
        html += '<a href="#" class="dropdown-item"> Draft</a>';
        html += '<a href="#" class="dropdown-item"> Pending</a>';
        html += '<a href="#" class="dropdown-item"> Shipped</a>';
        html += '<a href="#" class="dropdown-item"> Delivered</a>';
        html += '<a href="#" class="dropdown-item"> Closed</a>';
        html += '</div></div></div>';
        html += '<button class="button is-info" style="margin-left: 1em;" href="">Update Order </button>';
  

    
        $('#editOrderContainer').html(html);

};