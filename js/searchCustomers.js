function searchForCustomers()
{
    var input, filter, ul, li, a, txtValue;
    input = document.getElementById('customerSearchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("customersList");
    li = ul.getElementsByTagName('li');

    for(var i = 0; i < li.length; i++)
    {
        a = li[i].getElementsByClassName("tile is-parent")[0];
        txtValue = a.textContent || a.innerHTML;
        if(txtValue.toUpperCase().indexOf(filter) > -1)
            li[i].style.display = "";
        else
            li[i].style.display = "none";
    }
}