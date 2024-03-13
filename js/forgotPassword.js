
$(document).on('click', '#submit', function() {


    
	var emailAddress = $("#emailAddress").val();
	var password = $("#password").val();
    var reEnteredPassword = $("#reEnteredPassword").val();

    console.log("emailAddress"+emailAddress);
	console.log("password"+password);
	console.log("reEnteredPassword"+ reEnteredPassword);
  
    var btn_action = "updatePassword";
    var status = true;
		var e_patt = new RegExp(/^[a-z0-9_-]+(\.[a-z0-9_-]+)*@[a-z0-9_-]+(\.[a-z0-9_-]+)*(\.[a-z]{2,4})$/);
        if(!e_patt.test(emailAddress)){
            // email.addClass("border-danger");
            $("#emailAddressError").html("<span class='text-danger'>Please Enter Valid Email Address</span>");
            status = true;
        }else{
           // email.removeClass("border-danger");
           $("#emailAddressError").html("");
            status = false;
        }


    $.ajax({
        url: "action.php",
        method: "POST",
        data: {emailAddress: emailAddress, password: password, btn_action: btn_action},
        success: function(data) {
            
            alert("password updated Successfull. redirecting to login Page.");
                window.location.href = "./login.php";
            
        },
        error: function (data) {
            alert('some unknown error happened please try again after some time.');
        }
    });

});