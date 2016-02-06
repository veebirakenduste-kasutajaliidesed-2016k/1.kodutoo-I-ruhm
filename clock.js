
 window.onload = function(){

   var clock = document.getElementById('clock');
   var count1 = 0;
   clock.style.color = "magenta";
   colors = ["red", "black", "green", "blue", "yellow", "cyan"];
   var color1 = 0;

	clock.addEventListener('click', function(){
		
		color1 = colors[count1];
		console.log(color1);
		count1++;
		clock.style.color = color1;
		clock.style.border = color1;
	
		if(count1 > 5){
			
			count1 = 0;
			
		}

	});

   window.addEventListener('keypress', function(event){
     console.log(event);

     if(event.keyCode == 13){
       clock.style.border = "solid 10px";
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