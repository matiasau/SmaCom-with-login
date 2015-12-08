<?php
require("common.php");

?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Testing</title>

<!-- jQuery -->
<script src="js/jquery.min.js"></script>

<!-- jQuery UI -->
<script src="js/jquery-ui.min.js"></script>

<!-- jQuery UI css -->
<link rel="stylesheet" href="css/jquery-ui.css">
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>

<style type="text/css">
	
	body{
		margin:0;
		font-family: Roboto, Arial, sans-serif;
	}

	
	.container{
		position:relative;
		margin:0;
		padding: 10px;
		max-width: 100%;
	}
	
	.topbar{
		position: absolute;
		left:0;
		top: 0;
		width: 100%;
		max-height: 5em;
		min-height: 2em;
		background-color: lightgray;
	}
	
	.topbar p{
		margin:0;
		padding:0.3em;
	}

	.main{
		position: absolute;
		top:50px;
	}		
</style>
</head>

<body>

<div class="container">
	<div class="topbar">
	</div>
	<div class="main">
	</div>
</div>

<?php if(empty($_SESSION['user'])){ ?>
	
	<script>
	

		$(".topbar").html("<p>Welcome! Please <a id=\"loginlink\" href=\"#\">login</a> or <a id=\"registerlink\" href=\"#\">register an account</a>.</p>");
		$.post("login.php", function(data) {
			$(".main").html(data);
		});
		
		$("#registerlink").click(function(){
			$.post("register.php", function(data) {
				$(".main").html(data);
			});
		});
		
		$("#loginlink").click(function(){
			$.post("login.php", function(data) {
				$(".main").html(data);
			});
		});
		
	</script>
	
</body>

</html> 
	
<?php }else{ ?>

<!-- <iframe id="enchant-iframe" src="smacom/index.html" width="400" height="300" frameborder="0"></iframe> -->

<script>

	var sessiondata = <?php echo json_encode($_SESSION); ?>; //Don't forget the extra semicolon!
	var parsedData =  JSON.parse('<?php echo json_encode($_SESSION); ?>'); 
	$(".topbar").html("<p>Hello " + parsedData.user.username + "! <a href=\"logout.php\">Logout</a></p>");	
	$.post("private.php", function(data) {
		$(".main").html(data);
	});
	
	
</script>

</body>
</html> 
<?php } ?>


