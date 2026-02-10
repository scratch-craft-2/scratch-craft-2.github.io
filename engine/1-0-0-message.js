/**
 * Система всплывающих сообщений для сайта
 * Функция cre-open-message выводит уведомление с текстом, цветом и иконкой
 */

// Создаём контейнер для всплывающих сообщений (если ещё не создан)
if (!document.getElementById('cre-messages-container')) {
    const container = document.createElement('div');
    container.id = 'cre-messages-container';
    container.style.position = 'fixed';
    container.style.top = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '10px';
    document.body.appendChild(container);
}

/**
 * Основная функция для отображения всплывающего сообщения
 * @param {string} text - текст сообщения
 * @param {string} color - цвет фона (по умолчанию: '#333')
 * @param {string} icon - URL иконки или символ Unicode (по умолчанию: 'ℹ️')
 */
function creOpenMessage(text, color = '#333', icon = 'ℹ️') {
    // Создаём элемент уведомления
    const message = document.createElement('div');
    message.style.background = color;
    message.style.color = '#fff';
    message.style.padding = '12px 16px';
    message.style.borderRadius = '8px';
    message.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    message.style.display = 'flex';
    message.style.alignItems = 'center';
    message.style.gap = '10px';
    message.style.fontFamily = 'Arial, sans-serif';
    message.style.fontSize = '14px';
    message.style.maxWidth = '300px';
    message.style.wordBreak = 'break-word';
    message.style.animation = 'slideIn 0.3s ease-out';

    // Добавляем иконку
    const iconSpan = document.createElement('span');
    iconSpan.textContent = icon;
    iconSpan.style.fontSize = '18px';
    message.appendChild(iconSpan);

    // Добавляем текст
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    message.appendChild(textSpan);

    // Добавляем сообщение в контейнер
    document.getElementById('cre-messages-container').appendChild(message);

    // Автоматическое исчезновение через 5 секунд
    setTimeout(() => {
        message.style.transition = 'opacity 0.5s ease';
        message.style.opacity = '0';
        setTimeout(() => {
            message.remove();
        }, 500);
    }, 5000);
}

// Добавляем CSS-анимацию в документ (если ещё не добавлена)
if (!document.getElementById('cre-messages-styles')) {
    const style = document.createElement('style');
    style.id = 'cre-messages-styles';
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}
