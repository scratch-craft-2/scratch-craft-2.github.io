// Основной класс интерпретатора
class Interpreter {
    constructor() {
        this.commands = {
            'лог': 'console.log',
            'добавить': 'document.createElement',
            'документ': 'document',
            'сообщить': 'alert',
            'если': 'if',
            'иначе': '} else {',
            'конец': '}',
            'равно': '==',
            'больше': '>',
            'меньше': '<',
            'и': '&&',
            'или': '||',
            'не': '!'
        };

        this.keywords = Object.keys(this.commands);
    }

    // Преобразует фразу в JavaScript код
    interpret(code) {
        return code.split(' ').map(word => {
            return this.commandsword || word;
        }).join(' ');
    }

    // Выполняет преобразованный код
    execute(code) {
        try {
            eval(this.interpret(code));
        } catch(e) {
            console.error('Ошибка выполнения:', e.message);
        }
    }

    // Метод для замены console.log
    replaceConsoleLog() {
        const originalLog = console.log;
        console.log = function(message) {
            if (typeof message === 'string' && message.includes('.сообщение')) {
                const interpreted = this.interpret(message);
                eval(interpreted);
            } else {
                originalLog.apply(console, arguments);
            }
        }.bind(this);
    }
}

// Экспортируем глобальную функцию
function initEasyScript() {
    const interpreter = new Interpreter();
    interpreter.replaceConsoleLog();
    return interpreter;
}

// Экспортируем для использования в модульных системах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = initEasyScript;
}

// Создаем глобальную переменную для простого использования
if (typeof window !== 'undefined') {
    window.EasyScript = initEasyScript();
}