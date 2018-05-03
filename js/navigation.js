$(document).ready(function() {

	var navToggleButton = $('#navigation__button');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');

//Mobile Navigation
	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);
		navButtonToggle()
	});

	navLink.on('click', function(){
		navButtonToggle()
		navBlock.removeClass(navBlockOpen);
	});

	function navButtonToggle(){
		if (navToggleButton.hasClass('active')){
	    	navToggleButton.removeClass('active');
		} else {
	    	navToggleButton.addClass('active');
		}
	}

});