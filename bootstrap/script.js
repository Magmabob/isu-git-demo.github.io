$('#click-me').click(function() {
	
	console.log('OUCH!!'); // Output message to the console

	// Toggle btn-success and btn-primary classes on each click
	$(this).toggleClass('btn-success').toggleClass('btn-primary');

});