
 window.onload = function(){

   var clock = document.getElementById('clock');

	clock.addEventListener('click', function(){

	document.getElementById("kell").style.color = "green";
	//console.log('klikk');

	});

   window.addEventListener('keypress', function(event){
     console.log(event);

     if(event.keyCode == 13){
       alert('enter');
     }

   });

   // enne timeouti kirjutan uhe korra ara
   writeDate();

   window.setInterval(function(){

     // iga ooteaja jarel kaivitatakse
     writeDate();

   }, 500);// millisekundid - 1000ms = 1s
   
   var count = 0;
	
	window.setInterval(function(){
	
		if(count > 9){
			count = 0;
		}
		
		//console.log(count);
		var url = json.data[count].images.original.url;
		
		document.getElementById("giphy").style.backgroundImage = 'url('+url+')';
		
		//console.log(url);
		
		count++;
     

   }, 1000);// millisekundid - 1000ms = 1s
	

 };

function writeDate(){

	var today = new Date();
	
	months = ["Jaanuar","Veebruar","Marts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"];
	
	var hours = today.getHours();
	var minutes = setZeroBefore(today.getMinutes());
	var seconds = today.getSeconds();
	var month = today.getMonth();
	var year = today.getFullYear();
	var date = today.getDate();
	
	seconds = setZeroBefore(seconds);

	clock.innerHTML = "<p id='kell'>" + setZeroBefore(hours) + ':'+ minutes + ':' + seconds + "</p><br><p id='kp'>" + date + ". " + months[month] + " " + year + "</p>";

}

function setZeroBefore(number) {
  if(number < 10){
    number = '0' + number;
  }

  return number;
}

/*function changeClockColor(){
	
	var color = document.getElementById("clockColor").value
	
	var count1 = 0;
	
	if(typeof color !='undefined'){
		
		window.setInterval(function(){
		
			document.getElementById("kell").style.color = "green";
		
		}, 1);
		
	}
	
	console.log(color)
	
}*/