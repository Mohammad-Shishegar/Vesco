// ============================
//             Services
// ============================
$(function() {
    new WOW().init();
})
// ============================
//             Work
// ============================

$(function() {
    $("#work").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    })
})

// ============================
//             Team
// ============================
$(function(){
    $("#team-members").owlCarousel({
        autoplay:true,
        items:3,
        smartSpeed:700,
        loop:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1
            },
            // breakpoint from 480 up
            480 : {
                items:2
            },
            // breakpoint from 768 up
            768 : {
                items:3
            },
        }
    });
})

// ============================
//         testimonials
// ============================
$(function(){
    $("#customers-testimonials").owlCarousel({
        autoplay:true,
        items:1,
        smartSpeed:700,
        loop:true
    });
})
// ============================
//         stats
// ============================
$(function(){
    $('.counter').counterUp({
        delay: 100,
        time: 3000
    });
})
// ============================
//             Clients
// ============================
$(function(){
    $("#clients-list").owlCarousel({
        autoplay:true,
        items:6,
        smartSpeed:700,
        loop:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1
            },
            // breakpoint from 480 up
            480 : {
                items:3
            },
            // breakpoint from 768 up
            768 : {
                items:5
            },
            // breakpoint from 992 up
            992 : {
                items:6
            }
        }
    });
})
// ============================
//             Navigation
// ============================
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50){
            //hide
            $("nav").removeClass("vesco-top-nav")
            $("#back-to-top").fadeOut();
        }else{
            //show
            $("nav").addClass("vesco-top-nav")
            $("#back-to-top").fadeIn();
        }
    })
})
// ============================
//             Smooth Scrolling
// ============================
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault()
        //get return id like #about
        var section = $(this).attr("href")
        $("html , body").animate({
            scrollTop: $(section).offset().top - 64
        } , 1250)
    })
})
// $(function(){
//     $(".navbar-collapse ul li a").on("click touch" , function(){
//         $(".navbar-toggle").click()
//     })
// })