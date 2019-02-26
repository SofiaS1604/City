$(document).ready(function(){
    $('.menu_item').click(function () {
        $('.menu_mobile').removeClass('menu_mobile-active');
        $('.menu').removeClass('active_menu');
    })

    $("a").on("click", function(e){
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();

    });
    
    let active = 0;

    $('.menu').click(function () {
        if(active === 1){
            $('.menu').removeClass('active_menu');
            $('.menu_mobile').removeClass('menu_mobile-active');
            active = 0;
        }else{
            $('.menu').addClass('active_menu');
            $('.menu_mobile').addClass('menu_mobile-active');
            active = 1;
        }
    });




    
});