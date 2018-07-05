$(() => {
  console.log('go');

  //if artists, on hover background color blue else white

  $( ".artists" ).on( "mouseenter", function() {
    $( this ).css( "background-color", "orange" );
  });
  $( ".artists" ).on( "mouseleave", function() {
    $( this ).css( "background-color", "white" );
  });
  $( ".gallery" ).on( "mouseenter", function() {
    $( this ).css( "background-color", "#73b153" );
  });
  $( ".gallery" ).on( "mouseleave", function() {
    $( this ).css( "background-color", "white" );
  });
  $( ".performances" ).on( "mouseenter", function() {
    $( this ).css( "background-color", "#b15353" );
  });
  $( ".performances" ).on( "mouseleave", function() {
    $( this ).css( "background-color", "white" );
  });
  $( ".workshops" ).on( "mouseenter", function() {
    $( this ).css( "background-color", "#308ec5" );
  });
  $( ".workshops" ).on( "mouseleave", function() {
    $( this ).css( "background-color", "white" );
  });
  $( ".cities" ).on( "mouseenter", function() {
    $( this ).css( "background-color", "#a730c5" );
  });
  $( ".cities" ).on( "mouseleave", function() {
    $( this ).css( "background-color", "white" );
  });
  $( ".docuvideo" ).on( "mouseenter", function() {
    $( this ).css( "background-color", "#03a9f4" );
  });
  $( ".docuvideo" ).on( "mouseleave", function() {
    $( this ).css( "background-color", "white" );
  });




});
