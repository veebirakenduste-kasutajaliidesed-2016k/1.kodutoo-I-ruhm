window.onload = function clockTime(){
  today = new Date();

  H = today.getHours();
  M = today.getMinutes();
  S = today.getSeconds();

  M = checkTime(M);
  S = checkTime(S);

  document.getElementById('kell').innerHTML = H + ' : ' + M + ' : ' + S;

  t = setTimeout(clockTime, 1000);

};

function checkTime(i) {
    if (i < 10) {i = "0" + i;}
    return i;
}

function randcolor(){
  document.getElementById('kell').style.color = "#"+((1<<12)*Math.random()|0).toString(16);
}

function textSize(){

  tekstiSuurus = document.getElementById('kell').offsetWidth/8;

  document.getElementById("kell").style.fontSize = tekstiSuurus + "pt";

}

window.addEventListener("resize", textSize);
window.addEventListener("load", textSize);
