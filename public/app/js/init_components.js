$(document).ready(function() {
    //Materialize.updateTextFields();
    $('select').material_select().click(function( event ) {
        event.stopPropagation();
    });
    $('.parallax').parallax();

});

