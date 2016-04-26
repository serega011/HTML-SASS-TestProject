$(document).ready(function(){

    var filter = $('.filter');

    $('.log-in').click(function(){
        filter.fadeIn(600);
        $('.login').fadeIn(600);
    });
    $('.reg_button').click(function(){
        filter.fadeIn(600);
        $('.reg').fadeIn(600);
    });
    $('#forgot').click(function(){
        $('.login').fadeOut(400);
        $('.pass').delay(400).fadeIn(400);
    });
    



    filter.click(function(e){
        var target = $(e.target)
        if (target.hasClass('filter')){
            filter.fadeOut(600);
            $('.filter>div').fadeOut(600);
        };
    });


});