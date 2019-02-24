$(document).ready(function(){
    $("a").on("click", function(e){
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();

    });
});