$(document).ready(function(){

    $(document).on('click', '.update-product-button', function(){
        var id = $(this).attr('data-id');
        $.getJSON("http://localhost/my_api/users/read_one.php?id=" + id, function(data){
            var name = data.name;
            var email = data.email;
            var about = data.about;
            var gender = data.gender;
            var contact = data.contact;
            // console.log(data);
            // $.getJSON("http://localhost/api/category/read.php", function(data){
            //     var categories_options_html="";
            //     categories_options_html+="<select name='category_id' class='form-control'>";
             
            //     $.each(data.records, function(key, val){
             
            //         if(val.id==category_id){
            //             categories_options_html+="<option value='" + val.id + "' selected>" + val.name + "</option>";
            //         }
             
            //         else{
            //             categories_options_html+="<option value='" + val.id + "'>" + val.name + "</option>";
            //         }
            //     });
            //     categories_options_html+="</select>";
                var update_html="";

                update_html+="<div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>";
                update_html+="<span class='glyphicon glyphicon-list'></span> Read Products";
                update_html+="</div>";
         

   

    update_html+="<form id='update-product-form' action='#' method='post' border='0'>";
    update_html+="<table class='table table-hover table-responsive table-bordered'>";
 
        // name field
        update_html+="<tr>";
            update_html+="<td>Name</td>";
            update_html+="<td><input value=\"" + name + "\" type='text' name='name' class='form-control' required /></td>";
        update_html+="</tr>";
 
        // email field
        update_html+="<tr>";
            update_html+="<td>Email</td>";
            update_html+="<td><input value=\"" + email  + "\" type='email' name='email' class='form-control' required /></td>";
        update_html+="</tr>";
 
        // about field
        update_html+="<tr>";
            update_html+="<td>About</td>";
            update_html+="<td><textarea name='about' class='form-control' required>" + about + "</textarea></td>";
        update_html+="</tr>";
 
       //gender field
        update_html+="<tr>";
          update_html+="<td>Gender</td>";
          update_html+="<td><textarea name='gender' class='form-control' required>" + gender + "</textarea></td>";
        update_html+="</tr>";
 
        update_html+="<tr>";
          update_html+="<td>Contact</td>";
          update_html+="<td><textarea name='contact' class='form-control' required>" + contact + "</textarea></td>";
        update_html+="</tr>";
        
        update_html+="<tr>";
 
            update_html+="<td><input value=\"" + id + "\" name='id' type='hidden' /></td>";
 
            // button to submit form
            update_html+="<td>";
                update_html+="<button type='submit' class='btn btn-info'>";
                    update_html+="<span class='glyphicon glyphicon-edit'></span> Update Users";
                update_html+="</button>";
            update_html+="</td>";
 
        update_html+="</tr>";
 
    update_html+="</table>";
update_html+="</form>";
    $(document).on('submit', '#update-product-form', function(){
        var form_data=JSON.stringify($(this).serializeObject());
        console.log(form_data);
        $.ajax({
            url: "http://localhost/my_api/users/update.php",
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
    })
$("#page-content").html(update_html);
 
changePageTitle("Update User");
});
});
});
