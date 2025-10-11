function playMusic(url) {
    var music = new Audio('/files/audio/click.wav');
    music.play();
    setTimeout(() => {
        document.location.href = url;
    }, 2000);
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
            // Используем querySelectorAll для поддержки сложных селекторов
            const elements = document.querySelectorAll(baseClass);
            
            // Обрабатываем каждый элемент
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                
                // Проверяем текущий набор классов
                if (element.classList.contains(baseClass)) {
                    // Если есть базовый класс - заменяем на целевой
                    element.classList.replace(baseClass, targetClass);
                    console.log(`Заменено: ${baseClass} -> ${targetClass}`);
                } else if (element.classList.contains(targetClass)) {
                    // Если есть целевой класс - заменяем на базовый
                    element.classList.replace(targetClass, baseClass);
                    console.log(`Заменено: ${targetClass} -> ${baseClass}`);
                } else {
                    console.warn(`Элемент не содержит ни ${baseClass}, ни ${targetClass}`);
                }
            }
        }
    }
}

// Исправленный пример JSON объекта с маппингом классов
// Убираем точки в ключах, так как они уже учитываются в querySelectorAll
const classMap = {
    'content_group.contributors-list': '.content_group contributors-listdark',
    'button contributor-type1': 'buttondark contributor-type1',
    'tutorial': 'tutorialdark',
    'normbody': 'darkbody',
    'link': 'linkdark'
};

// Обработка параметров URL
const urlParams = new URLSearchParams(location.search);
const seeParam = urlParams.get("see");

// Добавляем обработку нескольких условий
if (seeParam === "dark" || urlParams.has("dark")) {
    toggleClasses(classMap);
}

// Добавляем обработчик для отладки
window.addEventListener('DOMContentLoaded', () => {
    // Проверяем все классы перед применением
    for (let baseClass in classMap) {
        console.log(`Поиск элементов по селектору: ${baseClass}`);
        const elements = document.querySelectorAll(baseClass);
        console.log(`Найдено элементов: ${elements.length}`);
    }
});

// Функция для сброса стилей
function resetClasses() {
    for (let baseClass in classMap) {
        const targetClass = classMap[baseClass];
        const elements = document.querySelectorAll(targetClass);
        elements.forEach(element => {
            element.classList.replace(targetClass, baseClass);
        });
    }
}
