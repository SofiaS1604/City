$(document).ready(function(){
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
            active = 0;
        }else{
            $('.menu').addClass('active_menu');
            active = 1;
        }
    });


    
});