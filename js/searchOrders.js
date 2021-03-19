function searchForOrders()
{
    var input, filter, ul, li, a, val;
    input = document.getElementById('orderSearchInput');
    filter = input.value;
    ul = document.getElementById("ordersInput");
    li = ul.getElementsByTagName('li');

    for(var i = 0; i < li.length; i++)
    {
        a = li[i].getElementsByClassName("tile is-parent")[0];
        val = a.textContent || a.innerHTML;
        if(val.indexOf(filter) > -1)
            li[i].style.display = "";
        else
            li[i].style.display = "none";
    }
}