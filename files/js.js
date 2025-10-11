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
function playMusic5(){
  var music = new Audio('/files/audio/click.wav');
  music.play();
setTimeout(document.location.href = "/courses" , 2000) ;
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
  document.head.appendChild(script_object);
  void(0);
}
}

document.addEventListener("DOMContentLoaded", ready);

// Функция для переключения классов
function toggleClasses(classMap) {
    // Проходим по всем парам ключ-значение в объекте
    for (let baseClass in classMap) {
        if (classMap.hasOwnProperty(baseClass)) {
            const targetClass = classMap[baseClass];
            
            // Получаем все элементы с базовым классом
            const elements = document.getElementsByClassName(baseClass);
            
            // Обрабатываем каждый элемент
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                
                // Проверяем текущий набор классов
                if (element.classList.contains(baseClass)) {
                    // Если есть базовый класс - заменяем на целевой
                    element.classList.replace(baseClass, targetClass);
                } else if (element.classList.contains(targetClass)) {
                    // Если есть целевой класс - заменяем на базовый
                    element.classList.replace(targetClass, baseClass);
                }
            }
        }
    }
}

// Пример JSON объекта с маппингом классов
const classMap = {
    'normbody': 'darkbody',     
    'link': 'linkdark',      
    'content_group.contributors-list': 'content_group.contributors-listdark',      
    'button.contributor-type1': 'buttondark.contributor-type1'  
    'tutorial': 'tutorialdark'  
};

