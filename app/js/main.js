$(document).ready(function(){

    var filter = $('.filter');

    $('.log-in').click(function(){
        filter.fadeIn(600);
        $('.login').fadeIn(600);
        $('body').toggleClass('hidden_mod');
    });
    $('.reg_button').click(function(){
        filter.fadeIn(600);
        $('.reg').fadeIn(600);
        $('body').toggleClass('hidden_mod');
    });
    $('#forgot').click(function(){
        $('.login').fadeOut(400);
        $('.pass').delay(400).fadeIn(400);
        $('body').toggleClass('hidden_mod');
    });
    



    filter.click(function(e){
        var target = $(e.target)
        if (target.hasClass('filter')){
            filter.fadeOut(600);
            $('.filter>div').fadeOut(600);
            $('body').toggleClass('hidden_mod');
        };
    });

});