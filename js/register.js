// $(document).ready(function() {
// 	console.log("vijay");
$(document).on('click', '#register', function() {
	console.log("registration");
	var userid = $(this).attr("id");
	console.log("userId " + userid);
	var btn_action = "Register";
	// if (confirm("Do You want to register?")) {
		var fullName = $("#fullName").val();
		var emailAddress = $("#emailAddress").val();
		var password = $("#password").val();
		var reEnteredPassword = $("#reEnterPassword").val();
		var userType = $("#userType").val();
		console.log("name " + fullName);
		console.log("emailAddress"+emailAddress);
		console.log("password"+password);
		console.log("reEnteredPassword"+ reEnteredPassword);
		console.log("userType"+userType);
	

		var status = true;
		var e_patt = new RegExp(/^[a-z0-9_-]+(\.[a-z0-9_-]+)*@[a-z0-9_-]+(\.[a-z0-9_-]+)*(\.[a-z]{2,4})$/);
		if(fullName == "" || fullName.length < 6){
			// alert("Name should not be empty");
			$("#fullNameError").html("<span class='text-danger'>Please Enter Name and Name should be more than 6 char</span>");
			status = true;
		}
		else{
			$("#fullNameError").html("");
			status = false;
		}

		 if(!e_patt.test(emailAddress)){
		 	// email.addClass("border-danger");
		 	$("#emailAddressError").html("<span class='text-danger'>Please Enter Valid Email Address</span>");
			 status = true;
		 }else{
			// email.removeClass("border-danger");
			$("#emailAddressError").html("");
		 	status = false;
		 }

         if(password == "" || password.length < 9){
			// pass1.addClass("border-danger");
			$("#passwordError").html("<span class='text-danger'>Please Enter more than 9 digit password</span>");
			status = true;
		}else{
			// pass1.removeClass("border-danger");
			$("#passwordError").html("");
			status = false;
		}

		if(reEnteredPassword == "" || reEnteredPassword.length < 9){
			// pass2.addClass("border-danger");
			$("#reEnteredPasswordError").html("<span class='text-danger'>Please Enter more than 9 digit password</span>");
			status = true;
		}else{
			// pass2.removeClass("border-danger");
			$("#reEnteredPasswordError").html("");
			status = false;
		}

			

		



		

		







		
			






		if(status){
			return;
		}

		$.ajax({
			url: "action.php",
            method: "POST",
			data: { fullName: fullName, emailAddress: emailAddress, password: password, userType: userType, btn_action: btn_action },
			success: function(data) {
				alert("registrations Successfull. redirecting to login Page.");
					window.location.href = "./login.php";
				
			},
			error: function (data) {
				alert('some unknown error happened');
			}
		});
	// } else {
	// 	// return false;
	// }
});
// });