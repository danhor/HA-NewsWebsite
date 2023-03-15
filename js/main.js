//heart clicking event
const imgvar1 = document.getElementById('imgvar1');
function toggleimg1(){
    if(imgvar1.style.color == "blue"){
       imgvar1.style.color = 'grey'
       
    }
    else {
       imgvar1.style.color = 'blue'              
    }    
}

const imgvar2 = document.getElementById('imgvar2');
function toggleimg2(){
    if(imgvar2.style.color == "blue"){
       imgvar2.style.color = 'grey'
       
    }
    else {
       imgvar2.style.color = 'blue'              
    }    
}

const imgvar3 = document.getElementById('imgvar3');
function toggleimg3(){
    if(imgvar3.style.color == "blue"){
       imgvar3.style.color = 'grey'
       
    }
    else {
       imgvar3.style.color = 'blue'              
    }    
}


const imgvar4 = document.getElementById('imgvar4');
function toggleimg4(){
    if(imgvar4.style.color == "blue"){
       imgvar4.style.color = 'grey'
       
    }
    else {
       imgvar4.style.color = 'blue'              
    }    
}

const imgvar5 = document.getElementById('imgvar5');
function toggleimg5(){
    if(imgvar5.style.color == "blue"){
       imgvar5.style.color = 'grey'
       
    }
    else {
       imgvar5.style.color = 'blue'              
    }    
}


const imgvar6 = document.getElementById('imgvar6');
function toggleimg6(){
    if(imgvar6.style.color == "blue"){
       imgvar6.style.color = 'grey'
       
    }
    else {
       imgvar6.style.color = 'blue'              
    }    
}


const imgvar7 = document.getElementById('imgvar7');
function toggleimg7(){
    if(imgvar7.style.color == "blue"){
       imgvar7.style.color = 'grey'
       
    }
    else {
       imgvar7.style.color = 'blue'              
    }    
}

const imgvar8 = document.getElementById('imgvar8');
function toggleimg8(){
    if(imgvar8.style.color == "blue"){
       imgvar8.style.color = 'grey'
       
    }
    else {
       imgvar8.style.color = 'blue'              
    }    
}

const imgvar9 = document.getElementById('imgvar9');
function toggleimg9(){
    if(imgvar9.style.color == "blue"){
       imgvar9.style.color = 'grey'
       
    }
    else {
       imgvar9.style.color = 'blue'              
    }    
}

const imgvar10 = document.getElementById('imgvar10');
function toggleimg10(){
    if(imgvar10.style.color == "blue"){
       imgvar10.style.color = 'grey'       
    }
    else {
       imgvar10.style.color = 'blue'              
    }    
}

const imgvar11 = document.getElementById('imgvar11');
function toggleimg11(){
    if(imgvar11.style.color == "blue"){
       imgvar11.style.color = 'grey'       
    }
    else {
       imgvar11.style.color = 'blue'              
    }    
}

const imgvar12 = document.getElementById('imgvar12');
function toggleimg12(){
    if(imgvar12.style.color == "blue"){
       imgvar12.style.color = 'grey'       
    }
    else {
       imgvar12.style.color = 'blue'              
    }    
}

const imgvar13 = document.getElementById('imgvar13');
function toggleimg13(){
    if(imgvar13.style.color == "blue"){
       imgvar13.style.color = 'grey'       
    }
    else {
       imgvar13.style.color = 'blue'              
    }    
}


const imgvar14 = document.getElementById('imgvar14');
function toggleimg14(){
    if(imgvar14.style.color == "blue"){
       imgvar14.style.color = 'grey'       
    }
    else {
       imgvar14.style.color = 'blue'              
    }    
}

const imgvar15 = document.getElementById('imgvar15');
function toggleimg15(){
    if(imgvar15.style.color == "blue"){
       imgvar15.style.color = 'grey'       
    }
    else {
       imgvar15.style.color = 'blue'              
    }    
}

const imgvar16 = document.getElementById('imgvar16');
function toggleimg16(){
    if(imgvar16.style.color == "blue"){
       imgvar16.style.color = 'grey'       
    }
    else {
       imgvar16.style.color = 'blue'              
    }    
}

const imgvar17 = document.getElementById('imgvar17');
function toggleimg17(){
    if(imgvar17.style.color == "blue"){
       imgvar17.style.color = 'grey'       
    }
    else {
       imgvar17.style.color = 'blue'              
    }    
}

//toogle read/unread icon
function toggle_read_unread(x) {
    x.classList.toggle("fa-envelope-open");    
  }


$(document).ready(function(){
    $("tn-heart").click(function(){
       var color = $(this).attr("pri-heart");
       $("body").css("background", color);
    });
});



(function ($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.header').addClass('header-sticky');
        } else {
            $('.header').removeClass('header-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Category News Slider
    $('.cn-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})(jQuery);

