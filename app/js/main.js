$(document).ready(function(){

    var modal = $('.modal');

    $('.log-in').click(function(){
        modal.fadeIn(600);
        $('.login').fadeIn(600);
        $('body').toggleClass('hidden_mod');
    });
    $('.reg_button').click(function(){
        modal.fadeIn(600);
        $('.reg').fadeIn(600);
        $('body').toggleClass('hidden_mod');
    });
    $('#forgot').click(function(){
        $('.login').fadeOut(400);
        $('.pass').delay(400).fadeIn(400);
        $('body').toggleClass('hidden_mod');
    });
    



    modal.click(function(e){
        var target = $(e.target)
        if (target.hasClass('modal')){
            modal.fadeOut(600);
            $('.modal>div').fadeOut(600);
            $('body').toggleClass('hidden_mod');
        };
    });

});