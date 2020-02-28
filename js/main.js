$(document).ready(function(){

    $('.menu-item').click(function(){
        if ($(this).find('.dropdown-menu').is(':hidden')) {
            $('.menu-item').find('.dropdown-menu').slideUp(300);
            $(this).find('.dropdown-menu').slideToggle(300);
        } else {
            $(this).find('.dropdown-menu').slideToggle(300);
        }
    });



});
