(function($) {
  $(document).ready(function(){
		$('#pull-wrapper #menu-pull').click(function(e) {
			e.preventDefault();
			$(this).parent().next('.region-header').find('ul.menu').first().slideToggle('fast');
		});
		$('#pull-wrapper-section #menu-pull-section').click(function(e) {
			e.preventDefault();
			$('#secondary-menu-mobile').slideToggle('fast');
		});
	});
})(jQuery);;
