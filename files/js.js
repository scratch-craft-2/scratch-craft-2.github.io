// Функция воспроизведения звука и перехода по ссылке
function playMusic(url) {
    const music = new Audio('/files/audio/click.wav');
    music.play();
    setTimeout(() => {
        document.location.href = url;
    }, 500);
}

// Инициализация при загрузке DOM
function ready() {
    const gravity = new URLSearchParams(window.location.search).get("gravity");
    
    if (gravity === "true") {
        const script_object = document.createElement("script");
        fetch('/files/gravity.js')
            .then(response => response.text())
            .then(data => {
                console.log(data);
                script_object.innerHTML = data;
            });
        
        console.log(script_object);
        document.head.appendChild(script_object);
    }
}
document.addEventListener("DOMContentLoaded", ready);

// Переключение CSS-классов
function toggleClasses(classMap) {
    for (const baseClass in classMap) {
        if (classMap.hasOwnProperty(baseClass)) {
            const targetClass = classMap[baseClass];
            const elements = document.querySelectorAll(`.${baseClass}`);
            
            elements.forEach(element => {
                if (element.classList.contains(baseClass)) {
                    element.classList.remove(baseClass);
                    element.classList.add(targetClass);
                } else if (element.classList.contains(targetClass)) {
                    element.classList.remove(targetClass);
                    element.classList.add(baseClass);
                }
            });
        }
    }
}

// Карта классов для тёмной темы
const classMap = {
    'normbody': 'darkbody',
    'link': 'linkdark',
    'content_group.contributors-list': 'content_group.contributors-listdark',
    'button.contributor-type1': 'buttondark.contributor-type1',
    'tutorial': 'tutorialdark'
};

// Активация тёмной темы по параметру URL
const params = new URLSearchParams(location.search);
if (params.get("see") === "dark") {
    toggleClasses(classMap);
}

// Вставка HTML в начало body
function insertAtBeginningOfBody(htmlString) {
    document.body.insertAdjacentHTML('afterbegin', htmlString);
}

// Проверка дат для сезонных изменений
function isMarch8th() {
    const today = new Date();
    return today.getMonth() === 2 && today.getDate() === 8;
}

function ismyBD() {
    const today = new Date();
    return today.getMonth() === 10 && today.getDate() === 20;
}

function isMarch14th() {
    const today = new Date();
    return today.getMonth() === 2 && today.getDate() === 14;
}

function ishallowen() {
    const today = new Date();
    return today.getMonth() === 9 && today.getDate() === 31;
}

function isAug6th() {
    const today = new Date();
    return today.getMonth() === 7 && today.getDate() === 6;
}

function isSeason3() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const startDate = new Date(currentYear, 8, 10);  // 10 сентября
    const endDate = new Date(currentYear, 10, 10);   // 10 ноября
    return now >= startDate && now <= endDate;
}

function isSeason4() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const startDate = new Date(currentYear, 10, 30); // 30 ноября
    const endDate = new Date(currentYear + 1, 1, 20); // 20 февраля следующего года
    return now >= startDate && now <= endDate;
}

// Смена логотипа в зависимости от даты
if (isMarch8th()) {
    const image = document.getElementById('image1');
    if (image) image.src = 'https://scratch-craft-2.github.io/files/img/imglogo8m.svg';
} else {
    console.log('Сегодня не 8 марта.');
}

if (isMarch14th()) {
    const image = document.getElementById('image1');
    if (image) image.src = 'https://scratch-craft-2.github.io/files/img/imglogoPI.svg';
} else {
    console.log('Сегодня не 14 марта.');
}

if (isAug6th()) {
    const image = document.getElementById('image1');
    if (image) image.src = 'https://scratch-craft-2.github.io/files/img/imglogoYT.svg';
} else {
    console.log('Сегодня не 6 августа.');
}

if (ismyBD()) {
    const image = document.getElementById('image1');
    if (image) image.src = 'https://scratch-craft-2.github.io/files/img/imglogoDB.svg';
}

// Сезонное оформление
if (isSeason3()) {
    insertAtBeginningOfBody(`
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
    `);
}

if (isSeason4()) {
    insertAtBeginningOfBody('<div class="snowblock"></div>');
}
if (ismyBD()) {
    (function() {
        const styleUrl = 'https://scratch-craft-2.github.io/files/css/HappyBDay.css';
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = styleUrl;
        document.head.appendChild(link);

        document.querySelectorAll('.aanimation').forEach(element => {
            element.classList.add('bday-animation');
        });

        const style = document.createElement('style');
        style.textContent = `
            #Happy {
                position: fixed;
                left: 0;
                bottom: 0;
                z-index: 1001;
            }
        `;
        document.body.appendChild(style);

        const pumpkinDiv = document.createElement('div');
        pumpkinDiv.id = 'Happy';
        pumpkinDiv.innerHTML = '<img src="https://scratch-craft-2.github.io/files/img/HBD.svg">';
        document.body.appendChild(pumpkinDiv);
    })();
}
// Хэллоуин-оформление
if (ishallowen()) {
    (function() {
        const styleUrl = 'https://scratch-craft-2.github.io/files/css/hallowen.css';
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = styleUrl;
        document.head.appendChild(link);

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

        document.querySelectorAll('.aanimation').forEach(element => {
            element.classList.add('halloween-animation');
        });

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

        const pumpkinDiv = document.createElement('div');
        pumpkinDiv.id = 'pumpkin';
        pumpkinDiv.innerHTML = '<img src="https://i.gyazo.com/3fad566ba3f8b5d08c98524267404d71.png">';
        document.body.appendChild(pumpkinDiv);
    })();
}

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
const p = new URLSearchParams(window.location.search).get("Pashalka");
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
})}

function copyCode(button) {
  const codeBlock = button.closest('.code-block');
  const codeText = codeBlock.querySelector('code').innerText;
  
  navigator.clipboard.writeText(codeText)
    .then(() => {
      // Кратковременная индикация успеха
      button.textContent = 'Скопировано!';
      setTimeout(() => {
        button.textContent = 'Копировать';
      }, 2000);
    })
    .catch(err => {
      console.error('Ошибка копирования:', err);
      alert('Не удалось скопировать код. Попробуйте вручную.');
    });
}



document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sidebar');

  if (!sidebar) {
    console.error('Элемент .sidebar не найден в DOM');
    return;
  }

  let lastScrollY = 0;
  let isHovered = false;

  function updateSidebarState() {
    const currentScrollY = window.scrollY;

    // ГЛАВНОЕ: если курсор на панели — показываем ВСЕГДА
    if (isHovered) {
      sidebar.classList.remove('hidden');
      document.documentElement.style.setProperty('--sidebar-visible', '1');
      return; // Прерываем выполнение, игнорируя логику прокрутки
    }

    // Логика для прокрутки (работает только если курсор НЕ на панели)
    if (currentScrollY > lastScrollY) {
      sidebar.classList.add('hidden');
      document.documentElement.style.setProperty('--sidebar-visible', '0');
    } else if (currentScrollY < lastScrollY) {
      sidebar.classList.remove('hidden');
      document.documentElement.style.setProperty('--sidebar-visible', '1');
    }

    lastScrollY = currentScrollY;
  }

  // Обработчики событий
  sidebar.addEventListener('mouseenter', () => {
    isHovered = true;
    updateSidebarState(); // Мгновенно показываем при наведении
  });

  sidebar.addEventListener('mouseleave', () => {
    isHovered = false;
    updateSidebarState(); // Возвращаем логику прокрутки при уходе курсора
  });

  window.addEventListener('scroll', updateSidebarState);
  updateSidebarState(); // Инициализация
});
