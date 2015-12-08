<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="IE=Edge">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes"> 
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <title>enchant</title>
		<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
        <script type="text/javascript" src="build/enchant.js"></script>
        <script type="text/javascript" src="database_accessor.js"></script>
		<script src="../js/jquery.min.js"></script>
		<script src="../js/jquery-ui.min.js"></script>
        <script type="text/javascript" src="main.js"></script>		
		
		<link rel="stylesheet" type="text/css" href="../css/jquery-ui.min.css">
        <style type="text/css">
            body {
                margin: 0;
				font-family: Roboto, Arial, sans-serif;
            }
			
			#enchant-statusbar{
				display:none;
				position: absolute;
				top: 400px;
				z-index: 1;
				width: 600px;
				height: 50px;
				background-color: black;
				opacity: 0.5;
			}
			
			#statusText{
				position:relative;
				padding: 5px 10px;
				z-index: 2;
				color:white;
				font-family: "Tahoma", Geneva, sans-serif;
			}
			
			
			#infowindow {
				display:none;
				position: absolute;
				top:20px;
				left:15px;
				z-index: 4;
				border-radius: 25px;
				width: 540px;
				max-height:405px;
				padding: 5px 10px 5px 10px;
				background-color: black;
				opacity: 0.9;
				
			}

			#infowindow h3 {
				position:relative;
				padding: 5px 5px;
				z-index: 5;
				color:white;
				text-align: center;
			}
			
			#infowindow p {
				position:relative;
				padding: 5px 10px;
				z-index: 5;
				color:white;
			}
			
			#infowindow a {
				color:yellow;
			}
						
			#closeButton {
				position:absolute;
				top: 10px;
				left: 518px;
				z-index:9999;
				width: 32px;
				height: 32px;
				fill:white;
			}
			
			#closeButton:hover {
				fill:yellow;
			}
			
        </style>
		
    </head>
    <body>
	<div id="enchant-stage"></div>
	
	<div id="enchant-statusbar">
		<div id="statusText"></div>
	</div>
	
	<div id="dialog" title="Worker info">
		
	</div>
	
	<div id="infowindow">

		<!-- close button -->
		<svg version="1.1" id="closeButton" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="44.24" height="44.24" viewBox="0 0 44.24 44.24" xml:space="preserve" enable-background="new 0 0 44.237 44.237">
		<line style="stroke-width:2" x1="15.53" y1="28.7" x2="28.7" y2="15.53"/>
		<path class="closeButtonX" d="M15.53 29.45c-0.19 0-0.38-0.07-0.53-0.22 -0.29-0.29-0.29-0.77 0-1.06l13.17-13.17c0.29-0.29 0.77-0.29 1.06 0s0.29 0.77 0 1.06L16.06 29.23C15.92 29.38 15.73 29.45 15.53 29.45z"/>
		<line x1="15.53" y1="15.53" x2="28.7" y2="28.7"/>
		<path class="closeButtonX" d="M28.7 29.45c-0.19 0-0.38-0.07-0.53-0.22L15 16.06c-0.29-0.29-0.29-0.77 0-1.06s0.77-0.29 1.06 0l13.17 13.17c0.29 0.29 0.29 0.77 0 1.06C29.09 29.38 28.9 29.45 28.7 29.45z"/>
		<path class="closeButtonCircle" d="M22.12 44.24C9.92 44.24 0 34.32 0 22.12S9.92 0 22.12 0s22.12 9.92 22.12 22.12S34.32 44.24 22.12 44.24zM22.12 1.5C10.75 1.5 1.5 10.75 1.5 22.12s9.25 20.62 20.62 20.62 20.62-9.25 20.62-20.62S33.49 1.5 22.12 1.5z"/>
		</svg>
		<!-- close button end -->

		
		<h3>Title</h3>
		<p>Content</p>
	</div>
    </body>
	
	<script>
		$(function() {
			$( "#dialog" ).dialog({
			  autoOpen: false,
			  show: {
				effect: "clip",
				duration: 300
			  },
			  hide: {
				effect: "clip",
				duration: 300
			  },
			  position: {
				  my: "center",
				  at: "center",
				  of: "#enchant-stage"
			  }
			});
			
		});
		
		$("#closeButton").click(function(){
			$("#infowindow").fadeOut(function(){
				$("#wikipedialink").remove();
			});
			
			
		});
		
	</script>
</html>
