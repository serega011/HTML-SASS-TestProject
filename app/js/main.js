$(document).ready(function() {

    var modal = $('.modal');

    $('.header_button-log').click(function() {
        modal.fadeIn(600);
        $('.login').fadeIn(600);
        $('body').toggleClass('hidden_mod');
    });
    $('.intro_info-button').click(function() {
        modal.fadeIn(600);
        $('.registration').fadeIn(600);
        $('body').toggleClass('hidden_mod');
    });
    $('#forgot').click(function() {
        $('.login').fadeOut(400);
        $('.change-password').delay(400).fadeIn(400);
        $('body').toggleClass('hidden_mod');
    });




    modal.click(function(e) {
        event = e || window.event;
        var target = $(event.target) || $(event.srcElement);
        if (target.hasClass('modal')) {
            modal.fadeOut(600);
            $('.modal>div').fadeOut(600);
            $('body').removeClass('hidden_mod');
        };
    });

});
