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

         // Создаем глобальные функции
 this.createGlobalFunctions();
 }

 // Создает глобальные функции для всех команд
 createGlobalFunctions() {
 for (let keyword in this.commands) {
 windowkeyword = function(...args) {
 const command = this.commandskeyword;
 return eval(`${command}(${JSON.stringify(args)})`);
 }.bind(this);
 }
 }

 // Добавляет новые команды в интерпретатор
 addCommand(russian, javascript) {
 this.commandsrussian = javascript;
 windowrussian = function(...args) {
 return eval(`${javascript}(${JSON.stringify(args)})`);
 };
 }

 // Обрабатывает весь код автоматически
 interceptCode() {
 const originalEval = window.eval;
 window.eval = (code) => {
 try {
 return originalEval(this.interpret(code));
 } catch(e) {
 console.error('Ошибка выполнения:', e.message);
 }
 };
 }

 // Преобразует фразу в JavaScript код
 interpret(code) {
 return code.split(' ').map(word => {
 return this.commandsword || word;
 }).join(' ');
 }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
 const interpreter = new Interpreter();
 interpreter.interceptCode();
});
// Создаем глобальную переменную для простого использования
if (typeof window !== 'undefined') {
    window.EasyScript = initEasyScript();
}
