window.onload = function(){

  var cm = document.getElementById("cm");
  var inch = document.getElementById("inch");

  document.getElementById("to_inch").addEventListener("click", convertToInch);
  document.getElementById("to_cm").addEventListener("click", function(){
    cm.value = inch.value*2.54;
  });
};

function convertToInch(){

  //arvutan ümber tollideks ja lisan tollide väärtuse lahtrisse
  inch.value = cm.value/2.54;

}
