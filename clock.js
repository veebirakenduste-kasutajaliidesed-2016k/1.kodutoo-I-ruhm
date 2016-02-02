window.onload = function(){
writeDate();
   var clock = document.getElementById('clock');
   window.setInterval(function(){
writeDate();

   }, 1000 //1000 = 1s
 );


 };

function writeDate(){

  // tänane kp: Mon Feb 01 2016 12:42:44 GMT+0200 (FLE Standard Time)
  var today = new Date();
  var longmonth = ["January", "February", "March", "April", "June", "July", "August", "September", "November", "December"];
  var hours = setZeroBefore(today.getHours());
  var minutes = setZeroBefore(today.getMinutes());
  var seconds = setZeroBefore(today.getSeconds());
  var day = setZeroBefore(today.getDate());
  var month = setZeroBefore(longmonth[today.getMonth()]);
  var year = setZeroBefore(today.getFullYear());

  clock.innerHTML = hours + ':'+ minutes + ':' + seconds;
  date.innerHTML = day + '.' + ' '+ month + ',' + ' ' + year;
}


//lisab 0 kui arv on 10st väiksem
function setZeroBefore(number){
  if(number < 10){
number = '0' + number;

  }
return number;
}

function changeBackground(){
  if (document.getElementById('selectchange').value == "blackBackground") {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "#474747";
      //document.getElementById('change').style.backgroundColor = "#474747";

      //document.getElementById('change').style.backgroundImage = "none";
  } else if (document.getElementById('selectchange').value == "defaultBackground") {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#D3DBDE";
    //document.getElementById('change').style.backgroundColor = "#D3DBDE";

    //document.getElementById('change').style.backgroundImage = "none";
  }
  else if (document.getElementById('selectchange').value == "sillyBackground") {
    document.body.style.backgroundColor = "#FF6EBB";
    //document.getElementById('change').style.backgroundColor = "#FF6EBB";
    document.body.style.backgroundImage = "none";
    //document.getElementById('change').style.backgroundImage = "none";
  }
  else if (document.getElementById('selectchange').value == "pictureBackground") {
    document.body.style.backgroundImage = "url('blackbackground.png')";
    //document.getElementById('change').style.backgroundImage = "url('blackbackground.png')";
  }
}

function Mirror(){
  document.getElementById('display').style.transform.value = 'scale(-1, 1)';
}
function UnMirror(){
document.getElementById('display').style.transform.value = 'scale(1, 1)';

}

function rotateRight(){
  document.getElementById('display').style.transform = 'rotate(90)';
}
function rotateLeft(){
  document.getElementById('display').style.transform = 'rotate(-90)';
}
