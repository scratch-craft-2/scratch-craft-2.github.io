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

function ready() {
  const gravity = new URLSearchParams(window.location.search).get("gravity");

if (gravity == "true") {
  let script_object = document.createElement("script"); 
  fetch('/files/gravity.js')
  .then(response => response.text())
  .then(data => {
    console.log(data);
    script_object.innerHTML = data;
  });
  console.log(script_object);
  document.body.appendChild(script_object);
  void(0);
}
}

document.addEventListener("DOMContentLoaded", ready);
