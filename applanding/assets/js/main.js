

const over= document.querySelectorAll(".over-class");

function removeActive(){
    over.forEach(element => {
        element.classList.remove("active")
    
    });

}

function addActive(elem){
    removeActive();
    elem.classList.add("active");
}

$('.customers-slider').owlCarousel({
    responsiveClass:true,
    margin:30,
    dots: false,
    autoplay: 2000,
    loop: true,
    autoplayStopOnLast: false,
    autoWidth:false,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1200:{
            items:5
        }

    }

});
$('.testimonial-slider').owlCarousel({
    responsiveClass:true,
    margin:30,
    dots: true,
    autoWidth:false,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayStopOnLast: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:2
        },
        1200:{
            items:3
        }

    }

});
// Back to top
(function(){

    $('body').append('<div id="toTop"><span><i class="fa fa-angle-down"></i></span></div>');

    $(window).on("scroll", function (e) {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

}());

