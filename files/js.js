function playMusic(url) {
    var music = new Audio('/files/audio/click.wav');
    music.play();
    setTimeout(() => {
        document.location.href = url;
    }, 500);
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
            
            // Используем querySelectorAll для поддержки сложных селекторов
            const elements = document.querySelectorAll(`.${baseClass}`);
            
            // Обрабатываем каждый элемент
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                
                // Проверяем текущий набор классов
                if (element.classList.contains(baseClass)) {
                    // Удаляем старый класс и добавляем новый
                    element.classList.remove(baseClass);
                    element.classList.add(targetClass);
                } else if (element.classList.contains(targetClass)) {
                    // Удаляем новый класс и добавляем старый
                    element.classList.remove(targetClass);
                    element.classList.add(baseClass);
                }
            }
        }
    }
}

// Пример объекта с маппингом классов
const classMap = {
    'normbody': 'darkbody',
    'link': 'linkdark',
    'content_group.contributors-list': 'content_group.contributors-listdark',
    'button.contributor-type1': 'buttondark.contributor-type1',
    'tutorial': 'tutorialdark'
};

// Обработка параметра URL
const params = new URLSearchParams(location.search);
if (params.get("see") === "dark") {
    toggleClasses(classMap);
}
function insertAtBeginningOfBody(htmlString) {
    document.body.insertAdjacentHTML('afterbegin', htmlString);
}
function isMarch8th() { const today = new Date(); return today.getMonth() === 2 && today.getDate() === 8;} 
function ismyBD() { const today = new Date(); return today.getMonth() === 10 && today.getDate() === 20;} 
function isMarch14th() { const today = new Date(); return today.getMonth() === 2 && today.getDate() === 14;} 
function ishallowen() { const today = new Date(); return today.getMonth() === 9 && today.getDate() === 31;} 
function isAug6th() { const today = new Date(); return today.getMonth() === 7 && today.getDate() === 6;} 
function isSeason3() {
  const now = new Date();
  const currentYear = now.getFullYear();

  // Создаём даты начала и конца диапазона
  const startDate = new Date(currentYear, 8, 10); // 10 сентября (месяц 8, т.к. январь = 0)
  const endDate = new Date(currentYear, 10, 10);   // 10 ноября (месяц 10)

  // Проверяем, что текущая дата попадает в диапазон
  return now >= startDate && now <= endDate;
}
function isSeason4() {
  const now = new Date();
  const currentYear = now.getFullYear();

  // Создаём даты начала и конца диапазона
  const startDate = new Date(currentYear, 10, 30); // 30 ноября текущего года
  const endDate = new Date(currentYear + 1, 1, 20); // 20 февраля следующего года

  // Проверяем, что текущая дата попадает в диапазон
  return now >= startDate && now <= endDate;
}

// Пример использования:
console.log(isInDateRange()); // true или false в зависимости от текущей даты
if (isMarch8th()) { var image = document.getElementById('image1'); image.src = 'https://scratch-craft-2.github.io/files/img/imglogo8m.svg';} else { console.log('Сегодня не 8 марта.'); }
if (isMarch14th()) { var image = document.getElementById('image1'); image.src = 'https://scratch-craft-2.github.io/files/img/imglogoPI.svg';} else { console.log('Сегодня не 14 марта.'); }
if (isAug6th()) { var image = document.getElementById('image1'); image.src = 'https://scratch-craft-2.github.io/files/img/imglogoYT.svg';} else { console.log('Сегодня не 14 марта.'); }
if (isMyBD()) { var image = document.getElementById('image1'); image.src = 'https://scratch-craft-2.github.io/files/img/imglogoDB.svg';}
if (isSeason3()) {insertAtBeginningOfBody(`
<div id="leaf-container">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
`)}
if (isSeason4()) {insertAtBeginningOfBody(`
<div class="snowblock">
`)}
if (ishallowen()) {(function() {
    // 1. Добавляем стили по указанному URL (предполагаем, что URL указан в переменной)
    const styleUrl = 'https://scratch-craft-2.github.io/files/css/hallowen.css'; // замените на нужный URL
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = styleUrl;
    document.head.appendChild(link);

    // 2. Создаём и добавляем HTML-структуру паука после тега <header>
    const spiderHtml = `
        <div class="spider">
            <div class="spiderweb"></div>
            <div class="body">
                <div class="eye left"></div>
                <div class="eye right"></div>
            </div>
            <div class="legs left">
                <div class="leg"></div>
                <div class="leg"></div>
                <div class="leg"></div>
            </div>
            <div class="legs right">
                <div class="leg"></div>
                <div class="leg"></div>
                <div class="leg"></div>
            </div>
        </div>
    `;
    
    const header = document.querySelector('header');
    if (header) {
        header.insertAdjacentHTML('afterend', spiderHtml);
    }

    // 3. Добавляем класс halloween-animation к элементам с классом aanimation
    const animatedElements = document.querySelectorAll('.aanimation');
    animatedElements.forEach(element => {
        element.classList.add('halloween-animation');
    });

    // 4. Добавляем <style> в <body>
    const style = document.createElement('style');
    style.textContent = `
        #pumpkin {
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 1001;
        }
    `;
    document.body.appendChild(style);

    // 5. Добавляем div с тыквой в body
    const pumpkinDiv = document.createElement('div');
    pumpkinDiv.id = 'pumpkin';
    pumpkinDiv.innerHTML = '<img src="https://i.gyazo.com/3fad566ba3f8b5d08c98524267404d71.png">';
    document.body.appendChild(pumpkinDiv);
})();}
const p = new URLSearchParams(window.location.search).get("Pashalka");
window.firework = (x, y) => Array(100).fill().forEach(() => {
  const p = document.createElement('div');
  p.style.cssText = `
    position:absolute;
    border-radius:50%;
    background-color:hsl(${Math.random()*360},100%,50%);
    width:${Math.random()*4+3}px;
    height:${Math.random()*4+3}px;
    left:${x}px;
    top:${y}px;
    pointer-events:none;
    opacity:1
  `;
  document.body.appendChild(p);
  
  ((px, py, a, s) => {
    const anim = () => {
      p.style.left = `${px += Math.cos(a) * s}px`;
      p.style.top = `${py += Math.sin(a) * s + 0.2}px`;
      p.style.opacity -= 0.01;
      
      p.style.opacity > 0
        ? requestAnimationFrame(anim)
        : p.remove();
    };
    requestAnimationFrame(anim);
  })(x, y, Math.random() * Math.PI * 2, Math.random() * 5 + 3);
});
if (p == "true") {const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};
randomColor();
    if (ismyBD()) {
    firework(0, 0);
    }               
document.addEventListener('click', (event) => {
    if (ismyBD()) {
    firework(event.clientX, event.clientY);
    } 
})};
