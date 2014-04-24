$('.collapse').collapse()
			
var edit = function() {
  $('.click2edit').summernote({focus: true});
};

var save = function() {
  var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
  $('.click2edit').destroy();
};

$(document).ready(function() {
  $('.summernote').summernote();
});

function handler( event ) {
var target = $( event.target );
if ( target.is( "li" ) ) {
target.children().toggle();
}
}
$( "ul" ).click( handler ).find( "ul" ).hide();