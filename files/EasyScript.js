// Основной класс интерпретатора
class Interpreter {
    constructor() {
        this.commands = {
            'лог': 'console.log',
            'добавить': 'document.createElement',
            'документ': 'document',
            'сообщить': 'alert',
            'если': 'if',
        };
         
        // Перехватываем выполнение кода
        this.interceptCode();
    }

    // Перехват выполнения кода
    interceptCode() {
        const originalEval = window.eval;
        window.eval = (code) => {
            try {
                // Преобразуем код и выполняем его
                return eval(this.interpret(code));
            } catch (e) {
                console.error('Ошибка выполнения:', e.message);
            }
        };
    }

    // Преобразует фразу в JavaScript код
    interpret(code) {
        return code.split(' ').map(word => {
            return this.commands[word] || word;
        }).join(' ');
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const interpreter = new Interpreter();
});
