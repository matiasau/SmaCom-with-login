$( document ).ready(function() {
    //alert('This is an alert from JavaScript!');
	  $( "#message" ).slideDown( "fast",function(){
		  $(this).delay(1000).fadeOut("fast");
	  } );
});
