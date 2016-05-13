$(document).ready(function(){

    var modal = $('.modal');

    $('.header_button-log').click(function(){
        modal.fadeIn(600);
        $('.modal_login').fadeIn(600);
        $('body').toggleClass('hidden_mod');
    });
    $('.intro_info-button').click(function(){
        modal.fadeIn(600);
        $('.modal_reg').fadeIn(600);
        $('body').toggleClass('hidden_mod');
    });
    $('#forgot').click(function(){
        $('.modal_login').fadeOut(400);
        $('.modal_pass').delay(400).fadeIn(400);
        $('body').toggleClass('hidden_mod');
    });
    



    modal.click(function(e){
        var target = $(e.target)
        if (target.hasClass('modal')){
            modal.fadeOut(600);
            $('.modal>div').fadeOut(600);
            $('body').removeClass('hidden_mod');
        };
    });

});