$(document).ready(function(){
    
    // 1. Page Loader Fade Out
    $(window).on('load', function() {
        $('#page-loader').fadeOut('slow');
    });

    // 2. Mobile Menu Toggle (jQuery)
    // This listens for a click on the hamburger icon (.mobile-toggle)
    // and toggles the 'active' class on the menu list (#mobile-nav)
    $('.mobile-toggle').click(function(){
        $('#mobile-nav').toggleClass('active');
    });

    // 3. Initialize Patient Stories Slider (Owl Carousel)
    $('#patient-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        responsive:{
            0:{ items:1 },
            600:{ items:2 }
        }
    });

    // 4. Initialize Doctors Slider (Owl Carousel)
    $('#doctors-slider').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{ items:1 },
            600:{ items:2 },
            1000:{ items:4 }
        }
    });

    // 5. Accordion Logic
    $('.accordion-header').click(function(){
        // Close other panels (optional - uncomment next line if you want only one open at a time)
        // $('.accordion-content').not($(this).next()).slideUp();
        
        // Toggle the clicked panel
        $(this).next('.accordion-content').slideToggle();
    });
});