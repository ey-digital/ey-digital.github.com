jQuery.fn.exists = function(){return this.length>0;}

/////////////////////////////////////////////// Window load function //////////////////////////////////////////////////////

$(window).load(function(e) {
	
	// will first fade out the loading animation
    $(".loading_img").fadeOut();
    // will fade out the whole DIV that covers the website.
    $("#loading").delay(600).fadeOut("slow");
	
	  
});








/* Function to scroll to top */
var backTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 800 ) {
                $('#back-top').addClass('show');
            } else {
                $('#back-top').removeClass('show');
            }
        }); 

        $('#back-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
        });
    };
	




/* Dock menu to top of page for inner navmenu */
	
							 

var dropdownHover = function(){
  
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');     
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');            
            });
	  
};




////////////////////////////////////////// Begin document ready function /////////////////////////////////////////


$(function(){
	
	
	dropdownHover();

	
	/* Ligthbox plugins*/
	
	if ( $().fancybox ) {
	    $(".fancybox").fancybox({
			padding : 0
		});
	}
	
	
	$("input[name='nature']").click(function () {
            if ($("#chargeable_sel").is(":checked")) {
                $("#chargeable").show();
				$("#authorized").hide();
            } else {
                $("#authorized").show();
				$("#chargeable").hide();
            }
        });
	

$(document).on('click', '.browse', function(){
  var file = $(this).parent().parent().parent().find('.file');
  file.trigger('click');
});
$(document).on('change', '.file', function(){
  $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
});
	
// end bracket for document ready function 
});

//////////////////////////////////////////////////// End document ready function ///////////////////////////////////////////////////////