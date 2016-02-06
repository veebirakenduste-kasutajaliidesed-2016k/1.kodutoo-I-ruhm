window.onload = function(){
  var cm = document.getElementById('cm');
  var inch = document.getElementById('inch');

  document.getElementById('toInch').addEventListener('click', convertToInch);
  document.getElementById('toCm').addEventListener('click', function(){
    cm.value = inch.value * 2.54;
  });
};


function convertToInch(){
  inch.value = cm.value/2.54;
}
