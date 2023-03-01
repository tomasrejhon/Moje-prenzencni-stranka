$(document).ready(function(){


    //****************************//
    //****************************//
    //  side menu operations   -->
    //****************************//
    //****************************//
    
    const   menu = $('#sideMenu'),
            navItem = $('.navItem'),
            menuButton = $('#menuButton');
    var     menuIsOpen = false;


    // scroll function
    function scroll(target) {
        $('html,body').animate({ scrollTop: $(target).offset().top }, 500);
    }

    //  hide side menu after window width is under 990
    if ($(window).width() < 990) {
        menu.removeClass('sideMenuShow').addClass('sideMenuHide')
     }


    // when window resizes between large and small displayes

    $(window).on('resize', function() {
        if ($(window).width() > 990) {
            menu.removeClass('sideMenuHide').addClass('sideMenuShow')
            menuIsOpen = false;
        } else {
            menu.removeClass('sideMenuShow').addClass('sideMenuHide');
            menuIsOpen = false;
        }
    });

    // function for toogle class 'sideMenuHide' & 'sideMenuShow' on side menu
    function showHideMenu() {
        menu.toggleClass('sideMenuHide sideMenuShow');
        menuIsOpen = !menuIsOpen;
        }
        

    // nav menu click events for scroll function
    $('a[href*="#"]:not([href="#"])').on('click', function () {
        scroll(this.hash);
    });

    // Menu button click event
    menuButton.on('click', function(){
        showHideMenu();
    });

    // hide menu when clicking a link - mobile version 
    navItem.on('click', function() {
        if (menuIsOpen) {
            showHideMenu();
        }
    });



    //****************************//
    //****************************//
    //  lightbox for certificates-->
    //****************************//
    //****************************//


    var eduGrid = $('.eduGrid');

	eduGrid.find('.certifikate').on('click', function( event ){
		
		event.preventDefault()

		let certifikateButton = $(this),
			idOfButtons ;
			//c1 = html & css
			//c2 = opp & php
			//c3 = sass
			//c4 = JS ES6
		if(certifikateButton.hasClass('c1')){
			idOfButtons = 1;
		}else if(certifikateButton.hasClass('c2')){
			idOfButtons = 2;
		}else if(certifikateButton.hasClass('c3')){
			idOfButtons = 3;
		}else if(certifikateButton.hasClass('c4')){
			idOfButtons = 4;
		};
        
		$('<div id="overlay"><img src="./img/certifikate/skillmea'+idOfButtons+'.jpg"></div>').appendTo('body').fadeIn(300);
	
		$(window).lockscroll(true);

	});

			// click to close overlay element  

	$(document).on('click', '#overlay', function(){
		$(this).fadeOut(300, function(){this.remove()});
		$(window).lockscroll(false);
	});
			// press 'esc' to close overlay element 

	$(document).on('keyup', function(event){
		if (event.key === 'Escape'){
			$('#overlay').fadeOut(300, function(){this.remove()});
			$(window).lockscroll(false);
		}
	});

    //**********************//
    //**********************//
    // back to top button -->
    //**********************//
    //**********************//

    //check to see if the window is top if not then display button
    $(window).scroll(function(){
        // Show button after 200px
        var showAfter = 200;
        if ($(this).scrollTop() > showAfter ) { 
            $('.backToTop').fadeIn();
        } else { 
            $('.backToTop').fadeOut();
        }
    });
 
    //click event to scroll to top
    $('.backToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
 
});