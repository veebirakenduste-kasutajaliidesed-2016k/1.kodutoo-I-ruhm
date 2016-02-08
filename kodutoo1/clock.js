window.onload = function(){

  var clock = document.getElementById("clock");
  writeDate();
  window.setInterval(function(){
    writeDate();
  }, 1000);

};

function writeDate(){

  var today = new Date();
  var hours = zero(today.getHours());
  var minutes = zero(today.getMinutes());
  var seconds = zero(today.getSeconds());

  clock.innerHTML = "<span style='color:#99FC20;'>" +hours + "</span>:<span style='color:#FFF001;'>" + minutes + "</span>:<span style='color:#FD1999;'>" + seconds + "</span>";

}

function zero(num){
  if(num < 10){
    num = "0" + num;
  }
  return num;
}

$(document).ready(function(){
	$( document ).mousemove( function( event ) {
		var x = event.clientX - $(window).width() + 200;
		var y = event.clientY - $(window).height() / 2;
		var clientCoords = "rotateY( " + x / 15 + "deg ) rotateZ( " + y / 10 + "deg )";
		$( ".bat" ).css( "transform", clientCoords);
	});
	
	$(".bat").on('mousedown', function(e){
		var collides = $(".bat").overlaps("#hit");
		$("#hit")[collides.hits.length ? 'addClass' : 'removeClass']('over');
		$("#hit").addClass("ready")
		if($(".bat").overlaps("#hit")){
			if($("#hit").hasClass("ready")){
				$(".container").css("background-image", "url('img/cube_broken.png')")
				console.log("tere");
			}
		}
		e.preventDefault();
	});
	
	$(function() {
		$( "#draggable" ).draggable();
	});
	
});
        