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
const theme = document.getElementById('    const theme = document.getElementById('theme');

    theme.addEventListener('click', function(){
      if(getCookie('theme') == null){
        setCookie('theme', '1', {secure: true, 'max-age': 60 * 60 * 24 * 30 * 3});
      }else{
        if(getCookie('theme') == 1){
          setCookie('theme', '0', {secure: true, 'max-age': 60 * 60 * 24 * 30 * 3});
        }
        else{
          setCookie('theme', '1', {secure: true, 'max-age': 60 * 60 * 24 * 30 * 3});
        }
      }
      window.location.reload();
    });

    function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
');

    theme.addEventListener('click', function(){
      if(getCookie('theme') == null){
        setCookie('theme', '1', {secure: true, 'max-age': 60 * 60 * 24 * 30 * 3});
      }else{
        if(getCookie('theme') == 1){
          setCookie('theme', '0', {secure: true, 'max-age': 60 * 60 * 24 * 30 * 3});
        }
        else{
          setCookie('theme', '1', {secure: true, 'max-age': 60 * 60 * 24 * 30 * 3});
        }
      }
      window.location.reload();
    });

    function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
