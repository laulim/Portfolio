$(document).ready(function() {

//PageScroll2Id
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});


// MixItUp
	$('#portfolio-projects').mixItUp();

// FancyBox
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });

});