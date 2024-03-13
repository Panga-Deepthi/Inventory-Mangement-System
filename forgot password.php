<?php 
include('inc/header.php');
?>
<script src="js/forgotPassword.js"></script>
<style>
html,
body,
body>
.container {
    height: auto;
    width: 100%;
}
body>.container {
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
}
#title{
	text-shadow:2px 2px 5px #000;
} 
</style>
<?php include('inc/container.php');?>

	<h1 class="text-center my-4 py-3 text-light" id="title">Inventory Management System - PHP</h1>	
	<div class="col-lg-4 col-md-5 col-sm-10 col-xs-12">
		<div class="card rounded-0 shadow">
			<div class="card-header">
				<div class="card-title h3 text-center mb-0 fw-bold">Forgot Password</div>
			</div>
            <div class="card-body">
				<div class="container-fluid">
					<form method="post" action="">
						<div class="form-group">
						<?php if ($loginError ) { ?>
							<div class="alert alert-danger rounded-0 py-1"><?php echo $loginError; ?></div>
						<?php } ?>
						</div>
						
						<div class="mb-3">
							<label for="Email Address" class="control-label">Email Address</label>
							<input type="Email Address" class="form-control rounded-0" id="emailAddress" name="Email Address" placeholder="Email Address" required>
						</div>  
                        <div class="mb-3">
							<label for="password" class="control-label"> Password</label>
							<input type="password" class="form-control rounded-0" id="password" name="pwd" placeholder="Password" required>
						</div>
                        <div class="mb-3">
							<label for="Re-enter password" class="control-label">Re-enter Password</label>
							<input type="Re-enter password" class="form-control rounded-0" id="reEnteredPassword" name="pwd" placeholder="Re-enter Password" required>
						</div>
                        
                        
						
						
					</form>
                    <button type="submit" name="forgot password"  id="submit" class="btn btn-primary"><span class="fa fa-user"></span>&nbsp;submit</button>
		          <span><a href="login.php">Login</a></span>
			</div>
		</div>
	</div>		
<?php include('inc/footer.php');?>