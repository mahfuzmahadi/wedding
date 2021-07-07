$(document).ready(function(){
    
     $('.slider-list').owlCarousel({
            loop:true,
            nav:true,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],

            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true,
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true,
                }
            }
    })
});