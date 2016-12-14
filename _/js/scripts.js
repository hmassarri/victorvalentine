$(document).ready(function() {
   
    //Intitialize the side-nav
    $(".button-collapse").sideNav();
    
    
    //Hover Menu Item
    /*
    $('#nav li').hover( function() {
            $(this).css("background-color", "red");
        }, function(){
            $(this).css("background-color", "black");
        }
    });
    */
    
    //Scroll to function
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    
});