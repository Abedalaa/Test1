(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		$('.button-collapse').sideNav({
		  edge: 'right', 
		  menuWidth: 300,
		  closeOnClick: true
		});
		$('.collapsible').collapsible();

		$('.js-reveal').on('click', function(e) {
			e.preventDefault();
			var id = $(this).attr('data-id');
			$(id).toggleClass('social-reveal-active');
		})
		
	});
	
})(jQuery, this);
