$(document).ready(function(){

    $('.setting').click(function(){
        
        $('.setting_menu').slideToggle(200);
        $('.setting').toggleClass('active');
    })

    var filter = $('.filter')

    $('.expenses .edit').click(function(){
    filter.fadeIn(600);
    })

    filter.click(function(e){
        var target = $(e.target);
        if (target.hasClass('filter')){
            filter.fadeOut(600);
        };
    });

    $('.paid input').click(function(){
        $('.paid label').removeClass('paid_check')
        $(this).parent().toggleClass('paid_check')
    });


    /*Bihavior for upload input*/
     var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( ".file_upload_button" ),
        lbl = wrapper.find( ".file_upload_mark" );

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

        inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Выбрать" );
        }else
            btn.text( file_name );
    }).change();

    $( window ).resize(function(){
    $( ".file_upload input" ).triggerHandler( "change" );
    });

    /* Settings for chosen plugin*/

    $('#upply').chosen({
        width:"100%",
        disable_search_threshold: 10
    });
    $('#frequency').chosen({
        width:"206px",
        disable_search_threshold: 10
    });
    



});


window.onload = function() {
    baron({
        root: '.baron',
        scroller: '.baron__scroller',
        bar: '.baron__bar',
        scrollingCls: '_scrolling',
        impact: 'clipper',
        draggingCls: '_dragging'
    });
    $('#datetimepicker1').datepicker({
        autoclose: true
    });
    $('#datetimepicker2').datepicker({
        autoclose: true
    });
};