$("form").submit( function(event) {
	event.preventDefault();
 $.post( $("form").attr("action"),
		 $("form :input").serializeArray(),
		console.log(status);
  );
});
