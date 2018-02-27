$(document).ready(function(){
 
   showUsers();

});
$(document).on('click', '.read-button', function(){
    showUsers();
});

function showUsers(){
    $.getJSON("http://localhost/my_api/users/read.php", function(data){
        var read_html="";
 
        read_html+="<div id='create-product' class='btn btn-primary pull-right m-b-15px create-button'>";
        read_html+="<span class='glyphicon glyphicon-plus'></span> Create New User";
        read_html+="</div>";
       
        read_html+="<table class='table table-bordered table-hover'>";
 
        read_html+="<tr>";
            read_html+="<th class='w-25-pct'>Name</th>";
            read_html+="<th class='w-10-pct'>Price</th>";
            read_html+="<th class='w-15-pct'>Category</th>";
            read_html+="<th class='w-25-pct text-align-center'>Action</th>";
        read_html+="</tr>";
        $.each(data.records, function(key, val) {
 
          
            read_html+="<tr>";
         
                read_html+="<td>" + val.name + "</td>";
                read_html+="<td>" + val.email + "</td>";
                read_html+="<td>" + val.contact + "</td>";
         
             
                read_html+="<td>";
                   
                    read_html+="<button class='btn btn-primary m-r-10px read-one-button' data-id='" + val.id + "'>";
                        read_html+="<span class='glyphicon glyphicon-eye-open'></span> View User";
                    read_html+="</button>";
         
                  
                    read_html+="<button class='btn btn-warning m-r-10px update-product-button' data-id='" + val.id + "'>";
                        read_html+="<span class='glyphicon glyphicon-edit'></span> Edit User";
                    read_html+="</button>";
         
                    
                    read_html+="<button class='btn btn-danger delete-product-button' data-id='" + val.id + "'>";
                        read_html+="<span class='glyphicon glyphicon-remove'></span> Delete User";
                    read_html+="</button>";
                read_html+="</td>";
         
            read_html+="</tr>";
         
        });
        read_html+="</table>";
        $("#page-content").html(read_html);
        showUsers
}); 
}