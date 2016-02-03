

function clockBars(){
  var today = new Date();
  var timeHours = setZeroBefore(today.getHours());
  var timeMinutes = setZeroBefore(today.getMinutes());
  var timeSeconds = setZeroBefore(today.getSeconds());

  //Baride valued
  document.getElementById('hourmeter').value = timeHours;
  document.getElementById('minutemeter').value = timeMinutes;
  document.getElementById('secondmeter').value = timeSeconds;

  //baride all olev value
  document.getElementById('hourtime').innerHTML = timeHours;
  document.getElementById('minutetime').innerHTML = timeMinutes;
  document.getElementById('secondtime').innerHTML = timeSeconds;

  //intervall
  var t = setTimeout(clockBars, 500);
}

function setZeroBefore(number) {
 if(number < 10){
   number = '0' + number;
 }
 return number;
}


//muutuste funktsioonid
function selectChange(){
  if (document.getElementById('selectchange').value == "blackbackground") {
      document.body.style.backgroundColor = "#474747";
      document.getElementById('change').style.backgroundColor = "#404040";
  } else if (document.getElementById('selectchange').value == "revertchanges") {
    document.body.style.backgroundColor = "#ffffff";
    document.getElementById('date').innerHTML = "";
    document.getElementById('change').style.backgroundColor = "#EFEFEF";
  } else if (document.getElementById('selectchange').value == "date") {
    var today = new Date();
    var dateDay  = setZeroBefore(today.getDate());
    var dateMonth = today.getMonth()+1;
    var dateYear = setZeroBefore(today.getFullYear());
    document.getElementById('date').innerHTML = dateDay + '-'+ setZeroBefore(dateMonth)+ '-' + dateYear;
}
}
