window.onload = function clockTime(){
  today = new Date();

  H = today.getHours();
  M = today.getMinutes();
  S = today.getSeconds();

  M = checkTime(M);
  S = checkTime(S);

  document.getElementById('clock').innerHTML = H + ' : ' + M + ' : ' + S;

  t = setTimeout(clockTime, 1000);

};

function checkTime(i) {
    if (i < 10) {i = "0" + i;}
    return i;
}

function randcolor(){
  document.getElementById('clock').style.color = "#"+((1<<12)*Math.random()|0).toString(16);
}

function textSize(){

  textSizee = document.getElementById('clock').offsetWidth/8;

  document.getElementById("clock").style.fontSize = textSizee + "pt";

}

window.addEventListener("resize", textSize);
window.addEventListener("load", textSize);
