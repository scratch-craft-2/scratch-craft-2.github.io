function playMusic(){
  var music = new Audio('/files/audio/click.wav');
  music.play();
setTimeout(document.location.href = "/туториалы" , 2000) ;}
function playMusic2(){
  var music = new Audio('/files/audio/click.wav');
  music.play();
setTimeout(document.location.href = "/звуки" , 2000) ;
  } 
function playMusic3(){
  var music = new Audio('/files/audio/click.wav');
  music.play();
setTimeout(document.location.href = "/игры" , 2000) ;
  } 
function playMusic4(){
  var music = new Audio('/files/audio/click.wav');
  music.play();
setTimeout(document.location.href = "/инструменты" , 2000) ;
  } 
switch (new URLSearchParams(location.search).get("gravity")) {
  case "true":
    document.createElement("script");
    script.src="//gravityscript.github.io/grav.js"; 
    document.body.appendChild(script); 
    void(0);
