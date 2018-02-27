$(document).ready(function(){
 
   
    $(document).on('click', '.read-one-button', function(){
        var id = $(this).attr('data-id');
       
  
        $.getJSON("http://localhost/my_api/users/read_one.php?id=" + id, function(data){
           
            var read_one_html=""
            read_one_html+="<div id='read-products' class='btn btn-primary pull-right m-b-15px read-button'>";
            read_one_html+="<span class='glyphicon glyphicon-list'></span> Get All Usesr";
            read_one_html+="</div>";
            read_one_html+="<table class='table table-bordered table-hover'>";
 
          
    read_one_html+="<tr>";

        read_one_html+="<td class='w-30-pct'>Name</td>";
        read_one_html+="<td class='w-70-pct'>" + data.name + "</td>";
    read_one_html+="</tr>";
 
    read_one_html+="<tr>";
        read_one_html+="<td>Email</td>";
        read_one_html+="<td>" + data.email + "</td>";
    read_one_html+="</tr>";
  
    read_one_html+="<tr>";
        read_one_html+="<td>Contact</td>";
        read_one_html+="<td>" + data.contact + "</td>";
    read_one_html+="</tr>";
 
    read_one_html+="<tr>";
        read_one_html+="<td>About</td>";
        read_one_html+="<td>" + data.about+ "</td>";
    read_one_html+="</tr>";

    read_one_html+="<tr>";
    read_one_html+="<td>Gender</td>";
    read_one_html+="<td>" + data.gender+ "</td>";

    read_one_html+="</tr>";

    read_one_html+="</table>";
$("#page-content").html(read_one_html);
   
changePageTitle(data.name+  "  Details");
});
    });
 
});