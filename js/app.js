var array1 = ['Pühapäev','Esmaspäev','Teisipäev','Kolmapäev','Neljapäev','Reede','Laupäev'],
	array2 = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'],
	fonts = ['f1','f2','f3','f4'],
	style,
	fontSize;
function _(el){
	return document.getElementById(el);
}
function rei(input){
	if(input < 10){
		input = '0'+input;
	} 
	return input;
}
function switcher(){
	if(document.body.className == 'day'){
		document.body.className = "";
		document.body.className = "night";
	} else {
		document.body.className = "";
		document.body.className = "day";
	}
}
function random(){
	var number = Math.floor((Math.random() * 4));
	return number;
}
function sub(){
	style = window.getComputedStyle(_('time'), null).getPropertyValue('font-size');
	fontSize = parseInt(style); 
	_('time').style.fontSize = (fontSize - 4) + 'px';
}
function add(){
	style = window.getComputedStyle(_('time'), null).getPropertyValue('font-size');
	fontSize = parseInt(style); 
	_('time').style.fontSize = (fontSize + 4) + 'px';
}
function setFonts(input){
	if(input !== null){
		_('date').className = "";
		_('time').className = "";
		_('date').className = fonts[input];
		_('time').className = fonts[input];
	} else {
	_('date').className = "";
	_('time').className = "";
	_('date').className = fonts[random()];
	_('time').className = fonts[random()];
	}
}
function setTime(){
	var a = new Date(),
        min = a.getMinutes(),
        sec = a.getSeconds(),
        hrs = a.getHours(),
		day = a.getDate(),
		month = a.getMonth(),
		weekday = a.getDay();
	min = rei(min);
	sec = rei(sec);
	hrs = rei(hrs);
	weekday = array1[weekday];
	month = array2[month];
	_('time').innerHTML = hrs+':'+min;
	_('date').innerHTML = weekday+', '+day+' '+month;
}

window.onload = function(){
	setTime();
	setInterval(setTime(), 1000);
	_('sub').addEventListener('click', function(event){
		event.preventDefault();
		sub();
	});
	_('add').addEventListener('click', function(event){
		event.preventDefault();
		add();
	});
	_('fonts').addEventListener('click', function(event){
		event.preventDefault();
		setFonts();
	});
	_('switch').addEventListener('click', function(event){
		event.preventDefault();
		switcher();
	});
	document.addEventListener('keydown', function(event){
		if(event.keyCode == 49){
			setFonts(0);
		} else if(event.keyCode == 50){
			setFonts(1);
		} else if(event.keyCode == 51){
			setFonts(2);
		} else if(event.keyCode == 52){
			setFonts(3);
		}
	});
	document.onkeydown = checkKey;
		function checkKey(e) {
			e = e || window.event;
			if (e.keyCode == '38') {
				add();
			}
			else if (e.keyCode == '40') {
				sub();
			}
			/*  credits to: http://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript 
			*	nt documnet/window.addEventListener('keydown'... ei mõikanud arrow keydele moz/chrome'is
			*/
		}

	
};