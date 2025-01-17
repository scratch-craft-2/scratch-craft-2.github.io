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
function changeStyle(theme) { const link = document.getElementById('theme-style'); if (theme === 'dark') { link.href = '/files/css/darkmodeStyle.css'; } else if (theme === 'light') { link.href = '/files/css/mainStyle.css'; } localStorage.setItem('currentTheme', theme); } window.onload = function() { const savedTheme = localStorage.getItem('currentTheme'); if (savedTheme) { changeStyle(savedTheme); } };
