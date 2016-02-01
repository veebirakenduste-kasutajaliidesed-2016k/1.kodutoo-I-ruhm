
 window.onload = function(){

   var clock = document.getElementById('clock');

   clock.addEventListener('click', function(){

     console.log('klikk');

   });

   /*window.addEventListener('keypress', function(event){
     console.log(event);

     if(event.charCode == 13){
       alert('enter');
     }

   });*/

   // enne timeouti kirjutan uhe korra ara
   writeDate();

   window.setInterval(function(){

     // iga ooteaja jarel kaivitatakse
     writeDate();

   }, 1000);// millisekundid - 1000ms = 1s


 };

function writeDate(){

  // tanane kp: Mon Feb 01 2016 12:42:44 GMT+0200 (FLE Standard Time)
	var today = new Date();
	
	months = ["Jaanuar","Veebruar","Marts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"];
	
	var hours = today.getHours();
	var minutes = setZeroBefore(today.getMinutes());
	var seconds = today.getSeconds();
	var month = today.getMonth();
	var year = today.getFullYear();
	var date = today.getDate();
	
	seconds = setZeroBefore(seconds);

	clock.innerHTML = setZeroBefore(hours) + ':'+ minutes + ':' + seconds + "<br><p id='kp'>" + date + ". " + months[month] + " " + year + "<p>";

}

// lisab nulli kui arv on 10st vaiksem
function setZeroBefore(number) {
  if(number < 10){
    number = '0' + number;
  }

  return number;
}