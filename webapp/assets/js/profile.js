/*
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
	 
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      
      password: {
        required: true,
        minlength: 5
      },
	  
     
      newpassword: {
        required: true,
        minlength: 5
      },	  
	  confirmpassword: {
        required: true,
		equalTo: "#newpassword",
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
	   password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
		
      },
	   newpassword: {
        required: "Please provide a new password",
        minlength: "Your password must be at least 5 characters long"
      },
      confirmpassword: {
        required: "Please confirm password",
        minlength: "Your password must be at least 5 characters long",
		equalTo: "Passwords do not match"

      },
    },
	submitHandler: function(form) {
      form.submit();
    },
	 highlight: function(element) {
        $(element).css('element', '#ffdddd');
    }
	
  });
});
$("#submit").click(function(){
	
	var firstname=$("#firstname").val();
	var password=$("#password").val();
	var newPassword=$("#newpassword").val();
	
	
	//var my_arr = new Array(firstname,password,newPassword);
	
    var AjaxURL = 'http://localhost:8081/AdminService/changepassword';
   // var jsonString = JSON.stringify(my_arr);
    //alert(jsonString);
    $.ajax({
    	 headers: { 
    	        'Accept': 'application/json',
    	        'Content-Type': 'application/json' 
    	    },
        type: "POST",
        url: AjaxURL,
        datatype:"json",
        data:{
            "uname": "admin",
            "password": "123456",
            "newPassword": "12345678"
        },
       // data: "{'uname':'" + firstname+ "', 'password':'" + password+ "', 'newPassword':'" + newPassword+ "'}",

        success: function(result) {
            alertlog(data);
        }
    });

   
});
	*/