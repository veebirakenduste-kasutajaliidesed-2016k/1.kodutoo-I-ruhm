window .onload = function(){
 var theme = "white";

 //tänane kp: Mon Feb 01 2016 12:43:50 GMT+0200 (FLE Standard Time)

 var clock = document.getElementById("clock");

 //enne timeouti kirjutan ühe korra ära
 writeDate();

 window.setInterval(function(){

   //iga ooteaja järel käivitatakse
     writeDate();
 }, 100);//millisekundid - 1000ms = 1 s
 clock.addEventListener("dblclick", function(){
     if(theme === "white"){
       document.body.style.backgroundColor="#A6DEEE";
       document.body.style.color="#000000";
       theme = "blue";
     } else if (theme === "blue"){
       document.body.style.backgroundColor="#77dd77";
       document.body.style.color="#000000";
           theme = "green";
      } else if (theme === "green"){
        document.body.style.backgroundColor="#fdfd96";
        document.body.style.color="#000000";
          theme = "yellow";
      } else if (theme === "yellow"){
       document.body.style.backgroundColor="#ffd1dc";
       document.body.style.color="#000000";
           theme = "pink";

     } else {
       document.body.style.backgroundColor="#FFFFFF";
       document.body.style.color="#000000";
       theme = "white";
     }
   })
};


function writeDate(){
 var today = new Date();

 var hours = today.getHours();
 var minutes = today.getMinutes();
 var seconds = today.getSeconds();

 var day =today.getDate();
 var month = today.getMonth()+1;
 var year = today.getFullYear();

 seconds = setZeroBefore(seconds);

 date.innerHTML = setZeroBefore(day) + "." + setZeroBefore(month) + "." + (year);

 clock.innerHTML = setZeroBefore(hours) + ":" + minutes + ":" +seconds;
}

//lisab nulli kui arv on 10st väiksem
function setZeroBefore(number){
 if(number < 10){
   number= "0" + number;
 }
 return number;
}
