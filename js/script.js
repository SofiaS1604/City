$(document).ready(function(){
    $("a").on("click", function(e){
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();
    });
});

document.querySelector('.menu_item').addEventListener('click',() => {
    document.querySelector('.menu').className = 'menu';
    document.querySelector('.menu_mobile').className = 'menu_mobile';
});

let active = 0;

document.querySelector('.menu').addEventListener('click',()=>{
    if(active === 1){
        document.querySelector('.menu').className = 'menu';
        document.querySelector('.menu_mobile').className = 'menu_mobile';
        active = 0;
    }else{
        document.querySelector('.menu').className = 'menu active_menu';
        document.querySelector('.menu_mobile').className = 'menu_mobile menu_mobile-active';
        active = 1;
    }
});

// document.querySelector('.image-1').addEventListener('click', ()=>{
//    document.querySelector('.slider').style.display = 'flex';
//    document.querySelector('.images').style.display = 'none';
//    document.querySelector('.slid').innerHTML = `<img class="image image-1" src="./images/architecture-buildings-burj-khalifa-1688504.jpg" alt="">`
// });