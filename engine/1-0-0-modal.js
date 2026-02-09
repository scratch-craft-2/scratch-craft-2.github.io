  // Скрипт для открытия модальных окон по атрибуту modal 
  document.addEventListener('DOMContentLoaded', () => {
    // Находим все элементы с классом cre-dialog-open
    const openTriggers = document.querySelectorAll('.cre-dialog-open');

    openTriggers.forEach(trigger => {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        // Получаем значение атрибута modal
        const modalId = this.getAttribute('modal');
        if (!modalId) return;

        // Находим целевое модальное окно по id
        const modal = document.getElementById(modalId);
        if (!modal || !modal.classList.contains('cre-modal')) return;

        // Имитируем переход по якорю
        window.location.hash = modalId;
      });
    });

    // Закрытие модального окна при клике на крестик
    document.querySelectorAll('.cre-close').forEach(closeBtn => {
      closeBtn.addEventListener('click', function () {
        const modal = this.closest('.cre-modal');
        if (modal) {
          // Убираем хэш из URL, чтобы закрыть окно
          window.location.hash = '';
        }
      });
    });

    // Закрытие окна при клике вне контента
    window.addEventListener('click', (e) => {
      document.querySelectorAll('.cre-modal').forEach(modal => {
        if (e.target === modal) {
          window.location.hash = '';
        }
      });
    });
  });
