$(document).ready(function(){
	var filterButton = $('.filter-block__button');
	var filterButtonActive = 'filter-block__button--active';

	filterButton.on('click', function(){
		$(this).addClass(filterButtonActive).parent().siblings().children().removeClass(filterButtonActive);
	});
});