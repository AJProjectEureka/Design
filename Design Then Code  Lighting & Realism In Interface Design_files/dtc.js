$(function(){

	$('code, pre').not('.manual, .block').addClass('prettyprint');

	prettyPrint();
	
	// Add figure counts to figcaption tags
	var i = 1;
	$('article figure').each( function() {
		$('<strong>Figure ' + i + ':&nbsp;</strong>').prependTo( $(this).find('figcaption') );
		i++;
	});
	
});