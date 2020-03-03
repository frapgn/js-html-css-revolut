$(document).ready(function(){

    $('.menu-item').click(function(){
        // dropdown-menu visibility
        if ($(this).find('.dropdown-menu').is(':hidden')) {
            $('.menu-item').find('.dropdown-menu').slideUp(300);
            $(this).find('.dropdown-menu').slideDown(300);
            //icon rotation
            $(this).siblings('.menu-item').children('a').removeClass('rotate');
            $(this).children('a').addClass('rotate');
        } else {
            $(this).find('.dropdown-menu').slideUp(300);
            //icon rotation
            $(this).children('a').removeClass('rotate');
        }

        // menu-item  indicator
        $(this).addClass('active');
        $(this).siblings('.menu-item').removeClass('active');

    });


});
