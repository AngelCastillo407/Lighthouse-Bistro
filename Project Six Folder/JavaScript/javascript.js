$(document).ready(function() {
  var date = 'Today is: ' + new Date($.now());
  $('#date').html(date);
});

$(document).ready(function(){
    $(".hover").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "initial");
    });
});

$(document).ready(function(){
    $(".hover").hover(function(){
        $(this).css("color", "red");
        }, function(){
        $(this).css("color", "initial");
    });
});

$(document).ready(function(){
	
var maxLength = 64;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var length = maxLength-length;
  
   if (length ==  0)
   {
	  $('#chars').text(length + " of 64 characters remaining");
      $('#chars').css("color", "red");
	  $('#chars').css("font-weight", "bold");
   }
	else
	{
		$('#chars').text(length + " of 64 characters remaining");
		$('#chars').css("color", "green");
	    $('#chars').css("font-weight", "normal");
	}
});

});