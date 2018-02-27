$(document).ready(function(){
 $(document).on('click', '.create-button', function(){
    // $.getJSON("http://localhost/api/category/read.php", function(data){
    //     var categories_options_html="";
    //     categories_options_html+="<select name='category_id' class='form-control'>";
    //     $.each(data.records, function(key, val){
    //         categories_options_html+="<option value='" + val.id + "'>" + val.name + "</option>";
    //     });
    //     categories_options_html+="</select>";
        var create_html="";

       $(document).on('submit', '#create-product-form', function(){
        var form_data=JSON.stringify($(this).serializeObject());
        $.ajax({
            url: "http://localhost/my_api/users/create.php",
            type : "POST",
            contentType : 'application/json',
            data : form_data,
            success : function(result) {
              
                showUsers();
            },
            error: function(xhr, resp, text) {
               
                console.log(xhr, resp, text);
            }
        });
         
        return false;
        });
        create_html+="<div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>";
        create_html+="<span class='glyphicon glyphicon-list'></span> All Users";
        create_html+="</div>";
        create_html+="<form id='create-product-form' action='#' method='post' border='0'>";
        create_html+="<table class='table table-hover table-responsive table-bordered'>";
 
        // name field
        create_html+="<tr>";
            create_html+="<td>Name</td>";
            create_html+="<td><input type='text' name='name' class='form-control' required /></td>";
        create_html+="</tr>";
 
        // email field
        create_html+="<tr>";
            create_html+="<td>Email</td>";
            create_html+="<td><input type='email' name='email' class='form-control' required /></td>";
        create_html+="</tr>";
 
        // about field
        create_html+="<tr>";
            create_html+="<td>About</td>";
            create_html+="<td><textarea name='about' class='form-control' required></textarea></td>";
        create_html+="</tr>";
 
        // gender 'select' field
        create_html+="<tr>";
            create_html+="<td>Gender</td>";
            create_html+="<td><input type='text' name='gender' class='form-control' required /></td>";
        create_html+="</tr>";
 
        // contact field
        create_html+="<tr>";
            create_html+="<td>Contact</td>";
            create_html+="<td><input type='text' name='contact' class='form-control' required /></td>";
        create_html+="</tr>";
 
        // button to submit form
        create_html+="<tr>";
            create_html+="<td></td>";
            create_html+="<td>";
                create_html+="<button type='submit' class='btn btn-primary'>";
                    create_html+="<span class='glyphicon glyphicon-plus'></span> Create User";
                create_html+="</button>";
            create_html+="</td>";
        create_html+="</tr>";
 
    create_html+="</table>";
create_html+="</form>";
$("#page-content").html(create_html);
changePageTitle("Create User");
    });
    });
