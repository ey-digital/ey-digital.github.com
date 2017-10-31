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
    backTop();
	
	/* Ligthbox plugins*/
	
	if ( $().fancybox ) {
	    $('[data-fancybox]').fancybox({
	          protect: true
		 });
	}
	
	
	if ( $().slick ) {
	    $("#champions").slick({
		  infinite: false,
		  slidesToShow: 3,
		  slidesToScroll: 2,
		  responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			 ]		
			
			
		});
	}
	
	

	
 $(".chatbox-trigger").click(function(){
     $(".chatbox").fadeIn();
  });
	
 $(".close-box").click(function(){
     $(".chatbox").fadeOut();
  });	
	
	


	
/* Search overlay */
	$('button[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
	
	
	
// end bracket for document ready function 
});

//////////////////////////////////////////////////// End document ready function ///////////////////////////////////////////////////////