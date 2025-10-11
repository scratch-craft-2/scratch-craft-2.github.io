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
    'content_group contributors-list': 'content_group.contributors-listdark',
    'button contributor-type1': 'buttondark.contributor-type1',
    'tutorial': 'tutorialdark'
};

// Обработка параметра URL
const params = new URLSearchParams(location.search);
if (params.get("see") === "dark") {
    toggleClasses(classMap);
}
