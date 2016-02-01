


window.onload = function(){

	

	var clock = document.getElementById('clock')
	var datetime = document.getElementById('date')



	window.setInterval(function(){writeDate()}, 1000);
	
};


function writeDate(){


	var today = new Date();
		monthname = [ "Jaanuar", "Veebuar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember" ]; 
		dayname= ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"]
		day = dayname[today.getDay()];
		date = today.getDate();
		month = monthname[today.getMonth()];
		year  = today.getFullYear();
		hours = setZeroBefore(today.getHours());
		minutes = setZeroBefore(today.getMinutes());
		seconds = setZeroBefore(today.getSeconds());

	clock.innerHTML = hours + ':' + minutes  + ':' + seconds;
	datetime.innerHTML = day + '  ' + date + '  ' + month + '  ' + year;


}

function setZeroBefore(number) {
	if(number < 10){
		number= '0' + number;
	}
	return number;
}



jQuery(function($) {
    $('#datetime,#clock').mouseover(function() {
        var dWidth = $(document).width() - 100,
            dHeight = $(document).height() - 100, 
            nextX = Math.floor(Math.random() * dWidth),
            nextY = Math.floor(Math.random() * dHeight);
        $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
    });
});

function colorFunction() {
    document.getElementById("datetime").setAttribute("class", "second");

}

function color2Function() {

    document.getElementById("clock").setAttribute('class','second');
}



function backgroundFunction() {
    document.body.style.backgroundImage = "url('images/Teine.gif')";
    
}
function background2Function() {

    document.body.style.backgroundImage = "url('images/tabamus.gif')";
}